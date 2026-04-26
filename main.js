/* ═══════════════════════════════════════════════
   SALUD DIGITAL — main.js
   Estructura:
   1. i18n  — textos en español e inglés
   2. quizData — preguntas del quiz por idioma
   3. modalContent — HTML dinámico de cada módulo
   4. Estado global
   5. setLang() — cambio de idioma
   6. openModal() / closeModal()
   7. Quiz: renderQuestion, selectAnswer, nextQuestion,
            showResult, restartQuiz
   8. Scroll Reveal (IntersectionObserver)
   9. Hamburger menu
   10. Init
═══════════════════════════════════════════════ */

/* ── 1. i18n DATA ──────────────────────────── */
const i18n = {
  es: {
    brand: "SALUD DIGITAL",
    nav_home: "Inicio",
    nav_modules: "Módulos",
    nav_quiz: "Quiz",
    nav_sources: "Fuentes",
    hero_badge: " Bienestar en la era digital",
    hero_h1a: "Tu",
    hero_h1b: " Salud Digital",
    hero_h1c: "Importa",
    hero_p: "Aprende a vivir de forma más saludable, consciente y segura en el entorno digital. Contenido basado en evidencia científica e institucional.",
    hero_cta1: "Explorar Módulos",
    hero_cta2: "Hacer el Quiz",
    stat1: "Módulos",
    stat2: "Subsecciones",
    stat3: "Fuentes académicas",
    mod_tag: "Contenido",
    mod_h2: "Cinco Módulos Temáticos",
    mod_p: "Cada módulo contiene dos subsecciones con información validada y recursos visuales.",
    mod_preamble: "En esta plataforma encontrarás un espacio diseñado para promover el bienestar digital, donde podrás explorar contenidos orientados a mejorar tu relación con la tecnología. Aquí descubrirás estrategias para gestionar tu tiempo en línea, fortalecer tu salud mental digital, practicar una ciudadanía responsable y adoptar hábitos digitales sostenibles.",
    ver_mas: "Ver más →",
    m1_num: "MÓDULO 01", m1_title: "Seguridad y Privacidad en Línea",
    m1_desc: "Protege tus datos personales, entiende las amenazas digitales y aplica buenas prácticas de ciberseguridad.",
    m1_s1: "Gestión de contraseñas y autenticación",
    m1_s2: "Privacidad en redes sociales",
    m2_num: "MÓDULO 02", m2_title: "Ciudadanía Digital Responsable",
    m2_desc: "Desarrolla competencias éticas en el entorno digital: pensamiento crítico ante la desinformación y netiqueta.",
    m2_s1: "Identificación de fake news y desinformación",
    m2_s2: "Ética y netiqueta digital",
    m3_num: "MÓDULO 03", m3_title: "Gestión del Tiempo Digital",
    m3_desc: "Aprende a equilibrar el uso de pantallas con hábitos saludables que mejoran tu productividad y bienestar.",
    m3_s1: "Técnicas para reducir el tiempo en pantalla",
    m3_s2: "Productividad digital sin agotamiento",
    m4_num: "MÓDULO 04", m4_title: "Salud Mental Digital",
    m4_desc: "Comprende el impacto de las redes sociales en el bienestar emocional y estrategias para mantener un equilibrio sano.",
    m4_s1: "Redes sociales y bienestar emocional",
    m4_s2: "Detox digital y desconexión consciente",
    m5_num: "MÓDULO 05", m5_title: "Hábitos Digitales Sostenibles",
    m5_desc: "Explora cómo el uso consciente de la tecnología puede reducir nuestra huella digital y promover un futuro más sostenible.",
    m5_s1: "Huella de carbono digital",
    m5_s2: "Consumo responsable de dispositivos",
    quiz_tag: "Interactivo",
    quiz_h2: "¿Cuánto sabes de Salud Digital?",
    quiz_p: "Pon a prueba tus conocimientos con este quiz de 5 preguntas basadas en evidencia.",
    quiz_next: "Siguiente →",
    quiz_restart: "Volver a intentarlo",
    src_title: "Respaldado por fuentes institucionales y académicas",
    footer_desc: "Plataforma educativa de bienestar digital con contenido basado en evidencia científica e institucional.",
    footer_nav: "Navegación",
    footer_mods: "Módulos",
    footer_copy: "© 2025 Salud Digital. Contenido educativo de libre acceso.",

    /* ── Sección de videos (index) ── */
    vid_section_title: "Videos Recomendados",
    vid_section_desc:  "Recursos audiovisuales seleccionados para complementar cada módulo.",
    vid_index_1_title: "Introducción a la Salud Digital",
    vid_index_1_desc:  "Visión general del bienestar en la era digital.",
    vid_index_2_title: "Hábitos Digitales Saludables",
    vid_index_2_desc:  "Estrategias prácticas para una vida digital equilibrada.",
    vid_index_3_title: "Impacto de las Redes Sociales",
    vid_index_3_desc:  "Evidencia científica sobre redes sociales y bienestar.",
    vid_add_1: "Agregar video #1",
    vid_add_2: "Agregar video #2",
    vid_add_3: "Agregar video #3",

    /* ── Videos inline por módulo ── */
    vid_m1_ph1:  "Agregar video #1", vid_m1_lbl1: "▶ ¿Cómo crear contraseñas seguras?",
    vid_m1_ph2:  "Agregar video #2", vid_m1_lbl2: "▶ Privacidad en redes sociales",
    vid_m2_ph1:  "Agregar video #1", vid_m2_lbl1: "▶ Cómo identificar noticias falsas",
    vid_m2_ph2:  "Agregar video #2", vid_m2_lbl2: "▶ Ética digital y ciudadanía responsable",
    vid_m3_ph1:  "Agregar video #1", vid_m3_lbl1: "▶ Técnicas para reducir el tiempo en pantalla",
    vid_m3_ph2:  "Agregar video #2", vid_m3_lbl2: "▶ Productividad digital sin agotamiento",
    vid_m4_ph1:  "Agregar video #1", vid_m4_lbl1: "▶ Redes sociales y salud mental",
    vid_m4_ph2:  "Agregar video #2", vid_m4_lbl2: "▶ Cómo hacer un detox digital",
    vid_m5_ph1:  "Agregar video #1", vid_m5_lbl1: "▶ La huella de carbono de internet",
    vid_m5_ph2:  "Agregar video #2", vid_m5_lbl2: "▶ Consumo responsable de tecnología",
    vid_hint: "Pon el archivo en la carpeta videos/ y recarga la página",
    vid_badge_1: "Video", vid_badge_2: "Video", vid_badge_3: "Video",
    /* ── UX / usabilidad ── */
    quiz_tip_es: " Te recomendamos explorar los módulos antes de poner a prueba tus conocimientos.",
    quiz_tip_en: " We recommend exploring the modules before testing your knowledge.",
    quiz_guide: " Te recomendamos revisar los módulos antes de comenzar el quiz para obtener mejores resultados.",
    breadcrumb_home: "Inicio",
    breadcrumb_modules: "Módulos",
    breadcrumb_quiz: "Quiz",
    breadcrumb_sources: "Fuentes",
    back_top: "↑",
    /* ── Puntos clave por módulo ── */
    m1_kp1: "Crea contraseñas únicas de +15 caracteres",
    m1_kp2: "Activa la autenticación en dos pasos (MFA)",
    m1_kp3: "Revisa tu privacidad en redes sociales",
    m2_kp1: "Verifica fuentes antes de compartir noticias",
    m2_kp2: "Practica la netiqueta en tus interacciones",
    m2_kp3: "Desarrolla pensamiento crítico digital",
    m3_kp1: "Aplica el método Pomodoro para enfocarte",
    m3_kp2: "Establece zonas y horarios sin pantallas",
    m3_kp3: "Crea rituales de cierre de jornada digital",
    m4_kp1: "Reduce el scroll pasivo en redes sociales",
    m4_kp2: "Practica el detox digital semanal",
    m4_kp3: "Protege tu sueño: sin pantallas 30 min antes",
    m5_kp1: "Reduce las emisiones de tu actividad digital",
    m5_kp2: "Repara y reutiliza dispositivos tecnológicos",
    m5_kp3: "Adopta hábitos tecnológicos sostenibles",


    /* ── Contenido enriquecido de subsecciones ── */

    // MÓDULO 1 — Seguridad y Privacidad
    m1_sub1_title: " Gestión de Contraseñas y Autenticación",
    m1_sub1_body: "El uso de contraseñas débiles o reutilizadas es la causa principal del 86% de las filtraciones de datos, según Verizon DBIR 2023. El NIST SP 800-63B establece que una contraseña segura debe tener mínimo 15 caracteres, ser única por servicio y nunca incluir información personal predecible como fechas de nacimiento o nombres.",
    m1_sub1_tips_title: " Recomendaciones",
    m1_sub1_tips: ["Usa un gestor de contraseñas como Bitwarden, 1Password o KeePass.", "Activa la autenticación multifactor (MFA) en todas tus cuentas importantes.", "Nunca reutilices la misma contraseña en más de un servicio.", "Usa frases largas y aleatorias: son más seguras que contraseñas cortas y complejas.", "Cambia tus contraseñas si sospechas que una cuenta fue comprometida."],
    m1_sub1_habits_title: " Hábitos Saludables",
    m1_sub1_habits: ["Revisa mensualmente si tus correos aparecen en filtraciones en haveibeenpwned.com.", "Activa alertas de inicio de sesión en tus cuentas bancarias y redes sociales.", "Usa contraseñas diferentes para el correo principal que para el resto de servicios.", "Configura un PIN de respaldo seguro en tu autenticador de dos pasos."],
    m1_sub1_benefits_title: " Ventajas de una Buena Gestión",
    m1_sub1_benefits: ["Reduces drásticamente el riesgo de robo de identidad.", "Proteges tus datos financieros y personales.", "Recuperas el control rápidamente si una cuenta es comprometida.", "Generas tranquilidad digital al saber que tus cuentas están blindadas."],
    m1_sub1_src: "Fuente: NIST SP 800-63B · Verizon DBIR 2023 · haveibeenpwned.com",

    m1_sub2_title: " Privacidad en Redes Sociales",
    m1_sub2_body: "Las redes sociales recopilan datos de ubicación, comportamiento, preferencias y relaciones para construir perfiles publicitarios detallados. La ENISA advierte que el 79% de los sitios más populares contienen rastreadores de terceros invisibles para el usuario. El RGPD europeo otorga el derecho a solicitar la eliminación de tus datos en cualquier momento.",
    m1_sub2_tips_title: " Recomendaciones",
    m1_sub2_tips: ["Revisa y ajusta la configuración de privacidad de cada red social al menos cada 3 meses.", "Limita los permisos de apps de terceros conectadas a tus cuentas.", "Usa una dirección de correo alternativa para registros en plataformas no críticas.", "Desactiva la geolocalización en apps que no la necesitan.", "Instala extensiones de bloqueo de rastreo como uBlock Origin o Privacy Badger."],
    m1_sub2_habits_title: " Hábitos Saludables",
    m1_sub2_habits: ["Antes de publicar, pregúntate: ¿estarías cómodo si esto lo viera tu jefe o familia?", "No compartas información sensible como número de teléfono o dirección en perfiles públicos.", "Revoca accesos de apps antiguas que ya no uses.", "Activa las notificaciones de actividad sospechosa en tus cuentas."],
    m1_sub2_benefits_title: " Ventajas de Proteger tu Privacidad",
    m1_sub2_benefits: ["Reduces la exposición a publicidad dirigida invasiva.", "Proteges tu reputación digital presente y futura.", "Minimizas el riesgo de suplantación de identidad.", "Tienes mayor control sobre tu huella digital."],
    m1_sub2_src: "Fuente: ENISA (enisa.europa.eu) · Reglamento RGPD (UE) 2016/679 · EFF Cover Your Tracks",

    // MÓDULO 2 — Ciudadanía Digital
    m2_sub1_title: " Identificación de Fake News y Desinformación",
    m2_sub1_body: "La UNESCO define la desinformación como contenido falso creado con intención de engañar. Un estudio del MIT publicado en Science (2018) demostró que las noticias falsas se difunden 6 veces más rápido que las verdaderas en redes sociales. El 64% de los adultos admite haber compartido una noticia sin verificarla, según el Reuters Institute.",
    m2_sub1_tips_title: " Recomendaciones",
    m2_sub1_tips: ["Verifica la fuente original antes de compartir cualquier noticia.", "Consulta plataformas de fact-checking: Maldita.es, Snopes.com, AFP Factual.", "Comprueba la fecha de publicación; muchas noticias viejas se recirculan como actuales.", "Busca la misma noticia en al menos 2 medios independientes.", "Desconfía de titulares que generan indignación o miedo exagerado."],
    m2_sub1_habits_title: " Hábitos Saludables",
    m2_sub1_habits: ["Tómate 30 segundos antes de compartir: lee el artículo completo, no solo el titular.", "Suscríbete a boletines de medios de calidad contrastada.", "Practica la lectura lateral: busca información sobre la fuente antes de confiar en ella.", "Habla con familia y amigos sobre cómo identificar información falsa."],
    m2_sub1_benefits_title: " Ventajas de Ser un Lector Crítico",
    m2_sub1_benefits: ["Contribuyes a frenar la propagación de desinformación.", "Tomas mejores decisiones basadas en hechos reales.", "Proteges tu reputación al no compartir contenido falso.", "Fortaleces tu pensamiento crítico en todos los ámbitos de la vida."],
    m2_sub1_src: "Fuente: UNESCO Media & Information Literacy · Vosoughi et al., Science 2018 · Reuters Institute",

    m2_sub2_title: " Ética y Netiqueta Digital",
    m2_sub2_body: "La netiqueta es el conjunto de normas de conducta en entornos digitales. El Cyberbullying Research Center reporta que el 37% de jóvenes ha sufrido acoso digital. La ONU reconoce que los derechos humanos aplican plenamente en línea, incluyendo la dignidad, la privacidad y la libertad de expresión responsable.",
    m2_sub2_tips_title: " Recomendaciones",
    m2_sub2_tips: ["Escribe como si la otra persona pudiera verte: respeta el tono y las formas.", "Nunca publiques información personal de terceros sin su consentimiento.", "Ante un conflicto digital, espera antes de responder; el calor del momento lleva a errores.", "Reporta el contenido abusivo en las plataformas en lugar de ignorarlo.", "Reconoce y valora las contribuciones de los demás en espacios colaborativos."],
    m2_sub2_habits_title: " Hábitos Saludables",
    m2_sub2_habits: ["Usa el 'modo sin contexto': antes de enviar un mensaje, léelo como si fuera la primera vez.", "Practica la desconexión de debates tóxicos; no todas las batallas valen la pena.", "Agradece y reconoce públicamente el buen contenido que consumes.", "Enseña netiqueta a menores desde edades tempranas."],
    m2_sub2_benefits_title: " Ventajas de una Buena Netiqueta",
    m2_sub2_benefits: ["Construyes relaciones digitales más sanas y duraderas.", "Mejoras tu reputación profesional y personal en línea.", "Contribuyes a crear entornos digitales más seguros e inclusivos.", "Reduces conflictos y malentendidos innecesarios."],
    m2_sub2_src: "Fuente: UNICEF (unicef.org) · Cyberbullying Research Center 2022 · ONU Derechos Digitales",

    // MÓDULO 3 — Gestión del Tiempo
    m3_sub1_title: " Técnicas para Reducir el Tiempo en Pantalla",
    m3_sub1_body: "La OMS establece que los menores de 5 años no deben superar 1 hora de pantalla al día, y recomienda limites para todas las edades. Un estudio de la Universidad de Bath (2023) demostró que solo una semana sin redes sociales mejora significativamente la calidad del sueño, el estado de ánimo y la concentración.",
    m3_sub1_tips_title: " Recomendaciones",
    m3_sub1_tips: ["Activa el modo 'tiempo de pantalla' en iOS o 'bienestar digital' en Android para monitorizar tu uso.", "Aplica el método Pomodoro: 25 minutos de trabajo concentrado, 5 de descanso sin pantalla.", "Establece zonas libres de dispositivos: dormitorio, mesa del comedor.", "Usa el modo escala de grises en tu teléfono para reducir su atractivo visual.", "Apaga las notificaciones no esenciales y consulta el teléfono en momentos programados."],
    m3_sub1_habits_title: " Hábitos Saludables",
    m3_sub1_habits: ["Empieza el día sin mirar el teléfono durante los primeros 30 minutos.", "Termina el día dejando el teléfono fuera del dormitorio al menos 1 hora antes de dormir.", "Sustituye el scroll pasivo por actividades activas: lectura, ejercicio o conversación.", "Una vez a la semana, haz un día de uso mínimo de redes sociales."],
    m3_sub1_benefits_title: " Ventajas de Reducir el Tiempo en Pantalla",
    m3_sub1_benefits: ["Mejoría significativa en la calidad del sueño.", "Mayor concentración y productividad durante el día.", "Reducción de la ansiedad asociada al FOMO (miedo a perderse algo).", "Más tiempo para relaciones personales y actividades físicas."],
    m3_sub1_src: "Fuente: OMS (who.int) · Univ. of Bath, Computers in Human Behavior 2023",

    m3_sub2_title: " Productividad Digital sin Agotamiento",
    m3_sub2_body: "El 'burnout digital' afecta al 67% de los trabajadores remotos según un estudio de Buffer (2023). La APA confirma que establecer límites claros entre trabajo y descanso digital reduce el estrés en un 30% y mejora la satisfacción laboral. La clave está en crear rituales de inicio y cierre de la jornada laboral digital.",
    m3_sub2_tips_title: " Recomendaciones",
    m3_sub2_tips: ["Define un horario fijo de inicio y fin de la jornada laboral digital y respétalo.", "Usa herramientas de gestión de tareas como Todoist, Notion o Trello para organizar el trabajo.", "Bloquea sitios distractores con extensiones como Freedom o Cold Turkey durante las horas de trabajo.", "Programa revisiones de correo y mensajes en momentos concretos (no de forma continua).", "Incluye descansos activos cada 90 minutos: levántate, estira, camina."],
    m3_sub2_habits_title: " Hábitos Saludables",
    m3_sub2_habits: ["Crea un ritual de cierre: escribe 3 cosas que lograste hoy y cierra el ordenador.", "Separa físicamente el espacio de trabajo del de descanso cuando sea posible.", "Desactiva las notificaciones de trabajo en el teléfono fuera del horario laboral.", "Practica la regla del 'correo electrónico sin correo': usa alternativas asíncronas cuando sea posible."],
    m3_sub2_benefits_title: " Ventajas de una Productividad Saludable",
    m3_sub2_benefits: ["Mayor rendimiento y calidad del trabajo realizado.", "Reducción del estrés crónico y prevención del burnout.", "Mejora del bienestar general y la satisfacción personal.", "Más energía y creatividad disponibles para proyectos importantes."],
    m3_sub2_src: "Fuente: APA (apa.org) · Buffer State of Remote Work 2023 · Journal of Occupational Health Psychology",

    // MÓDULO 4 — Salud Mental
    m4_sub1_title: " Redes Sociales y Bienestar Emocional",
    m4_sub1_body: "Investigaciones en JAMA Pediatrics demuestran que más de 3 horas diarias en redes sociales se asocia con mayor ansiedad y depresión en adolescentes. La comparación social constante en plataformas visuales intensifica la insatisfacción corporal. Sin embargo, el uso activo (crear, comentar, conectar) tiene efectos mucho menos negativos que el uso pasivo (solo scrollear).",
    m4_sub1_tips_title: " Recomendaciones",
    m4_sub1_tips: ["Sigue cuentas que te inspiren y aporten valor real; elimina las que te generan envidia o tristeza.", "Desactiva los contadores de likes para reducir la validación social externa.", "Limita el scroll pasivo estableciendo un tiempo máximo diario por app.", "Toma descansos regulares de redes sociales, especialmente en periodos de estrés.", "Si notas que una plataforma te afecta negativamente, considera pausar o desinstalarla temporalmente."],
    m4_sub1_habits_title: " Hábitos Saludables",
    m4_sub1_habits: ["Antes de abrir una app de redes sociales, pregúntate: ¿cuál es mi intención ahora?", "Lleva un diario de cómo te sientes antes y después de usar redes sociales.", "Sustituye el primer scroll matutino por 5 minutos de respiración o meditación.", "Conecta con amigos en persona al menos una vez a la semana en lugar de solo en línea."],
    m4_sub1_benefits_title: " Ventajas de un Uso Consciente",
    m4_sub1_benefits: ["Mayor estabilidad emocional y autoestima.", "Menos tiempo comparándote con los demás.", "Relaciones digitales más significativas y de mejor calidad.", "Mejora en la concentración y en la calidad del sueño."],
    m4_sub1_src: "Fuente: JAMA Pediatrics 2019 · APA Guidelines on Social Media 2023 · Twenge & Campbell, Psychological Science",

    m4_sub2_title: " Detox Digital y Desconexión Consciente",
    m4_sub2_body: "El detox digital consiste en períodos voluntarios de desconexión de dispositivos digitales. Estudios de la UC San Diego y Stanford muestran que desactivar notificaciones reduce el cortisol (hormona del estrés) y mejora la atención sostenida. La National Sleep Foundation recomienda evitar pantallas al menos 30 minutos antes de dormir para proteger la producción de melatonina.",
    m4_sub2_tips_title: " Recomendaciones",
    m4_sub2_tips: ["Empieza con un mini-detox: 2 horas sin pantallas un día a la semana.", "Desactiva TODAS las notificaciones excepto llamadas y mensajes urgentes.", "Usa el modo 'No Molestar' por la noche de forma automática.", "Reemplaza la revisión nocturna del teléfono por leer un libro físico.", "Planifica actividades offline que disfrutes: caminatas, cocinar, dibujar."],
    m4_sub2_habits_title: " Hábitos Saludables",
    m4_sub2_habits: ["Carga el teléfono fuera del dormitorio; usa un despertador convencional.", "Un domingo al mes, haz un día completamente libre de pantallas no esenciales.", "Practica la 'mesa sin móvil' en comidas: pon el teléfono en otro cuarto.", "Antes de dormir, escribe 3 cosas positivas del día en papel, no en digital."],
    m4_sub2_benefits_title: " Ventajas del Detox Digital",
    m4_sub2_benefits: ["Mejora profunda de la calidad del sueño.", "Reducción de la ansiedad y aumento del bienestar general.", "Mayor presencia en las relaciones personales.", "Recuperación de la capacidad de aburrirse y de la creatividad espontánea."],
    m4_sub2_src: "Fuente: UC San Diego · National Sleep Foundation · Stanford Social Media Lab",

    // MÓDULO 5 — Hábitos Sostenibles
    m5_sub1_title: " Huella de Carbono Digital",
    m5_sub1_body: "El sector digital representa entre el 2 y 4% de las emisiones globales de CO₂, similar a la aviación civil. Según The Shift Project, el streaming de video es responsable del 60% del tráfico de internet y de una parte significativa de esas emisiones. Un correo con adjunto genera aproximadamente 50 gramos de CO₂; un año de correos representa el equivalente a 1.000 km en coche.",
    m5_sub1_tips_title: " Recomendaciones",
    m5_sub1_tips: ["Reduce la calidad del streaming cuando no necesites alta definición.", "Vacía la bandeja de entrada y borra suscripciones de correo que no lees.", "Usa WiFi en lugar de datos móviles: el WiFi consume menos energía.", "Elige servicios en la nube que usen energía renovable (Google, Microsoft 365 ya lo hacen).", "Comprime fotos y archivos antes de enviarlos por correo o subirlos a la nube."],
    m5_sub1_habits_title: " Hábitos Saludables",
    m5_sub1_habits: ["Una vez al mes, revisa y elimina archivos duplicados o innecesarios en la nube.", "Desactiva la reproducción automática en plataformas de video.", "Usa buscadores de menor impacto como Ecosia, que planta árboles con sus ingresos.", "Apaga dispositivos completamente en lugar de dejarlos en modo standby."],
    m5_sub1_benefits_title: " Ventajas de Reducir tu Huella Digital",
    m5_sub1_benefits: ["Contribuyes activamente a la lucha contra el cambio climático.", "Reduces costes de almacenamiento y consumo eléctrico.", "Mejoras la organización y velocidad de tus dispositivos.", "Inspiras a tu entorno a adoptar hábitos tecnológicos más sostenibles."],
    m5_sub1_src: "Fuente: The Shift Project 2019 · GeSI SMARTer 2030 · Carbon Trust Digital Report",

    m5_sub2_title: " Consumo Responsable de Dispositivos",
    m5_sub2_body: "La OCDE estima 50 millones de toneladas de residuos electrónicos anuales, el flujo de residuos de más rápido crecimiento en el mundo. Solo el 17% se recicla adecuadamente. Fabricar un smartphone requiere 70 kilos de materias primas y genera más CO₂ que todos los años de uso del dispositivo juntos. Alargar la vida útil de nuestros dispositivos es la acción individual de mayor impacto.",
    m5_sub2_tips_title: " Recomendaciones",
    m5_sub2_tips: ["Antes de comprar un nuevo dispositivo, valora repararlo; sitios como iFixit tienen guías gratuitas.", "Compra de segunda mano en plataformas como Back Market o Swappa.", "Deja tu dispositivo antiguo en puntos limpios o programas de devolución del fabricante.", "Evita accesorios de usar y tirar: carga con cable en lugar de bases descartables.", "Elige marcas con buena puntuación de reparabilidad (índice de reparabilidad en Francia)."],
    m5_sub2_habits_title: " Hábitos Saludables",
    m5_sub2_habits: ["Actualiza el software regularmente para prolongar la vida de tu dispositivo.", "Usa fundas protectoras para prevenir roturas innecesarias.", "Revisa si tu empresa u organización tiene programa de reciclaje de dispositivos.", "Reflexiona antes de cada compra tecnológica: ¿realmente lo necesito? ¿puede esperar?"],
    m5_sub2_benefits_title: " Ventajas del Consumo Responsable",
    m5_sub2_benefits: ["Ahorras dinero significativo a largo plazo.", "Reduces tu impacto ambiental de forma directa y medible.", "Apoyas modelos de negocio más éticos y sostenibles.", "Contribuyes a reducir la extracción de minerales en zonas de conflicto."],
    m5_sub2_src: "Fuente: OCDE e-waste report · European Environment Agency 2022 · iFixit Repairability Index",
  },

  en: {
    brand: "DIGITAL HEALTH",
    nav_home: "Home",
    nav_modules: "Modules",
    nav_quiz: "Quiz",
    nav_sources: "Sources",
    hero_badge: " Wellbeing in the digital age",
    hero_h1a: "Your",
    hero_h1b: " Digital Health",
    hero_h1c: "Matters",
    hero_p: "Learn to live healthier, more consciously and safely in the digital world. Evidence-based institutional content.",
    hero_cta1: "Explore Modules",
    hero_cta2: "Take the Quiz",
    stat1: "Modules",
    stat2: "Subsections",
    stat3: "Academic sources",
    mod_tag: "Content",
    mod_h2: "Five Thematic Modules",
    mod_p: "Each module contains two subsections with validated information and visual resources.",
    mod_preamble: "This platform offers a space designed to promote digital wellbeing, where you can explore content aimed at improving your relationship with technology. Here you will discover strategies to manage your online time, strengthen your digital mental health, practise responsible citizenship and adopt sustainable digital habits.",
    ver_mas: "Learn more →",
    m1_num: "MODULE 01", m1_title: "Online Security & Privacy",
    m1_desc: "Protect your personal data, understand digital threats and apply good cybersecurity practices.",
    m1_s1: "Password management & authentication",
    m1_s2: "Privacy on social networks",
    m2_num: "MODULE 02", m2_title: "Responsible Digital Citizenship",
    m2_desc: "Build ethical competencies online: critical thinking against misinformation and digital etiquette.",
    m2_s1: "Identifying fake news & disinformation",
    m2_s2: "Ethics and digital netiquette",
    m3_num: "MODULE 03", m3_title: "Digital Time Management",
    m3_desc: "Learn to balance screen time with healthy habits that improve your productivity and wellbeing.",
    m3_s1: "Techniques to reduce screen time",
    m3_s2: "Digital productivity without burnout",
    m4_num: "MODULE 04", m4_title: "Digital Mental Health",
    m4_desc: "Understand the impact of social media on emotional wellbeing and strategies for a healthy balance.",
    m4_s1: "Social media and emotional wellbeing",
    m4_s2: "Digital detox & mindful disconnection",
    m5_num: "MODULE 05", m5_title: "Sustainable Digital Habits",
    m5_desc: "Explore how mindful technology use can reduce our digital footprint and promote a more sustainable future.",
    m5_s1: "Digital carbon footprint",
    m5_s2: "Responsible device consumption",
    quiz_tag: "Interactive",
    quiz_h2: "How much do you know about Digital Health?",
    quiz_p: "Test your knowledge with this 5-question evidence-based quiz.",
    quiz_next: "Next →",
    quiz_restart: "Try again",
    src_title: "Backed by institutional and academic sources",
    footer_desc: "Educational platform for digital wellbeing with evidence-based institutional content.",
    footer_nav: "Navigation",
    footer_mods: "Modules",
    footer_copy: "© 2025 Digital Health. Open-access educational content.",

    /* ── Video section (index) ── */
    vid_section_title: "Recommended Videos",
    vid_section_desc:  "Selected audiovisual resources to complement each module.",
    vid_index_1_title: "Introduction to Digital Health",
    vid_index_1_desc:  "Overview of wellbeing in the digital age.",
    vid_index_2_title: "Healthy Digital Habits",
    vid_index_2_desc:  "Practical strategies for a balanced digital life.",
    vid_index_3_title: "Impact of Social Media",
    vid_index_3_desc:  "Scientific evidence on social media and wellbeing.",
    vid_add_1: "Add video #1",
    vid_add_2: "Add video #2",
    vid_add_3: "Add video #3",

    /* ── Inline videos per module ── */
    vid_m1_ph1:  "Add video #1", vid_m1_lbl1: "▶ How to create strong passwords?",
    vid_m1_ph2:  "Add video #2", vid_m1_lbl2: "▶ Privacy on social media",
    vid_m2_ph1:  "Add video #1", vid_m2_lbl1: "▶ How to identify fake news",
    vid_m2_ph2:  "Add video #2", vid_m2_lbl2: "▶ Digital ethics and responsibility",
    vid_m3_ph1:  "Add video #1", vid_m3_lbl1: "▶ Techniques to reduce screen time",
    vid_m3_ph2:  "Add video #2", vid_m3_lbl2: "▶ Digital productivity without burnout",
    vid_m4_ph1:  "Add video #1", vid_m4_lbl1: "▶ Social media and mental health",
    vid_m4_ph2:  "Add video #2", vid_m4_lbl2: "▶ How to do a digital detox",
    vid_m5_ph1:  "Add video #1", vid_m5_lbl1: "▶ The carbon footprint of the internet",
    vid_m5_ph2:  "Add video #2", vid_m5_lbl2: "▶ Responsible technology consumption",
    vid_hint: "Place the file in the videos/ folder and reload the page",
    vid_badge_1: "Video", vid_badge_2: "Video", vid_badge_3: "Video",
    quiz_guide: " We recommend reviewing the modules before starting the quiz for better results.",
    breadcrumb_home: "Home",
    breadcrumb_modules: "Modules",
    breadcrumb_quiz: "Quiz",
    breadcrumb_sources: "Sources",
    back_top: "↑",
    m1_kp1: "Create unique passwords of 15+ characters",
    m1_kp2: "Enable two-step authentication (MFA)",
    m1_kp3: "Review your privacy settings on social media",
    m2_kp1: "Verify sources before sharing news",
    m2_kp2: "Practise netiquette in your interactions",
    m2_kp3: "Develop digital critical thinking",
    m3_kp1: "Apply the Pomodoro method to stay focused",
    m3_kp2: "Set screen-free zones and schedules",
    m3_kp3: "Create digital end-of-day rituals",
    m4_kp1: "Reduce passive scrolling on social media",
    m4_kp2: "Practise weekly digital detox",
    m4_kp3: "Protect your sleep: no screens 30 min before bed",
    m5_kp1: "Reduce emissions from your digital activity",
    m5_kp2: "Repair and reuse tech devices",
    m5_kp3: "Adopt sustainable technology habits",


    /* ── Rich subsection content ── */
    m1_sub1_title: " Password Management & Authentication",
    m1_sub1_body: "Weak or reused passwords are the root cause of 86% of data breaches (Verizon DBIR 2023). NIST SP 800-63B recommends passwords of at least 15 characters, unique per service, never containing predictable personal information.",
    m1_sub1_tips_title: " Recommendations",
    m1_sub1_tips: ["Use a password manager such as Bitwarden, 1Password or KeePass.", "Enable multi-factor authentication (MFA) on all important accounts.", "Never reuse the same password across more than one service.", "Use long, random passphrases — they are more secure than short complex ones.", "Change passwords immediately if you suspect an account has been compromised."],
    m1_sub1_habits_title: " Healthy Habits",
    m1_sub1_habits: ["Check monthly whether your emails appear in breaches at haveibeenpwned.com.", "Enable login alerts on your bank accounts and social networks.", "Use a different password for your primary email than for other services.", "Set a secure backup PIN on your two-factor authentication app."],
    m1_sub1_benefits_title: " Benefits of Good Password Management",
    m1_sub1_benefits: ["Drastically reduces the risk of identity theft.", "Protects your financial and personal data.", "Allows quick recovery if an account is compromised.", "Provides digital peace of mind knowing your accounts are secured."],
    m1_sub1_src: "Source: NIST SP 800-63B · Verizon DBIR 2023 · haveibeenpwned.com",
    m1_sub2_title: " Privacy on Social Networks",
    m1_sub2_body: "Social networks collect location data, behaviour and preferences to build advertising profiles. ENISA warns that 79% of popular sites contain invisible third-party trackers. The EU's GDPR gives you the right to request deletion of your data at any time.",
    m1_sub2_tips_title: " Recommendations",
    m1_sub2_tips: ["Review and adjust privacy settings on each social network every 3 months.", "Limit the permissions of third-party apps connected to your accounts.", "Use an alternative email address for registrations on non-critical platforms.", "Disable geolocation on apps that don't need it.", "Install tracking blockers such as uBlock Origin or Privacy Badger."],
    m1_sub2_habits_title: " Healthy Habits",
    m1_sub2_habits: ["Before posting, ask: would you be comfortable if your boss or family saw this?", "Don't share sensitive info like phone number or address in public profiles.", "Revoke access from old apps you no longer use.", "Enable suspicious activity notifications on your accounts."],
    m1_sub2_benefits_title: " Benefits of Protecting Your Privacy",
    m1_sub2_benefits: ["Reduces exposure to invasive targeted advertising.", "Protects your digital reputation now and in the future.", "Minimises the risk of identity impersonation.", "Gives you greater control over your digital footprint."],
    m1_sub2_src: "Source: ENISA (enisa.europa.eu) · GDPR Regulation (EU) 2016/679 · EFF Cover Your Tracks",
    m2_sub1_title: " Identifying Fake News & Disinformation",
    m2_sub1_body: "UNESCO defines disinformation as false content created with intent to deceive. An MIT study (Science, 2018) showed false news spreads 6× faster than true news. 64% of adults admit to having shared a story without verifying it (Reuters Institute).",
    m2_sub1_tips_title: " Recommendations",
    m2_sub1_tips: ["Verify the original source before sharing any news.", "Use fact-checking platforms: Snopes.com, AFP Fact Check, FullFact.org.", "Check the publication date — old stories often recirculate as current.", "Search the same story in at least 2 independent outlets.", "Be suspicious of headlines that trigger outrage or exaggerated fear."],
    m2_sub1_habits_title: " Healthy Habits",
    m2_sub1_habits: ["Take 30 seconds before sharing: read the full article, not just the headline.", "Subscribe to newsletters from verified, quality outlets.", "Practise lateral reading: look up the source before trusting its content.", "Talk with family and friends about how to spot false information."],
    m2_sub1_benefits_title: " Benefits of Being a Critical Reader",
    m2_sub1_benefits: ["You help stop the spread of disinformation.", "You make better decisions based on real facts.", "You protect your reputation by not sharing false content.", "You strengthen critical thinking across all areas of life."],
    m2_sub1_src: "Source: UNESCO Media & Information Literacy · Vosoughi et al., Science 2018 · Reuters Institute",
    m2_sub2_title: " Ethics and Digital Netiquette",
    m2_sub2_body: "Netiquette is the set of conduct norms in digital environments. The Cyberbullying Research Center reports 37% of young people have experienced digital harassment. The UN recognises that human rights apply fully online.",
    m2_sub2_tips_title: " Recommendations",
    m2_sub2_tips: ["Write as if the other person could see you: respect tone and form.", "Never publish personal information about others without their consent.", "In a digital conflict, wait before responding — heat of the moment leads to mistakes.", "Report abusive content on platforms rather than ignoring it.", "Acknowledge and appreciate others' contributions in collaborative spaces."],
    m2_sub2_habits_title: " Healthy Habits",
    m2_sub2_habits: ["Before sending a message, read it as if for the first time.", "Step away from toxic debates — not every battle is worth fighting.", "Publicly thank and acknowledge good content you consume.", "Teach netiquette to children and young people from an early age."],
    m2_sub2_benefits_title: " Benefits of Good Netiquette",
    m2_sub2_benefits: ["You build healthier, more lasting digital relationships.", "You improve your professional and personal online reputation.", "You contribute to safer, more inclusive digital environments.", "You reduce unnecessary conflicts and misunderstandings."],
    m2_sub2_src: "Source: UNICEF (unicef.org) · Cyberbullying Research Center 2022 · UN Digital Rights",
    m3_sub1_title: " Techniques to Reduce Screen Time",
    m3_sub1_body: "The WHO states children under 5 should not exceed 1 hour of screen time per day. A University of Bath study (2023) showed that just one week off social media significantly improves sleep quality, mood and concentration.",
    m3_sub1_tips_title: " Recommendations",
    m3_sub1_tips: ["Enable Screen Time (iOS) or Digital Wellbeing (Android) to monitor your usage.", "Apply the Pomodoro method: 25 minutes focused work, 5 minutes screen-free rest.", "Establish device-free zones: bedroom, dining table.", "Use greyscale mode on your phone to reduce its visual appeal.", "Turn off non-essential notifications and check your phone at scheduled times."],
    m3_sub1_habits_title: " Healthy Habits",
    m3_sub1_habits: ["Start the day without checking your phone for the first 30 minutes.", "Leave the phone out of the bedroom at least 1 hour before sleep.", "Replace passive scrolling with reading, exercise or conversation.", "Once a week, have a day of minimal social media use."],
    m3_sub1_benefits_title: " Benefits of Reducing Screen Time",
    m3_sub1_benefits: ["Significant improvement in sleep quality.", "Greater concentration and productivity during the day.", "Reduced anxiety associated with FOMO (fear of missing out).", "More time for personal relationships and physical activities."],
    m3_sub1_src: "Source: WHO (who.int) · Univ. of Bath, Computers in Human Behavior 2023",
    m3_sub2_title: " Digital Productivity Without Burnout",
    m3_sub2_body: "Digital burnout affects 67% of remote workers (Buffer 2023). The APA confirms clear boundaries between work and digital leisure reduce stress by 30%. The key is creating rituals for starting and closing the digital working day.",
    m3_sub2_tips_title: " Recommendations",
    m3_sub2_tips: ["Set a fixed start and end time for your digital working day and stick to it.", "Use task management tools like Todoist, Notion or Trello.", "Block distracting sites with Freedom or Cold Turkey during work hours.", "Schedule email and message checks at specific times (not continuously).", "Include active breaks every 90 minutes: stand up, stretch, walk."],
    m3_sub2_habits_title: " Healthy Habits",
    m3_sub2_habits: ["Create a closing ritual: write 3 things you achieved today, then close the laptop.", "Physically separate your workspace from your rest space when possible.", "Turn off work notifications on your phone outside working hours.", "Use asynchronous communication alternatives to reduce constant email pressure."],
    m3_sub2_benefits_title: " Benefits of Healthy Productivity",
    m3_sub2_benefits: ["Higher performance and better quality of work.", "Reduction of chronic stress and prevention of burnout.", "Improved general wellbeing and personal satisfaction.", "More energy and creativity available for important projects."],
    m3_sub2_src: "Source: APA (apa.org) · Buffer State of Remote Work 2023 · Journal of Occupational Health Psychology",
    m4_sub1_title: " Social Media & Emotional Wellbeing",
    m4_sub1_body: "JAMA Pediatrics shows that more than 3 daily hours on social media is associated with greater anxiety and depression in adolescents. Active use (creating, commenting, connecting) has far less negative effects than passive use (scrolling).",
    m4_sub1_tips_title: " Recommendations",
    m4_sub1_tips: ["Follow accounts that inspire you; unfollow those that cause envy or sadness.", "Disable like counters to reduce external social validation.", "Limit passive scrolling by setting a daily maximum time per app.", "Take regular breaks from social media, especially during stressful periods.", "If a platform consistently affects you negatively, consider pausing it temporarily."],
    m4_sub1_habits_title: " Healthy Habits",
    m4_sub1_habits: ["Before opening a social app, ask yourself: what is my intention right now?", "Keep a journal of how you feel before and after using social media.", "Replace the first morning scroll with 5 minutes of breathing or meditation.", "Connect with friends in person at least once a week instead of only online."],
    m4_sub1_benefits_title: " Benefits of Conscious Use",
    m4_sub1_benefits: ["Greater emotional stability and self-esteem.", "Less time comparing yourself with others.", "More meaningful and higher-quality digital relationships.", "Improved concentration and sleep quality."],
    m4_sub1_src: "Source: JAMA Pediatrics 2019 · APA Guidelines on Social Media 2023 · Twenge & Campbell, Psychological Science",
    m4_sub2_title: " Digital Detox & Mindful Disconnection",
    m4_sub2_body: "Studies from UC San Diego and Stanford show that turning off notifications reduces cortisol and improves sustained attention. The National Sleep Foundation recommends avoiding screens for at least 30 minutes before bed to protect melatonin production.",
    m4_sub2_tips_title: " Recommendations",
    m4_sub2_tips: ["Start with a mini-detox: 2 hours without screens one day a week.", "Turn off ALL notifications except calls and urgent messages.", "Use Do Not Disturb mode automatically at night.", "Replace the nightly phone check with reading a physical book.", "Plan offline activities you enjoy: walks, cooking, drawing."],
    m4_sub2_habits_title: " Healthy Habits",
    m4_sub2_habits: ["Charge your phone outside the bedroom; use a conventional alarm clock.", "One Sunday a month, have a day free of non-essential screens.", "Practise a phone-free table at meals: put the phone in another room.", "Before bed, write 3 positive things about the day on paper, not digitally."],
    m4_sub2_benefits_title: " Benefits of Digital Detox",
    m4_sub2_benefits: ["Deep improvement in sleep quality.", "Reduced anxiety and increased general wellbeing.", "Greater presence in personal relationships.", "Recovery of spontaneous creativity and the ability to be bored."],
    m4_sub2_src: "Source: UC San Diego · National Sleep Foundation · Stanford Social Media Lab",
    m5_sub1_title: " Digital Carbon Footprint",
    m5_sub1_body: "The digital sector accounts for 2–4% of global CO₂ emissions, similar to civil aviation. Video streaming is responsible for 60% of internet traffic (The Shift Project). One email with an attachment generates ~50g of CO₂; a year of emails equals 1,000 km by car.",
    m5_sub1_tips_title: " Recommendations",
    m5_sub1_tips: ["Reduce streaming quality when you don't need high definition.", "Empty your inbox and unsubscribe from newsletters you don't read.", "Use WiFi instead of mobile data: WiFi consumes less energy.", "Choose cloud services that use renewable energy (Google, Microsoft 365).", "Compress photos and files before emailing or uploading to the cloud."],
    m5_sub1_habits_title: " Healthy Habits",
    m5_sub1_habits: ["Once a month, delete duplicate or unnecessary files in the cloud.", "Disable autoplay on video platforms.", "Use lower-impact search engines like Ecosia, which plants trees with its revenue.", "Turn devices fully off instead of leaving them on standby."],
    m5_sub1_benefits_title: " Benefits of Reducing Your Digital Footprint",
    m5_sub1_benefits: ["You actively contribute to the fight against climate change.", "You reduce storage costs and electricity consumption.", "You improve the organisation and speed of your devices.", "You inspire those around you to adopt more sustainable tech habits."],
    m5_sub1_src: "Source: The Shift Project 2019 · GeSI SMARTer 2030 · Carbon Trust Digital Report",
    m5_sub2_title: " Responsible Device Consumption",
    m5_sub2_body: "The OECD estimates 50 million tonnes of electronic waste per year — the world's fastest-growing waste stream. Only 17% is recycled properly. Manufacturing a smartphone requires 70 kg of raw materials and generates more CO₂ than all years of use combined.",
    m5_sub2_tips_title: " Recommendations",
    m5_sub2_tips: ["Before buying a new device, consider repairing it — iFixit has free guides.", "Buy second-hand from platforms like Back Market or Swappa.", "Drop your old device at recycling points or manufacturer take-back programmes.", "Avoid single-use accessories: charge by cable rather than disposable pads.", "Choose brands with good repairability scores."],
    m5_sub2_habits_title: " Healthy Habits",
    m5_sub2_habits: ["Update software regularly to extend the life of your device.", "Use protective cases to prevent unnecessary breakage.", "Check whether your company has a device recycling programme.", "Ask yourself before each tech purchase: do I really need it? Can it wait?"],
    m5_sub2_benefits_title: " Benefits of Responsible Consumption",
    m5_sub2_benefits: ["You save significant money in the long run.", "You directly and measurably reduce your environmental impact.", "You support more ethical and sustainable business models.", "You contribute to reducing mineral extraction in conflict zones."],
    m5_sub2_src: "Source: OECD e-waste report · European Environment Agency 2022 · iFixit Repairability Index",
  }
};

