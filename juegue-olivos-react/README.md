# Juegue en el Olivos React

Versión React de la landing para visitantes del Olivos Golf Club con un flujo inicial para socios.

## Ejecutar

```bash
npm install
npm run dev
```

## Login de demo

- Email: `socio@olivos.test`
- Clave: `olivos`

Este login es solo una simulación frontend con `localStorage`. Sirve para validar la experiencia y el diseño del área privada, pero no protege datos reales.

## Dónde editar contenido

El contenido principal está en `src/data/siteData.js`:

- Teléfono y horarios: `booking`
- Navegación superior: `navigation`
- Información institucional: `clubInfo`
- Reserva de horario y canchas: `reservation`
- Tarifas: `rates.rows`
- Condiciones: `policies`
- Imágenes: `gallery`
- Demo de socios: `memberArea`

## Pantallas

La app usa rutas por hash para que funcione bien en hosting estático:

- `#/`: Home
- `#/info-club`: información del club
- `#/reservaciones`: reserva por día, horario y cancha
- `#/tarifas`: tarifas y condiciones
- `#/socios`: login y área privada
- `#/contacto`: datos de secretaría

Las páginas viven en `src/pages`. `App.jsx` decide qué pantalla renderizar según la ruta actual.

## Próximo paso recomendado

Conectar `MemberAccess` a un backend real:

- Supabase Auth si quieren resolver rápido usuarios, sesiones y roles.
- Auth0/Clerk si prefieren gestión de identidad tercerizada.
- WordPress REST API si el sitio definitivo seguirá en WordPress.
