# UsaTuSubsidio — Modern Real Estate Subsidy Portal

Next.js (App Router + TS + Tailwind) para un portal de proyectos con subsidio en Chile. Incluye Home, listado de propiedades, detalle de propiedad, inmobiliarias, y sección de artículos (Aprende) con datos mock.

## Scripts
- `npm run dev` — entorno local
- `npm run build` — build de producción
- `npm run start` — serve del build

## Estructura principal
- `src/app/page.tsx` — Home (hero carousel, buscador flotante, destacadas, inmobiliarias, regiones, artículos)
- `src/app/properties` — listado con filtros, sort y paginación
- `src/app/properties/[id]` — detalle con galería, tabs de contacto, tabla de info y enlaces a inmobiliaria
- `src/app/developers` — listado de inmobiliarias
- `src/app/developers/[id]` — perfil de inmobiliaria + proyectos
- `src/app/learn` — artículos
- `src/app/learn/[id]` — detalle de artículo
- `src/data/*.ts` — mock data (propiedades, inmobiliarias, artículos, regiones)
- `src/components` — UI reutilizable (Navbar, Footer, Hero, SearchBar, filtros, cards, etc.)

## Branding
- Logo: `https://pruebasutsdev.com/wp-content/uploads/2026/01/uts.png`
- Colores: azul (`#00377c`), azul secundario (`#436eaf`), rojo (`#c5474a`), neutros claros.
- Tipografía: Montserrat (`display: swap`).

## Datos mock
Estructura de propiedad (`src/types`):
- id, title, region, commune, locationLabel, propertyType, bedroomsMax, bathroomsMax, minIncome, priceUF?, subsidies[], area, deliveryStatus, developerId, developerName, images[], description, videoUrl?, virtualTourUrl?, highlighted.

## Filtros y UX
- Buscador: región → comuna dependiente, tipo, dormitorios, baños, subsidios multi, renta mínima. Redirige a `/properties` con query params.
- Listado: filtros en sidebar (collapsible vía responsive), sort (destacados, renta asc/desc), paginación simple, cards reutilizadas.
- Detalle: galería, tabs Cotiza/Asesoría, tabla de info con campos exactos solicitados, badges de subsidio, developer card, secciones de video/tour sin autoplay.

## Estilos
- Tailwind configurado (`tailwind.config.js`, `postcss.config.js`).
- Tokens en `globals.css` (colores y radios) + clases utilitarias.

## Cómo probar
```bash
npm install
npm run dev
```

Abrir http://localhost:3000.

## Deploy
- Setear `NEXT_PUBLIC_SITE_URL` si quieres canonical/base.
- `npm run build` y deploy en Vercel/servicio Node.

## Notas
- Sin dependencias externas de datos; todo mock listo para reemplazar por API real.
- Video y tour solo on-click; sin autoplay.