/* ── 2. QUIZ DATA ──────────────────────────── */
const quizData = {
  es: [
    {
      q: "¿Qué porcentaje de filtraciones de datos involucra contraseñas débiles o robadas, según Verizon DBIR 2023?",
      opts: ["42%", "65%", "86%", "91%"],
      correct: 2,
      feedback: "Correcto. El informe Verizon DBIR 2023 indica que el 86% de las filtraciones involucraron credenciales comprometidas."
    },
    {
      q: "Según el MIT (Science, 2018), ¿cuánto más rápido se propagan las noticias falsas frente a las verdaderas?",
      opts: ["2 veces más rápido", "6 veces más rápido", "10 veces más rápido", "Al mismo ritmo"],
      correct: 1,
      feedback: "Exacto. El estudio de Vosoughi et al. demostró que la desinformación viaja 6 veces más rápido en redes sociales."
    },
    {
      q: "¿Cuántas horas diarias de uso de redes sociales se asocian con mayor ansiedad en adolescentes, según JAMA Pediatrics?",
      opts: ["Más de 1 hora", "Más de 2 horas", "Más de 3 horas", "Más de 5 horas"],
      correct: 2,
      feedback: "Correcto. JAMA Pediatrics señala las 3 horas diarias como umbral de riesgo psicológico en adolescentes."
    },
    {
      q: "¿Qué porcentaje de las emisiones globales de CO₂ representa el sector TIC, según GeSI SMARTer 2030?",
      opts: ["Menos del 1%", "Entre el 2 y 4%", "Entre el 8 y 10%", "Más del 15%"],
      correct: 1,
      feedback: "Exacto. El sector TIC genera entre el 2% y 4% de las emisiones globales de CO₂."
    },
    {
      q: "¿Qué técnica recomienda la APA para reducir el estrés por uso digital en trabajadores?",
      opts: ["Usar más aplicaciones de bienestar", "Establecer límites claros entre trabajo y ocio digital", "Trabajar en silencio total", "Desactivar el WiFi por las noches"],
      correct: 1,
      feedback: "Muy bien. La APA confirma que definir fronteras claras entre trabajo y ocio digital reduce el estrés en un 30%."
    }
  ],
  en: [
    {
      q: "What percentage of data breaches involve weak or stolen passwords, according to Verizon DBIR 2023?",
      opts: ["42%", "65%", "86%", "91%"],
      correct: 2,
      feedback: "Correct. The Verizon DBIR 2023 report states that 86% of breaches involved compromised credentials."
    },
    {
      q: "According to MIT (Science, 2018), how much faster do fake news stories spread compared to true ones?",
      opts: ["2× faster", "6× faster", "10× faster", "At the same rate"],
      correct: 1,
      feedback: "Exactly. Vosoughi et al. showed that misinformation travels 6 times faster on social media."
    },
    {
      q: "How many daily hours of social media use are linked to higher anxiety in adolescents, per JAMA Pediatrics?",
      opts: ["More than 1 hour", "More than 2 hours", "More than 3 hours", "More than 5 hours"],
      correct: 2,
      feedback: "Correct. JAMA Pediatrics identifies 3 daily hours as a psychological risk threshold for adolescents."
    },
    {
      q: "What percentage of global CO₂ emissions does the ICT sector represent, per GeSI SMARTer 2030?",
      opts: ["Less than 1%", "Between 2% and 4%", "Between 8% and 10%", "More than 15%"],
      correct: 1,
      feedback: "Exactly. The ICT sector generates between 2% and 4% of global CO₂ emissions."
    },
    {
      q: "What technique does the APA recommend to reduce digital stress in workers?",
      opts: ["Use more wellness apps", "Set clear boundaries between work and leisure", "Work in complete silence", "Turn off WiFi at night"],
      correct: 1,
      feedback: "Well done. The APA confirms that setting clear boundaries between work and digital leisure reduces stress by 30%."
    }
  ]
};

