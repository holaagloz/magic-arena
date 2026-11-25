# MagicArena · Propuesta v2 (Studio Gloz)

Propuesta de rediseño de magicarena.cr. No está publicada: es un prototipo para presentar al cliente.

## Qué hay en esta carpeta

| Archivo | Para qué |
|---|---|
| `index.html` | La página propuesta (prototipo navegable) |
| `presentacion.html` | Presentación del antes y el después firmada por Studio Gloz |
| `direccion-de-arte.html` | Hoja de muestra de la dirección de arte (no se publica) |
| `css/estilos.css` | Estilos y tokens de diseño |
| `js/main.js` | Menú, horario en vivo, barra fija y animaciones |
| `vendor/` | GSAP 3.13.0 (con ScrollTrigger y SplitText) y Lenis 1.3.11, guardados en el proyecto |
| `fonts/` | Gluten y Nunito (MagicArena) · `fonts-gloz/`: Yeseva One y Montserrat (Studio Gloz) |
| `img/` | Logo, fotos reales, productos, imagen para compartir y logo de Studio Gloz |
| `capturas/` | Capturas del antes y el después que usa la presentación |

Para verla: abrí `presentacion.html` o `index.html` en Chrome. Todo funciona sin internet, salvo los enlaces externos.

## Dirección de arte aprobada: "Arcoíris para pasar por debajo"

Los arcos del logo se vuelven la arquitectura de la página: enmarcan las fotos (ventanas en arco), abren las secciones (bordes curvos) y dibujan el camino hacia el botón principal. El logo queda intacto. Se sumaron dos acentos vivos nuevos, coral y girasol, como decidió el cliente el 24 de noviembre de 2026.

### Colores (tokens en `:root` de `css/estilos.css`)

| Token | HEX | Papel | Contraste comprobado |
|---|---|---|---|
| `--teal` | #1E5A68 | Portada, comunidad, cierre | Blanco sobre teal: 7,73 |
| `--coral` (`--cta`) | #FF7B63 | Botón de reservar y la banda exterior | Tinta sobre coral: 5,33; coral contra teal: 3,04 |
| `--coral-hover` | #FF957F | Hover del botón (se aclara para no perder contraste) | Tinta: 6,35 |
| `--sun` | #FFC23C | Palabra destacada, fiestas, sello | Girasol sobre teal: 4,80; tinta sobre girasol: 8,40 |
| `--sky` | #9ED4E4 | Bandas, café, fichas | Tinta: 8,37 |
| `--sand` | #F4DCBC | Banda interior, nosotros | Tinta: 10,19 |
| `--ink` | #16323A | Texto y letra de los botones | Sobre `--bg`: 12,82 |
| `--muted` | #4B5F65 | Texto secundario | Sobre `--bg`: 6,37 |
| `--bg` | #F3FAFC | Fondo general | |
| `--on-teal-soft` | #C2E4EE | Texto secundario sobre teal | 5,75 |

