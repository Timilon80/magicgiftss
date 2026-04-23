# Historico De Cambios

## Marca y branding
- Nombre principal configurado como `MAGIC GIFTSS`.
- Hero principal simplificado para mostrar solo `MAGIC GIFTSS`.
- Wordmark animado horizontal en intro y hero.
- Efecto visual del wordmark ajustado a paleta lila.
- En modo `Festivo`, el wordmark tiene brillo y desplazamiento cromatico sutil.
- Soporte para subir logo PNG transparente desde el panel administrador.
- El logo reemplaza el monograma `MG` en cabecera cuando existe.

## Intro y visual principal
- Intro inicial de pantalla completa con desaparicion automatica.
- Boton `Saltar intro` agregado.
- Intro con fondo ambiental animado.
- Intro oscurecida a fondo negro para mayor contraste.
- Modo `soft` en intro: elegante y lila.
- Modo `festive` en intro: mas vivo y colorido.
- Hero del wordmark dentro de la pagina oscurecido para resaltar letras.
- Fondo general con animacion de alejamiento y regreso continuo.

## Layout y responsividad
- App ampliada para escritorio con mejor ancho maximo.
- Ajustes para mantener buena visualizacion en movil.
- Catalogo responsivo con 2, 3 y 4 columnas segun ancho.

## Catalogo y categorias
- Categorias activas: `DESAYUNOS`.
- Categorias activas: `ARREGLOS FLORALES`.
- Categorias activas: `DETALLES`.
- Categorias activas: `DECORACIONES`.
- Categorias activas: `FRESAS`.
- Eliminada la categoria `Todos`.
- Mapeo de categorias antiguas a las nuevas.
- Producto demo agregado para `FRESAS`.
- Cada categoria tiene identidad visual propia.

## Navegacion entre menus y categorias
- Se agrego un `menu stage` inspirado en galeria con perspectiva.
- Categorias mostradas como paneles `prev`, `active`, `next`.
- Navegacion por botones anterior y siguiente.
- Navegacion por click sobre paneles.
- Swipe horizontal en movil para cambiar categoria.
- Mas profundidad visual en paneles de menu.
- Efecto de lluvia decorativa al pasar el cursor por los menus del catalogo.

## Banners y eventos
- Banner `NUESTROS EVENTOS` dentro de cada categoria.
- Carga de fotografias del banner por categoria desde administrador.
- Hasta 6 fotos por categoria.
- Carrusel automatico de fotos en cada categoria.
- Dots de navegacion manual en el banner.

## Imagenes y formatos
- Formato actual de imagen establecido en `20:16` para productos.
- Formato actual de imagen establecido en `20:16` para banners de eventos.
- Formato actual de imagen establecido en `20:16` para previews del admin.
- Formato actual de imagen establecido en `20:16` para miniaturas del admin.
- Formato actual de imagen establecido en `20:16` para preview del logo.
- Placeholders demo regenerados para `20:16`.
- Imagenes con mas profundidad visual y menos apariencia plana.

## Carrito, envio y checkout
- Selector de localidad de entrega agregado al checkout.
- Localidades de Bogota incluidas.
- `Sabana` incluida como zona de entrega.
- Costo de domicilio parametrizable por localidad desde admin.
- Total del carrito suma productos mas domicilio.
- Calendario y hora con restriccion de minimo 24 horas.
- Bloqueo de fechas y horas no disponibles.
- Mensajes de error claros para campos faltantes y fecha no disponible.

## WhatsApp y pedidos
- Pedido se envia al numero configurado del negocio.
- Se abre copia del pedido para el cliente por WhatsApp.
- Mensaje del cliente mejorado con tono amable.
- El mensaje incluye subtotal.
- El mensaje incluye domicilio.
- El mensaje incluye total.
- El mensaje incluye localidad.
- El mensaje incluye fecha y hora.

## Administrador
- Acceso al administrador en un solo clic desde la marca superior.
- Ajustes de tienda ampliados con WhatsApp del negocio.
- Ajustes de tienda ampliados con mensaje corto.
- Ajustes de tienda ampliados con logo PNG.
- Ajustes de tienda ampliados con costos de domicilio.
- Ajustes de tienda ampliados con modo de sonido.
- Panel para cargar productos por categoria fija.
- Panel para cargar fotos del banner `NUESTROS EVENTOS`.

## Sonido y efectos
- Sonidos implementados con Web Audio API.
- Modos de sonido disponibles: `off`.
- Modos de sonido disponibles: `soft`.
- Modos de sonido disponibles: `festive`.
- Sonido al agregar al carrito.
- Sonido al enviar pedido correctamente.
- Confeti y serpentinas al agregar al carrito.
- Confeti doble al enviar pedido.
- Confeti en modo `soft`: lila.
- Confeti en modo `festive`: multicolor.
- Particulas decorativas de flores y globos siguiendo el puntero.

