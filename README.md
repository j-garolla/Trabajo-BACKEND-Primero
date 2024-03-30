# Gestor de Productos

Este es un simple gestor de productos implementado en JavaScript. Permite agregar nuevos productos, mostrar todos los productos y buscar productos por su ID.

## Array de Productos

Declara un array vacío llamado `products` donde se almacenarán los productos.

## Función addProduct

La función addProduct agrega un nuevo producto al gestor de productos. Verifica que todos los campos requeridos estén presentes y que no haya duplicados de códigos de producto.

## Función getProducts

La función getProducts muestra todos los productos almacenados en el gestor.

## Función getProductById

La función getProductById busca un producto por su ID y lo muestra. Si no se encuentra ningún producto con ese ID, muestra un mensaje de error.

## Pruebas (Test)

Se agregan algunos productos de ejemplo utilizando la función addProduct, y luego se busca y muestra un producto específico por su ID utilizando la función getProductById(1).