/* ── 3. MODAL CONTENT ──────────────────────── */
/**
 * Genera el HTML interior de cada modal.
 * Se llama con el id del módulo y el idioma actual.
 */
const modalContent = {
  m1: (lang) => `
    <div class="modal-tag">${lang === 'es' ? 'MÓDULO 01' : 'MODULE 01'}</div>
    <h2 class="modal-title">${i18n[lang].m1_modal_title}</h2>
    <div class="subsection">
      <div class="subsection-title">
        <span class="subsection-icon"></span>
        ${i18n[lang].m1_sub1_title.replace(' ', '')}
      </div>
      <div class="viz-placeholder">
        <span>${lang === 'es' ? 'Ilustración: ciclo de vida de una contraseña segura' : 'Illustration: secure password lifecycle'}</span>
      </div>
      <p>${i18n[lang].m1_sub1_body}</p>
      <div class="source"> ${i18n[lang].m1_sub1_src}</div>
    </div>
    <div class="subsection">
      <div class="subsection-title">
        <span class="subsection-icon"></span>
        ${i18n[lang].m1_sub2_title.replace(' ', '')}
      </div>
      <div class="viz-placeholder">
        <span>${lang === 'es' ? 'Diagrama: rastreo de datos en redes sociales' : 'Diagram: social media data tracking'}</span>
      </div>
      <p>${i18n[lang].m1_sub2_body}</p>
      <div class="source"> ${i18n[lang].m1_sub2_src}</div>
    </div>`,

  m2: (lang) => `
    <div class="modal-tag">${lang === 'es' ? 'MÓDULO 02' : 'MODULE 02'}</div>
    <h2 class="modal-title">${i18n[lang].m2_modal_title}</h2>
    <div class="subsection">
      <div class="subsection-title">
        <span class="subsection-icon"></span>
        ${i18n[lang].m2_sub1_title.replace(' ', '')}
      </div>
      <div class="viz-placeholder">
        <span>${lang === 'es' ? 'Infografía: cómo verificar una noticia' : 'Infographic: how to verify a news story'}</span>
      </div>
      <p>${i18n[lang].m2_sub1_body}</p>
      <div class="source"> ${i18n[lang].m2_sub1_src}</div>
    </div>
    <div class="subsection">
      <div class="subsection-title">
        <span class="subsection-icon"></span>
        ${i18n[lang].m2_sub2_title.replace(' ', '')}
      </div>
      <div class="viz-placeholder">
        <span>${lang === 'es' ? 'Ilustración: reglas de netiqueta' : 'Illustration: netiquette rules'}</span>
      </div>
      <p>${i18n[lang].m2_sub2_body}</p>
      <div class="source"> ${i18n[lang].m2_sub2_src}</div>
    </div>`,

  m3: (lang) => `
    <div class="modal-tag">${lang === 'es' ? 'MÓDULO 03' : 'MODULE 03'}</div>
    <h2 class="modal-title">${i18n[lang].m3_modal_title}</h2>
    <div class="subsection">
      <div class="subsection-title">
        <span class="subsection-icon"></span>
        ${i18n[lang].m3_sub1_title.replace(' ', '')}
      </div>
      <div class="viz-placeholder">⏳
        <span>${lang === 'es' ? 'Diagrama: método Pomodoro digital' : 'Diagram: digital Pomodoro method'}</span>
      </div>
      <p>${i18n[lang].m3_sub1_body}</p>
      <div class="source"> ${i18n[lang].m3_sub1_src}</div>
    </div>
    <div class="subsection">
      <div class="subsection-title">
        <span class="subsection-icon"></span>
        ${i18n[lang].m3_sub2_title.replace(' ', '')}
      </div>
      <div class="viz-placeholder">
        <span>${lang === 'es' ? 'Gráfico: impacto del descanso digital en productividad' : 'Chart: impact of digital rest on productivity'}</span>
      </div>
      <p>${i18n[lang].m3_sub2_body}</p>
      <div class="source"> ${i18n[lang].m3_sub2_src}</div>
    </div>`,

  m4: (lang) => `
    <div class="modal-tag">${lang === 'es' ? 'MÓDULO 04' : 'MODULE 04'}</div>
    <h2 class="modal-title">${i18n[lang].m4_modal_title}</h2>
    <div class="subsection">
      <div class="subsection-title">
        <span class="subsection-icon"></span>
        ${i18n[lang].m4_sub1_title.replace(' ', '')}
      </div>
      <div class="viz-placeholder">
        <span>${lang === 'es' ? 'Gráfico: uso de redes vs. niveles de ansiedad' : 'Chart: social media use vs. anxiety levels'}</span>
      </div>
      <p>${i18n[lang].m4_sub1_body}</p>
      <div class="source"> ${i18n[lang].m4_sub1_src}</div>
    </div>
    <div class="subsection">
      <div class="subsection-title">
        <span class="subsection-icon"></span>
        ${i18n[lang].m4_sub2_title.replace(' ', '')}
      </div>
      <div class="viz-placeholder">
        <span>${lang === 'es' ? 'Ilustración: rutina de desconexión consciente' : 'Illustration: mindful disconnection routine'}</span>
      </div>
      <p>${i18n[lang].m4_sub2_body}</p>
      <div class="source"> ${i18n[lang].m4_sub2_src}</div>
    </div>`,

  m5: (lang) => `
    <div class="modal-tag">${lang === 'es' ? 'MÓDULO 05' : 'MODULE 05'}</div>
    <h2 class="modal-title">${i18n[lang].m5_modal_title}</h2>
    <div class="subsection">
      <div class="subsection-title">
        <span class="subsection-icon"></span>
        ${i18n[lang].m5_sub1_title.replace(' ', '')}
      </div>
      <div class="viz-placeholder">
        <span>${lang === 'es' ? 'Infografía: emisiones del sector TIC' : 'Infographic: ICT sector emissions'}</span>
      </div>
      <p>${i18n[lang].m5_sub1_body}</p>
      <div class="source"> ${i18n[lang].m5_sub1_src}</div>
    </div>
    <div class="subsection">
      <div class="subsection-title">
        <span class="subsection-icon"></span>
        ${i18n[lang].m5_sub2_title.replace(' ', '')}
      </div>
      <div class="viz-placeholder">
        <span>${lang === 'es' ? 'Diagrama: economía circular de dispositivos' : 'Diagram: circular economy for devices'}</span>
      </div>
      <p>${i18n[lang].m5_sub2_body}</p>
      <div class="source"> ${i18n[lang].m5_sub2_src}</div>
    </div>`,
};

