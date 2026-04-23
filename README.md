[README.md](https://github.com/user-attachments/files/27015170/README.md)
# MAGIC GIFTSS

Aplicacion web tipo catalogo/PWA para mostrar productos de regalos y detalles, gestionar un carrito de compra y enviar pedidos directamente por WhatsApp.

## Descripcion

Esta app fue construida como una tienda web estatica para `MAGIC GIFTSS`. Permite mostrar productos por categorias, agregar productos al carrito, calcular domicilio por localidad y generar el pedido final por WhatsApp.

## Funcionalidades principales

- Catalogo visual por categorias: `DESAYUNOS`, `ARREGLOS FLORALES`, `DETALLES`, `DECORACIONES` y `FRESAS`.
- Carrito de compras con subtotal, domicilio y total.
- Seleccion de localidad de entrega en Bogota y Sabana.
- Validacion de pedidos con minimo 24 horas de anticipacion.
- Envio del pedido y copia al cliente por WhatsApp.
- Panel de gestion local para editar productos, fotos por categoria, textos y ajustes de la tienda.
- Soporte PWA con `manifest.webmanifest` y `service worker`.
- Diseno adaptable para movil y escritorio.

## Tecnologias

- HTML
- CSS
- JavaScript vanilla
- Web App Manifest
- Service Worker
- LocalStorage / SessionStorage

## Estructura principal

- `index.html`: estructura de la interfaz.
- `styles.css`: estilos visuales y responsive.
- `app.js`: logica del catalogo, carrito, gestion local y WhatsApp.
- `sw.js`: cache y soporte offline basico.
- `manifest.webmanifest`: configuracion PWA.
- Carpetas como `DESAYUNOS`, `ARREGLOS FLORALES`, `DETALLES`, `DECORACIONES`, `FRESAS` y `EVENTOS`: recursos visuales de la app.

## Como usar localmente

1. Descarga o clona este proyecto.
2. Abre `index.html` en el navegador.
3. Tambien puedes usar un servidor local si prefieres probar la PWA en mejores condiciones.

## Gestion local

La app incluye una gestion local para editar contenido desde el navegador.

- Los cambios se guardan solo en el navegador actual.
- Esos cambios no modifican automaticamente los archivos del proyecto.
- Si vas a publicar en GitHub Pages, debes subir los archivos actualizados del proyecto para que los cambios queden visibles en linea.

## Publicacion

Este proyecto puede publicarse facilmente en GitHub Pages al ser una app estatica.

## Contacto del negocio

- WhatsApp: `+57 313 267 0192`
- Instagram: `@detalles_para_cada_momento`

## Nota

El archivo `CLAVE.txt` no debe subirse al repositorio. Ya esta incluido en `.gitignore`.
