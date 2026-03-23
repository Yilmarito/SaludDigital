═══════════════════════════════════════════════════════════════
  SALUD DIGITAL — Guía de Imágenes y Videos
  Images & Video Guide
═══════════════════════════════════════════════════════════════

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARTE 1 — IMÁGENES  /  PART 1 — IMAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Todas las imágenes están en:  📁 salud-digital/images/
Reemplaza cada archivo con tu imagen manteniendo el mismo nombre.
Formatos: .jpg  .jpeg  .png  .webp

TARJETAS DE MÓDULOS (portada)  —  Tamaño ideal: 900 × 500 px
──────────────────────────────────────────────────
  modulo1.jpg  →  Módulo 01: Seguridad y Privacidad en Línea
  modulo2.jpg  →  Módulo 02: Ciudadanía Digital Responsable
  modulo3.jpg  →  Módulo 03: Gestión del Tiempo Digital
  modulo4.jpg  →  Módulo 04: Salud Mental Digital
  modulo5.jpg  →  Módulo 05: Hábitos Digitales Sostenibles

SUBSECCIONES (interior de cada módulo)  —  Tamaño ideal: 900 × 500 px
──────────────────────────────────────────────────
  m1_sub1.jpg  →  Módulo 01 / Sub 1: Contraseñas y Autenticación
  m1_sub2.jpg  →  Módulo 01 / Sub 2: Privacidad en Redes Sociales
  m2_sub1.jpg  →  Módulo 02 / Sub 1: Identificación de Fake News
  m2_sub2.jpg  →  Módulo 02 / Sub 2: Ética y Netiqueta Digital
  m3_sub1.jpg  →  Módulo 03 / Sub 1: Tiempo en Pantalla
  m3_sub2.jpg  →  Módulo 03 / Sub 2: Productividad Digital
  m4_sub1.jpg  →  Módulo 04 / Sub 1: Redes Sociales y Bienestar
  m4_sub2.jpg  →  Módulo 04 / Sub 2: Detox Digital
  m5_sub1.jpg  →  Módulo 05 / Sub 1: Huella de Carbono Digital
  m5_sub2.jpg  →  Módulo 05 / Sub 2: Consumo Responsable


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARTE 2 — VIDEOS DE YOUTUBE  /  PART 2 — YOUTUBE VIDEOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CÓMO OBTENER EL ID DE UN VIDEO DE YOUTUBE:
  URL del video:   https://www.youtube.com/watch?v=dQw4w9WgXcQ
  ID del video:    dQw4w9WgXcQ  (la parte después de ?v=)
  URL de embed:    https://www.youtube.com/embed/dQw4w9WgXcQ

CÓMO ACTIVAR UN VIDEO EN EL HTML:
─────────────────────────────────
  1. Abre el archivo HTML correspondiente.
  2. Busca el bloque:
       <div class="video-placeholder"> ... </div>
  3. ELIMINA ese bloque completo.
  4. Busca el comentario:
       <!-- <iframe src="https://www.youtube.com/embed/VIDEO_ID_N" ...
  5. ELIMINA los comentarios <!-- y --> que rodean el iframe.
  6. Reemplaza VIDEO_ID_N con el ID real de tu video.
  7. Guarda el archivo.

EJEMPLO ANTES:
  <div class="video-placeholder">
    <div class="video-placeholder-icon">▶</div>
    <span class="video-placeholder-label">Agregar video #1</span>
  </div>
  <!--
  <iframe src="https://www.youtube.com/embed/VIDEO_ID_1" ...>
  </iframe>
  -->

EJEMPLO DESPUÉS:
  <iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="Mi video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen loading="lazy">
  </iframe>


DÓNDE ESTÁN LOS BLOQUES DE VIDEO:
──────────────────────────────────
  index.html          →  Sección "Videos Recomendados" (3 videos) — antes del footer
  pages/modulo1.html  →  2 videos inline (uno por subsección)
  pages/modulo2.html  →  2 videos inline (uno por subsección)
  pages/modulo3.html  →  2 videos inline (uno por subsección)
  pages/modulo4.html  →  2 videos inline (uno por subsección)
  pages/modulo5.html  →  2 videos inline (uno por subsección)

TOTAL: 13 espacios de video disponibles
       (3 en inicio + 2 por cada uno de los 5 módulos)

═══════════════════════════════════════════════════════════════
