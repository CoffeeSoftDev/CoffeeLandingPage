# Requirements Document

## Introduction

Esta funcionalidad agrega controles de reproducción visibles (play/pause) para los videos en la sección de proyectos del sitio web de Agrinol. Actualmente, los videos solo muestran un botón de play que desaparece al reproducir, y la única forma de pausar es haciendo clic directamente en el video. Se requiere un control más intuitivo y visible para detener la reproducción.

## Glossary

- **Video_Container**: Contenedor HTML que envuelve cada elemento de video en la sección de proyectos
- **Video_Player**: Elemento HTML `<video>` que reproduce el contenido multimedia
- **Play_Button**: Botón visual que inicia la reproducción del video
- **Pause_Button**: Botón visual que detiene la reproducción del video
- **Control_Overlay**: Capa superpuesta sobre el video que contiene los controles de reproducción

## Requirements

### Requirement 1: Mostrar botón de pausa durante reproducción

**User Story:** Como usuario, quiero ver un botón de pausa visible cuando un video está reproduciéndose, para poder detener la reproducción fácilmente.

#### Acceptance Criteria

1. WHEN a Video_Player is playing, THE Control_Overlay SHALL display a visible Pause_Button
2. WHEN a user clicks the Pause_Button, THE Video_Player SHALL pause playback immediately
3. WHEN the Video_Player is paused, THE Control_Overlay SHALL display the Play_Button instead of the Pause_Button

### Requirement 2: Transición visual entre estados play/pause

**User Story:** Como usuario, quiero que los controles cambien visualmente según el estado del video, para saber si está reproduciéndose o pausado.

#### Acceptance Criteria

1. WHEN the Video_Player transitions from paused to playing, THE Control_Overlay SHALL animate the transition from Play_Button to Pause_Button
2. WHEN the Video_Player transitions from playing to paused, THE Control_Overlay SHALL animate the transition from Pause_Button to Play_Button
3. THE Control_Overlay SHALL maintain consistent styling with the diseño actual del sitio

### Requirement 3: Control visible con hover durante reproducción

**User Story:** Como usuario, quiero poder ver los controles al pasar el mouse sobre un video en reproducción, para tener acceso rápido a la pausa.

#### Acceptance Criteria

1. WHILE a Video_Player is playing, THE Control_Overlay SHALL be semi-transparent by default
2. WHEN a user hovers over a playing Video_Container, THE Control_Overlay SHALL become fully visible
3. WHEN a user moves the mouse away from a playing Video_Container, THE Control_Overlay SHALL return to semi-transparent state after 2 seconds

### Requirement 4: Comportamiento al finalizar video

**User Story:** Como usuario, quiero que el botón de play reaparezca cuando el video termina, para poder reproducirlo nuevamente.

#### Acceptance Criteria

1. WHEN a Video_Player reaches the end of playback, THE Control_Overlay SHALL display the Play_Button
2. WHEN a Video_Player ends and user clicks Play_Button, THE Video_Player SHALL restart from the beginning

### Requirement 5: Pausar otros videos al reproducir uno nuevo

**User Story:** Como usuario, quiero que solo un video se reproduzca a la vez, para evitar confusión con múltiples audios simultáneos.

#### Acceptance Criteria

1. WHEN a user starts playing a Video_Player, THE system SHALL pause all other Video_Players in the section
2. WHEN another Video_Player is paused automatically, THE Control_Overlay SHALL display its Play_Button
