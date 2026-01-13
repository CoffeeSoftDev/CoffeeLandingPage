# Implementation Plan: Video Playback Controls

## Overview

Implementación de controles de reproducción visibles (play/pause) para los videos en la sección de proyectos. Se modificará el archivo `assets/js/index.js` para actualizar el HTML generado y la lógica de manejo de eventos.

## Tasks

- [x] 1. Actualizar función renderProyectos() con nuevos controles
  - [x] 1.1 Modificar el HTML generado para incluir botón de pausa
    - Agregar botón pause-btn junto al play-btn existente
    - El pause-btn debe estar oculto por defecto (clase hidden)
    - Usar icono SVG de pausa consistente con el diseño actual
    - _Requirements: 1.1, 1.3_

- [x] 2. Actualizar función initVideoPlayers() con lógica play/pause
  - [x] 2.1 Agregar event listener para el botón de pausa
    - Al hacer click en pause-btn, pausar el video
    - Ocultar pause-btn y mostrar play-btn
    - _Requirements: 1.2, 1.3_
  
  - [x] 2.2 Actualizar lógica del botón play para mostrar pause
    - Al reproducir, ocultar play-btn y mostrar pause-btn
    - Agregar clase 'playing' al control-overlay
    - _Requirements: 1.1, 2.1_
  
  - [x] 2.3 Implementar pausa automática de otros videos
    - Cuando un video inicia, pausar todos los demás
    - Actualizar UI de videos pausados automáticamente
    - _Requirements: 5.1, 5.2_

- [x] 3. Agregar estilos CSS para estados de control
  - [x] 3.1 Agregar estilos para control-overlay en estado playing
    - Opacidad reducida por defecto cuando está reproduciendo
    - Opacidad completa en hover
    - Transición suave de opacidad
    - _Requirements: 3.1, 3.2, 3.3_

- [x] 4. Checkpoint - Verificar funcionalidad básica
  - Probar que play/pause funcionan correctamente
  - Verificar que solo un video se reproduce a la vez
  - Confirmar transiciones visuales

- [ ]* 5. Pruebas manuales de propiedades
  - [ ]* 5.1 Verificar Property 1: Button State Consistency
    - **Property 1: Button State Consistency**
    - **Validates: Requirements 1.1, 1.2, 1.3**
  
  - [ ]* 5.2 Verificar Property 2: Playback Exclusivity
    - **Property 2: Playback Exclusivity**
    - **Validates: Requirements 5.1, 5.2**
  
  - [ ]* 5.3 Verificar Property 3: End State Reset
    - **Property 3: End State Reset**
    - **Validates: Requirements 4.1, 4.2**

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- La implementación usa JavaScript vanilla sin dependencias adicionales
- Los estilos se agregan al archivo CSS existente
- Se mantiene compatibilidad con el diseño actual del sitio