Los colores originales del logo (#5F97A7, #C2DBE3, #D9A063, #C1824A y #8AB1C1) solo aparecen en el logo.

### Tipografía

- **Gluten 500–800** para los títulos (variable, guardada en `fonts/gluten-latin.woff2`). Probada con ñ, tildes, ¿ y ¡.
- **Nunito 400–800** para el texto (`fonts/nunito-latin.woff2`).
- Títulos con `clamp()`: portada `clamp(2.45rem, 4.4vw, 4.4rem)` y secciones `clamp(2.3rem, 5.2vw, 4.1rem)`.

### Forma

Radios `--r-xl` 40px, `--r-lg` 28px, `--r-md` 18px y píldora 999px: redondos como el trazo del logo. Las ventanas de foto usan `border-radius: 999px 999px …`, que es la forma del arcoíris.

### Elementos propios (todos salen del logo)

1. **Arcoíris de bandas:** cuatro bandas (coral, girasol, cielo y arena) con trazo grueso y puntas redondas.
2. **Hojitas:** la hoja del logo como `<path id="hojaD">`; brotan con rebote y luego flotan.
3. **Dos anillos:** los circulitos del logo (`#anillos`), usados como viñetas.
4. **Ventana en arco:** el recorte de todas las fotos.
5. **Sello giratorio:** el nombre en círculo con el símbolo real del logo al centro.

### Movimiento (objeto `M` en `js/main.js` y su pareja en CSS)

```
M = { ease: 'power3.out', easeIO: 'power3.inOut', pop: 'back.out(2.2)', dur: 1.0, stagger: 0.085, dist: 56, lerp: 0.1 }
--ease: cubic-bezier(.25,1,.5,1)   --ease-io: cubic-bezier(.76,0,.24,1)   --ease-pop: cubic-bezier(.34,1.68,.68,1)
--dur: 1s   --dist: 56px   --t-hover: .45s
```

**Firma (portada, unos 2,5 s y sin preloader):**
1. Las bandas se dibujan de pie a pie, con 0,13 s entre una y otra.
2. El título sube por líneas desde una ranura.
3. La foto se asoma desde abajo, recortada en arco.
4. Aparecen la cocinita (con rebote), las hojas y el sello.
5. La banda coral corre hasta el botón y el botón da un latido.

La firma rima en dos lugares: el menú del celular, donde el arcoíris se dibuja al abrir, y el cierre "¿Venís a jugar?", donde vuelve a dibujarse.

**Coreografía por sección:**
- **Intensidad alta:** portada, fiestas (el pastel se arma piso por piso) y cierre.
- **Intensidad media:** vistazo, experiencias (las tarjetas suben con un giro leve), nosotros, tienda y comunidad.
- **En calma:** entradas, café y preguntas.

**Reglas de seguridad del movimiento:**
- Sin JavaScript o con "Reducir movimiento" todo se ve completo y quieto.
- El título tiene un rescate por tiempo a los 10 s y el resto de la portada a los 4 s.
- Lenis no se crea con "Reducir movimiento".

## Qué editar fácil

- **Textos:** directo en `index.html`. Cada sección está entre comentarios `INICIO` y `FIN`.
- **Horario:** en el HTML (pestaña del vistazo y tabla) y en `js/main.js`, en el objeto `H` (0 = domingo; el lunes está como "por confirmar").
- **Mensajes de WhatsApp:** en cada `href="https://wa.me/50686761520?text=…"`. Cada botón dice desde dónde se escribe: portada, menú, fiestas, tienda, comunidad, cierre o barra del celular.
- **Colores:** en `:root` de `css/estilos.css`.
- **Tras editar el CSS o el JS:** cambiá el `?v=` en `index.html`.

## De dónde salió cada dato

| Dato | Fuente | Fecha |
|---|---|---|
| Contenido, productos, precios de tienda, colegios VIP, contacto | magicarena.cr | 24-nov-2026 |
| Horario de martes a domingo | magicarena.cr y su flyer (el lunes queda por confirmar) | 24-nov-2026 |
| Logo y colores | Archivos del sitio actual (PNG de 2000 px) | 24-nov-2026 |
| Fotos del arenero y Helado Café | Recortadas del flyer del sitio actual | 24-nov-2026 |
| Precios de entrada, edades, reglas y paquetes de fiesta | **Datos de ejemplo**, por pedido del cliente | 24-nov-2026 |

## Por validar (decisiones que tomé)

- El teal más profundo (#1E5A68) y los dos acentos nuevos, coral y girasol.
- La letra Gluten para los títulos.
- El botón coral con letra oscura, porque con letra blanca no alcanza el contraste.
- Los textos nuevos: el título "Un lugar para jugar sin prisa", las introducciones de cada sección y las preguntas frecuentes.
- **Datos de ejemplo:**
  - Pase de 2 horas ₡6.000, pase del día ₡9.000 y −15% para hermanos.
  - Edades de 0 a 8 años y las reglas de "Antes de venir".
  - Paquetes de fiesta: Play-date ₡45.000, Fiesta Arena ₡85.000 y Fiesta Arcoíris ₡130.000.
  - La frase de parqueo del centro comercial.
- El lunes aparece como "por confirmar" porque el flyer y la web se contradicen. Mientras no se confirme, quedó fuera de los datos para Google.
- La tienda muestra 4 productos destacados; el enlace "Ver los 23 productos" abre WhatsApp mientras no exista la página del catálogo.
- En celular, el menú lleva el logo con su nombre; el botón de reservar vive en la portada y en una barra fija que aparece al bajar.
- Fiestas, exploración libre y aprendizaje creativo usan dibujos hechos con piezas del logo, porque no hay fotos reales.

## Pendientes antes de publicar

1. Confirmar o reemplazar todos los datos de ejemplo de la lista anterior.
2. Confirmar el horario de los lunes.
3. **Fotos:** hacer una sesión de fotos real (el arenero, la cocinita, familias y una fiesta). La foto actual del arenero sale del flyer y tiene poca resolución. Si se prefiere fotografía de stock mientras tanto, Pixabay no se pudo descargar de forma automática (bloquea a los bots). Hay que bajarlas a mano y guardarlas en `img/`:
   - `fiesta.webp`: un cumpleaños infantil en interior, horizontal, unos 1100 px.
   - `familia.webp`: padres jugando en el piso con un peque, vertical, unos 900 px.
4. Pedir el logo en vector (SVG, AI o PDF). Con eso el nombre se puede armar letra por letra en la animación.
5. Hacer el menú del café en texto, con esta misma marca (hoy es una imagen en otra identidad).
6. Elegir el dominio y el hosting para publicar. Cada cambio de CSS o JS lleva un `?v=` nuevo.

## Revisión hecha

- **Herramienta:** script `revisar-sitio.mjs` de Ruva Web Pro, con Chrome 158.
- **Pantallas:** celular de 375 x 812, escritorio de 1440 x 900, celular con "Reducir movimiento" y celular sin JavaScript.
- **Resultado:**
  - Sin desborde horizontal.
  - Sin contenido oculto, sin imágenes rotas y sin errores en la consola.
  - Librerías y fuentes cargadas.
  - El botón principal se ve completo en la primera pantalla del celular.
- **Menú del celular:** abre, se cierra tocando la X y también con la tecla Escape.
- **Largo de la página:** 13.683 px en celular (antes 37.346 px) y 9.417 px en escritorio (antes 19.176 px).
- **Detector de diseño de impeccable:** sin hallazgos pendientes. Las excepciones registradas, con su motivo, están en `.impeccable/config.json`.
