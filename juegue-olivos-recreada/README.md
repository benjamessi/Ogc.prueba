# Juegue en el Olivos, recreación editable

Esta carpeta contiene una propuesta estática y editable de la página pública `Juegue en el Olivos`.

## Qué se analizó desde afuera

- La página pública está construida sobre WordPress 3.3.1, jQuery 1.7.1 y plugins antiguos como NextGEN Gallery y cforms.
- El contenido visible conserva fecha de 2012, precios probablemente obsoletos, widgets laterales viejos y textos con inconsistencias de acentuación/espaciado.
- La jerarquía editorial es débil: la reserva, requisitos, tarifas, reciprocidad y políticas importantes aparecen mezcladas.
- Hay estilos inline, HTML heredado y dependencias externas antiguas, lo que dificulta mantenimiento, accesibilidad y rendimiento.

## Archivos

- `index.html`: estructura semántica de la landing.
- `styles.css`: diseño responsive, tipografía, colores y componentes.
- `app.js`: contenido editable: teléfono, horarios, tarifas, políticas e imágenes.

## Cómo editar rápido

1. Cambiar teléfono/horarios en `pageData.booking`.
2. Cambiar tarifas en `pageData.rates.rows`.
3. Cambiar textos operativos en `pageData.visitors` y `pageData.policies`.
4. Reemplazar imágenes en `pageData.gallery` por URLs nuevas o assets locales.

## Nota importante

Las tarifas viejas se dejaron como referencia donde había información pública clara, pero están marcadas para actualización antes de publicar.
