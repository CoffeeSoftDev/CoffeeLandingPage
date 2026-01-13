# Design Document: Video Playback Controls

## Overview

Esta funcionalidad mejora la experiencia de usuario en la sección de proyectos agregando controles de reproducción visibles (play/pause) para los videos. La implementación modifica la función `renderProyectos()` para generar el HTML con los nuevos controles, y actualiza `initVideoPlayers()` para manejar la lógica de estados y transiciones.

## Architecture

La solución se implementa completamente en el frontend, modificando el archivo `assets/js/index.js` existente:

```
┌─────────────────────────────────────────────────────────┐
│                    index.js                              │
├─────────────────────────────────────────────────────────┤
│  renderProyectos()                                       │
│  └── Genera HTML con Control_Overlay (play + pause)     │
├─────────────────────────────────────────────────────────┤
│  initVideoPlayers()                                      │
│  ├── Maneja eventos click en play/pause                 │
│  ├── Controla transiciones de estado                    │
│  ├── Gestiona hover para mostrar/ocultar controles      │
│  └── Pausa otros videos al reproducir uno nuevo         │
└─────────────────────────────────────────────────────────┘
```

## Components and Interfaces

### 1. Video Container HTML Structure

El HTML generado por `renderProyectos()` incluirá:

```html
<div class="video-container relative rounded-3xl shadow-lg overflow-hidden">
  <video class="w-full h-full object-cover" poster="..." preload="metadata">
    <source src="..." type="video/mp4">
  </video>
  <div class="control-overlay absolute inset-0 flex items-center justify-center transition-opacity">
    <!-- Play Button -->
    <button class="play-btn ...">
      <svg><!-- Play icon --></svg>
    </button>
    <!-- Pause Button (hidden by default) -->
    <button class="pause-btn hidden ...">
      <svg><!-- Pause icon --></svg>
    </button>
  </div>
</div>
```

### 2. CSS Classes for State Management

| Clase | Descripción |
|-------|-------------|
| `.control-overlay` | Contenedor de controles con transición de opacidad |
| `.control-overlay.playing` | Estado cuando el video está reproduciéndose (semi-transparente) |
| `.control-overlay.playing:hover` | Controles visibles al hacer hover durante reproducción |
| `.play-btn` | Botón de reproducción |
| `.pause-btn` | Botón de pausa |
| `.hidden` | Oculta el elemento |

### 3. JavaScript Interface

```javascript
// Función principal de inicialización
function initVideoPlayers() {
  // Para cada video-container:
  // 1. Obtener referencias a video, playBtn, pauseBtn, overlay
  // 2. Configurar event listeners
  // 3. Manejar estados y transiciones
}

// Funciones auxiliares
function pauseAllVideos(exceptVideo) { /* ... */ }
function showPlayButton(container) { /* ... */ }
function showPauseButton(container) { /* ... */ }
function setOverlayPlaying(container, isPlaying) { /* ... */ }
```

## Data Models

No se requieren nuevos modelos de datos. La estructura existente en `apiData.proyectos.videos` permanece sin cambios:

```javascript
{
  poster: string,  // URL de la imagen de preview
  src: string,     // URL del video
  size: "large" | "small"  // Tamaño del contenedor
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Button State Consistency

*For any* Video_Container at any point in time, if the Video_Player is playing (video.paused === false) then Pause_Button is visible and Play_Button is hidden, and if the Video_Player is paused (video.paused === true) then Play_Button is visible and Pause_Button is hidden.

**Validates: Requirements 1.1, 1.2, 1.3**

### Property 2: Playback Exclusivity

*For any* collection of Video_Players in the projects section, at most one Video_Player can be in playing state at any time. When a Video_Player starts playing, all other Video_Players must be paused and display their Play_Button.

**Validates: Requirements 5.1, 5.2**

### Property 3: End State Reset

*For any* Video_Player that reaches the end of playback (ended event), the Control_Overlay SHALL display the Play_Button, allowing the user to restart playback.

**Validates: Requirements 4.1, 4.2**

## Error Handling

| Escenario | Manejo |
|-----------|--------|
| Video no carga | Mantener Play_Button visible, no mostrar error visual |
| Click rápido múltiple | Ignorar clicks mientras hay transición en progreso |
| Video sin source | Graceful degradation - botones no hacen nada |

## Testing Strategy

### Unit Tests

Dado que esta es una implementación de UI en JavaScript vanilla sin framework de testing configurado, las pruebas se realizarán manualmente verificando:

1. Click en play inicia reproducción y muestra pause
2. Click en pause detiene reproducción y muestra play
3. Hover sobre video en reproducción muestra controles
4. Reproducir un video pausa los demás
5. Video al terminar muestra play

### Property-Based Testing

Para esta funcionalidad de UI, las propiedades se verificarán mediante:

1. **Inspección visual**: Verificar que los estados de botones son consistentes
2. **Testing manual**: Interactuar con múltiples videos para verificar exclusividad
3. **Console logging**: Agregar logs temporales para verificar transiciones de estado

### Integration Points

- La función `renderProyectos()` debe generar el HTML correcto
- La función `initVideoPlayers()` debe inicializarse después del renderizado
- Los estilos CSS deben estar definidos en `assets/css/styles.css`
