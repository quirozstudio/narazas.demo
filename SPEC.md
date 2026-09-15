# NARAZAS — especificación de la demo

## Objetivo

Crear una tienda digital editorial para Nathalie Narazas que se sienta como una extensión de su marca personal y su contenido. La demo debe vender la visión, la experiencia móvil y la futura estructura de productos sin implementar ecommerce real.

## Público

Creadores de contenido y personas que quieren editar mejor, crear más rápido y encontrar un estilo visual propio.

## Arquitectura

- Demo estática sin dependencias externas ni backend, preparada para publicarse tanto en raíz como en un subdirectorio de GitHub Pages.
- `index.html`: home y ficha de producto controlada por query string para facilitar la demo.
- `productos/lut-pack/index.html`: entrada de ruta que abre la ficha de LUT Pack.
- `styles.css`: tokens visuales, layout responsive, componentes y animaciones.
- `app.js`: contenido centralizado, navegación, comparador antes/después y estados demo.
- `public/images/`: assets visuales editables. `narazas-hero.jpg` contiene actualmente la fotografía real de Nathalie y se reutiliza en hero, masterclass y presentación; el resto son placeholders SVG sustituibles.

## Identidad visual

- Base: crema cálido `#F3E8D0` y negro cálido `#171512`.
- Protagonistas: rojo Narazas `#B72A2E` y naranja `#E87524`.
- Tipografía: Cormorant Garamond para titulares editoriales y Manrope para interfaz/cuerpo.
- Lenguaje: creator studio, editorial, retro digital, cálido, natural y profesional. La ambientación toma como referencia el hogar de Nathalie: formas arqueadas tipo arte mural, madera y una alfombra geométrica roja-crema, usadas como una familia de motivos distribuida por toda la experiencia, con variaciones de escala y opacidad para no parecer un patrón repetido.

## Componentes

Header compacto, hero con fotografía, banda marquee, barra de compatibilidad provisional, introducción, listado editorial de productos, comparador LUT, bloque “cómo funciona”, bloque independiente de masterclass, bloque sobre Nathalie, CTA final, footer y ficha de producto.

## Productos demo

1. Narazas LUT Pack — Color — precio demo editable.
2. Creator Templates — Creación — precio demo editable.
3. Creator Resource Pack — Recursos — precio demo editable.

Los datos viven en `PRODUCTS` dentro de `app.js`.

## Masterclass

“Edita conmigo.” es una sección diferenciada en rojo Narazas. Presenta una masterclass de CapCut de 6 horas / 2 días. No inventa fecha, precio, plazas ni temario definitivo; el CTA abre un estado “próximamente”.

## Responsive

La home parte de móvil: una sola columna, CTAs cómodos, nav accesible, imágenes protagonistas y comparador táctil. Desde 760 px se habilitan composiciones asimétricas controladas y más espacio editorial.

## Animaciones

Reveals de opacidad y desplazamiento, hover mínimo, marquee lento y transición del comparador. Todo se desactiva o simplifica con `prefers-reduced-motion`.

## Navegación

Header con Recursos, Masterclass y Sobre mí. Los productos enlazan a la ficha de LUT Pack o muestran estado demo. La compra y la reserva no son operaciones reales.

## Criterios de aceptación

- La primera pantalla comunica marca personal y no “tienda genérica”.
- Existen exactamente tres productos demo en la home.
- LUT Pack tiene ficha editorial completa y comparador antes/después funcional con ratón y táctil.
- La masterclass tiene ritmo visual propio y muestra “Próximamente”.
- No hay pagos, autenticación, backend, descargas ni reservas reales.
- No existe overflow horizontal en móvil.
- Se puede sustituir fotografía y catálogo sin buscar datos dispersos.
- Los CTA y navegación tienen estados visibles y funcionan en teclado.
