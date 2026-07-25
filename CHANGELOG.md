# Changelog

## 3.0.0 — Fase 3: asistente de viaje

- Incorporada la sección **Mi Planificador** con salida, llegada máxima, presupuesto, tipo de viaje y ritmo; calcula una propuesta de paradas y margen temporal estimado.
- Añadido modo viaje ampliado en Inicio: siguiente parada, estado de servicios de ruta y solicitud de permisos para avisos del navegador.
- Añadido pack offline con indicador de avance para datos estáticos y fotografías; las teselas se guardan a medida que se consultan.
- Añadida guía a pie de Santiago, información de sellado y rutas de navegación externas.
- Añadidos datos estructurados de Santiago y sellado, además de `ROADMAP.md`.
- Compilación de producción verificada con `npm run build`.

## 2.1.0 — Fase 2: experiencia durante el viaje

- Añadido itinerario en línea temporal con hora, duración, distancia, medio, coste, foto y navegación por parada.
- Añadidos favoritos y “ya visitado”, persistidos localmente, además de modo viaje con la siguiente parada pendiente.
- Añadido botón de preparación offline: guarda en caché las fotografías del día seleccionado; los mosaicos cartográficos se conservan tras abrirlos.
- Añadidos filtros de mapa por categorías disponibles y puntos de la línea temporal.
- Añadida guía gastronómica basada en fichas con fuente y enlace externo verificable; no se muestran horarios ni valoraciones que no estén confirmados.
- Añadidos datos locales en `src/data/itinerary.json` y `src/data/gastronomy.json` para actualización sin tocar componentes.
- Compilación de producción verificada con `npm run build`.

## 2.0.0 — 25 de julio de 2026

- Rediseño mobile-first con navegación inferior, superficies translúcidas, tarjetas y soporte de temas claro/oscuro.
- Añadidos panel de estadísticas y diario persistente para notas, estado físico, kilómetros y duración.
- Añadidas guías enriquecidas de Zamora y naturaleza con datos editables, enlaces de fuente oficial, fotos de Wikimedia Commons, carga diferida y lightbox accesible.
- Mejorado el mapa con localización GPS opcional, ruta visual de las etapas, navegación externa y marcadores personalizados.
- Reforzado el Service Worker: versión de caché, activación inmediata y estrategia offline-first tras la primera visita.
- Actualizado el manifiesto para instalación PWA y documentación de funcionamiento.
- Corregido el hook de instalación para no registrar escuchadores repetidos.

## Fuentes de datos

- Turismo de Castilla y León: Pozo de los Humos y patrimonio de Zamora.
- Turismo de Galicia: etapas del Camino Francés desde Sarria.
- Oficina de Acogida al Peregrino: credencial y Compostela.
- Wikimedia Commons: fotografías, con enlace de atribución en cada ficha.