## Pie de pagina y redes
- Nombres del pie de pagina ajustados para coincidir con sus fotografias locales.
- Botones del pie de pagina simplificados para mostrarse solo como menu de texto.
- Seccion `Nosotros` asociada a `NOSOTROS.jpg`.
- Seccion `Contactos` asociada a `CONTACTOS.jpg`.
- Seccion `Preguntas frecuentes` asociada a `PREGUNTAS FRECUENTES.jpg`.
- Seccion `Nuestra politica` asociada a `NUESTRA POLITICA.jpg`.
- Seccion `Galeria` asociada a `GALERIA.jpg`.
- Las imagenes del pie de pagina ahora se muestran dentro de cada seccion como fondo del contenido.
- Fondo del contenido del pie de pagina reforzado con capa oscura para mejorar lectura del texto.
- Icono llamativo de Instagram agregado con enlace directo al perfil `https://www.instagram.com/detalles_para_cada_momento`.
- Icono llamativo de Facebook agregado como acceso visual pendiente de enlace definitivo.

## PWA y cache
- `theme-color` actualizado a lila.
- Manifest ajustado a `MAGIC GIFTSS`.
- Se fue incrementando la version del `service worker` para refrescar cache en cada cambio relevante.

## Uso futuro
- Este archivo sirve como referencia de estado actual antes de nuevos cambios.

## Actualizacion 2026-04-22 (estado vigente)
- Este bloque reemplaza notas anteriores que hablaban de placeholders demo, banner `NUESTROS EVENTOS` dentro del catalogo, carrusel de banner o wordmark lila cuando esas notas ya no coincidan con el estado actual.

### Catalogo base real
- Catalogo base regenerado con imagenes reales locales desde `DESAYUNOS`, `ARREGLOS FLORALES`, `DETALLES`, `DECORACIONES` y `FRESAS`.
- Eliminadas las imagenes demo SVG del catalogo inicial.
- Agregada deteccion del catalogo demo antiguo guardado en navegador para reemplazarlo por el catalogo base actual.
- El catalogo base queda cargado con nombre, categoria e imagen; precio y descripcion se dejan vacios.

### Productos, carrito y admin
- Precio y descripcion ahora son opcionales en el formulario de productos del administrador.
- Cuando un producto no tiene precio publicado, su valor y descripcion no se muestran en la tarjeta.
- Los productos sin precio no se pueden agregar al carrito ni participar en subtotal, domicilio o total.
- El listado del administrador muestra precio y descripcion solo cuando existen.
- El boton de restauracion ahora recupera el `catalogo base` y no la `version demo`.

### Fotos por categoria y limpieza del banner
- Se elimino el banner `NUESTROS EVENTOS` de todos los catalogos.
- Se elimino el codigo muerto asociado al banner dentro del catalogo: carrusel, dots, timers, indices y estilos especificos.
- El panel de administrador que antes hablaba de `banner` fue renombrado a `Fotos por categoria`.
- Las fotos por categoria siguen disponibles para gestion administrativa y para la vista previa visual del menu de categorias.
- La vista previa del menu de categorias usa la primera foto disponible de cada categoria.

### Menu de categorias y cards
- El `menu-stage` fue compactado para quedar menos alto y dejar menos espacio antes de la grilla de productos.
- El `menu-stage-slide` y el `menu-stage-fill` quedaron mas bajos.
- El slide activo del menu quedo mas angosto para reducir vacios visuales.
- Se redujo el espacio entre el nombre visual de la categoria y la primera fila del catalogo.
- Las tarjetas de producto quedaron mas planas: menos padding, menos alto de imagen, menos sombra y hover mas corto.

### Intro actualizado
- El intro mantiene fondo ambiental, pero ahora incluye arreglos florales cayendo por la izquierda y globos cayendo por la derecha.
- Se agrego un slideshow rapido detras del intro con 7 imagenes reales de decoraciones de salones, fiestas, globos y arreglos florales.
- Las imagenes del intro aparecen y desaparecen rapidamente antes de entrar a la pagina principal.
- El cambio de imagen del intro fue acelerado para dar mas dinamismo.
- La duracion total del intro se ajusto a `3 segundos`.

### Wordmark y branding visual
- El texto `MAGIC GIFTSS` del intro y del hero fue corregido para evitar que se tape con bloques violetas.
- Se elimino el renderizado por letra que generaba cuadros de color en algunos entornos.
- El wordmark principal se actualizo a un dorado suave.

### Pie de pagina
- El oscurecimiento de fondo dentro de las secciones del pie de pagina se hizo mas transparente.
- La placa oscura detras del texto del pie de pagina se suavizo para dejar ver mejor las imagenes.
- La insignia/titulo interna de cada seccion tambien se aclaro para mejorar visibilidad del fondo.

### Cache y actualizacion de app
- La version del `service worker` se actualizo a `claudi-flores-pwa-v24` para refrescar cache y recursos del intro/catalogo.
