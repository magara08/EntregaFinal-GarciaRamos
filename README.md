# City Pop Store - Proyecto Final de React JS

Este es el proyecto final del curso de React JS de Coderhouse, desarrollado por **Marcelo García Ramos**. El proyecto es una tienda virtual para vender vinilos de música japonesa pop de los años 70s, 80s y 90s.

## Tecnologías Utilizadas

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida para proyectos de frontend.
- **TailwindCSS**: Framework de CSS para un diseño rápido y eficiente.
- **Firebase Firestore**: Base de datos NoSQL para almacenar y sincronizar datos.
- **React Router**: Librería para manejar el enrutamiento en React.

## Estructura del Proyecto

```bash
📦src
 ┣ 📂components
 ┃ ┣ 📜Cart.jsx
 ┃ ┣ 📜CartWidget.jsx
 ┃ ┣ 📜CheckoutForm.jsx
 ┃ ┣ 📜Item.jsx
 ┃ ┣ 📜ItemCount.jsx
 ┃ ┣ 📜ItemDetail.jsx
 ┃ ┣ 📜ItemDetailContainer.jsx
 ┃ ┣ 📜ItemList.jsx
 ┃ ┣ 📜ItemListContainer.jsx
 ┃ ┣ 📜Loader.jsx
 ┃ ┣ 📜NavBar.jsx
 ┃ ┗ 📜NotFound.jsx
 ┣ 📂context
 ┃ ┗ 📜CartContext.jsx
 ┣ 📂db
 ┃ ┗ 📜products.js
 ┣ 📂utils
 ┃ ┗ 📜index.js
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```

## Configuración e Inicialización del Proyecto

Para configurar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Instalar las dependencias**:

    ```bash
    npm install
    ```

2. **Configurar las variables de entorno**:

    - Renombra el archivo `.env.tpl` a `.env`:

        ```bash
        mv .env.tpl .env
        ```

    - Asegúrate de completar las variables de entorno necesarias en el archivo `.env`.

3. **Ejecutar el proyecto**:

    ```bash
    npm run dev
    ```

## Funcionalidades

- **Navbar**: Barra de navegación para acceder a diferentes categorías y al carrito de compras.
- **CartWidget**: Icono de carrito de compras que muestra la cantidad de ítems agregados.
- **ItemListContainer**: Muestra la lista de productos disponibles, filtrados por categoría.
- **ItemDetailContainer**: Muestra los detalles de un producto seleccionado.
- **ItemDetail**: Detalle de cada producto, incluyendo la opción de agregar al carrito.
- **Checkout**: Formulario para finalizar la compra y generar una orden.
- **Página de Error 404**: Página que se muestra cuando la ruta no existe, con un enlace para volver a la página principal.

## Autor

- **Marcelo García Ramos**

- Este proyecto fue desarrollado como parte del curso de React JS de Coderhouse.