/* ── 4. ESTADO GLOBAL ──────────────────────── */
let currentLang = 'es';
let qIndex    = 0;
let score     = 0;
let answered  = false;

/* ── 5. setLang() ──────────────────────────── */
/**
 * Cambia todos los textos con data-i18n al idioma elegido.
 * También reinicia el quiz en el nuevo idioma.
 */
function setLang(lang) {
  currentLang = lang;

  // Botones del toggle
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.textContent === lang.toUpperCase());
  });

  // Todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });

  // Quiz: solo si existe en esta página
  const qc = document.getElementById('quizCard');
  const qr = document.getElementById('quizResult');
  if (qc && qr) {
    qIndex = 0; score = 0; answered = false;
    qc.style.display = '';
    qr.classList.remove('show');
    renderQuestion();
  }
}

/* ── 6. MODAL ──────────────────────────────── */
function openModal(id) {
  document.getElementById('modalContent').innerHTML = modalContent[id](currentLang);
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOnBg(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

/* ── 7. QUIZ ───────────────────────────────── */
function renderQuestion() {
  const el = document.getElementById('quizQuestion');
  if (!el) return; // quiz no existe en esta página
  const data = quizData[currentLang];
  if (qIndex >= data.length) { showResult(); return; }

  const q = data[qIndex];

  document.getElementById('quizQuestion').textContent = q.q;
  document.getElementById('quizCounter').textContent =
    currentLang === 'es'
      ? `PREGUNTA ${qIndex + 1} / ${data.length}`
      : `QUESTION ${qIndex + 1} / ${data.length}`;
  document.getElementById('quizFill').style.width =
    ((qIndex + 1) / data.length * 100) + '%';

  // Renderizar opciones
  const opts = document.getElementById('quizOptions');
  opts.innerHTML = '';
  q.opts.forEach((o, i) => {
    const btn = document.createElement('button');
    btn.className  = 'quiz-option';
    btn.textContent = o;
    btn.onclick    = () => selectAnswer(i);
    opts.appendChild(btn);
  });

  // Limpiar feedback y botón siguiente
  document.getElementById('quizFeedback').className = 'quiz-feedback';
  document.getElementById('quizFeedback').textContent = '';
  document.getElementById('quizNext').className = 'quiz-next';
  answered = false;
}

function selectAnswer(idx) {
  if (answered) return;
  answered = true;

  const data = quizData[currentLang];
  const q    = data[qIndex];
  const btns = document.querySelectorAll('.quiz-option');

  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === q.correct)                     b.classList.add('correct');
    else if (i === idx && idx !== q.correct) b.classList.add('incorrect');
  });

  const fb = document.getElementById('quizFeedback');
  fb.textContent = q.feedback;
  fb.className   = 'quiz-feedback show ' + (idx === q.correct ? 'ok' : 'fail');

  if (idx === q.correct) score++;
  document.getElementById('quizNext').className = 'quiz-next show';
}

