let products = [];

// Función que agrega productos:
const addProduct = (title, description, price, thumbnail, code, stock) => {
    const newProduct = {
        id: products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    };

    //Tenemos dos capas de control: 1) Que no se repita ningún campo. 2) Que no se repita ningún código.


    // if (title === undefined || description === undefined || price === undefined || thumbnail === undefined || code === undefined || stock === undefined) {
    //     console.log("Todos los campos son obligatorios.");
    //     return;
    // }

    if (Object.values(newProduct).includes(undefined)) {
        console.log("Todos los campos son obligatorios.");
        return;
    }

    const productExists = products.find(product => product.code === code);
    if (productExists) {
        console.log('El producto con el código ' + code + ' ya existe');
        return;
    }
    products.push(newProduct);
}

// Función que nos muestra los productos:
const getProducts = () => {
    console.log(products);
    return products;
}

// Función que nos muestra los productos por ID:
const getProductById = (id) => {
    const foundProduct = products.find(product => product.id === id);
    if (!foundProduct) {
        console.log('No se encontró el producto con el id: ' + id );
        return;
    }
    console.log(foundProduct);
    return foundProduct;
};

// Test
addProduct("Rosa Mosqueta", 
    "La Rosa Mosqueta es conocida por sus pétalos rosados y su resistencia a las condiciones climáticas variadas.",
    14.99,
    "URL de la imagen",
    "RM001",
    "50 unidades");
    addProduct("Rosa Amarilla", 
    "La Rosa Amarilla es valorada por su durabilidad y resistencia, lo que la convierte en una opción ideal para decorar.",
    19.99,
    "URL de la imagen",
    "RA002",
    "20 unidades");
    //Producto con igual código:
    addProduct("Rosa Roja", 
    "La Rosa Amarilla es valorada por su durabilidad y resistencia, lo que la convierte en una opción ideal para decorar.",
    70.99,
    "URL de la imagen",
    "RA002",
    "10 unidades");
    //Producto sin stock:
    addProduct("Rosa Lila", 
    "La Rosa Amarilla es valorada por su durabilidad y resistencia, lo que la convierte en una opción ideal para decorar.",
    70.99,
    "URL de la imagen",
    "RA004"
    );



// getProducts();

getProductById(1);
