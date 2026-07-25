# Mi Camino a Santiago

PWA local para planificar Zamora, naturaleza y las cinco etapas desde Sarria.

## Inicio

```powershell
npm install
npm run dev -- --host 0.0.0.0
```

Abre la URL que muestra Vite. Para usar el móvil, conecta ambos dispositivos a la misma red Wi‑Fi y abre `http://IP-DEL-ORDENADOR:5173`.

## Producción

```powershell
npm run build
npm run preview -- --host 0.0.0.0
```

La aplicación guarda checklist, presupuesto, etapas, favoritos, visitados, modo viaje, diario y tema en el almacenamiento local. Los datos de ruta están en `src/data/trip.json`, `src/data/itinerary.json`, `src/data/santiago.json` y las guías con fuentes en `src/data/places.json`. El botón “Descargar pack” cachea datos y fotografías. Los mosaicos de OpenStreetMap se conservan después de abrirlos; no se descargan áreas cartográficas completas para evitar un uso excesivo de datos. Los horarios, reservas, sellos, meteorología y condiciones de senderos deben confirmarse antes del viaje.