function nextQuestion() {
  qIndex++;
  renderQuestion();
}

function showResult() {
  document.getElementById('quizCard').style.display = 'none';
  const res   = document.getElementById('quizResult');
  const total = quizData[currentLang].length;
  res.classList.add('show');

  document.getElementById('resultScore').textContent = score + '/' + total;

  const pct = score / total;
  let emoji = '', msg = '';

  if (pct === 1) {
    emoji = '';
    msg   = currentLang === 'es'
      ? '¡Perfecto! Eres un experto en salud digital.'
      : "Perfect! You're a digital health expert.";
  } else if (pct >= 0.6) {
    emoji = '';
    msg   = currentLang === 'es'
      ? '¡Muy bien! Tienes buenos conocimientos digitales.'
      : 'Great job! You have solid digital knowledge.';
  } else {
    emoji = '';
    msg   = currentLang === 'es'
      ? 'Sigue aprendiendo, explora los módulos para mejorar.'
      : 'Keep learning, explore the modules to improve.';
  }

  document.getElementById('resultEmoji').textContent = emoji;
  document.getElementById('resultMsg').textContent   = msg;
}

function restartQuiz() {
  qIndex   = 0;
  score    = 0;
  answered = false;
  document.getElementById('quizCard').style.display = '';
  document.getElementById('quizResult').classList.remove('show');
  renderQuestion();
}

/* ── 8. SCROLL REVEAL ──────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── 9. HAMBURGER ──────────────────────────── */
document.getElementById('hamburger').onclick = () => {
  document.getElementById('navLinks').classList.toggle('open');
};

/* Cerrar modal con tecla ESC */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ── 10. INIT ──────────────────────────────── */
renderQuestion();
