const products =  [
    {
        id:'redshoe',
        description:'Red Shoe',
        price:2000.10
    },
    {
        id:'bluejean',
        description:'Blue Jeans',
        price: 1200.00
    },
];

function getAllProducts(){
    return products;
}

function getProductsByPrice(min , max){
    return products.filter((product) => {
        return product.price >= min && product.price <= max;
    });
}

function getProductById(id){
    return products.find((product) => {
        return product.id === id;
    });
}

function addNewProduct(id,description,price) {
    const newProduct = {
        id,
        price,
        description,
        reviews: []
    };

    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id, rating, comment) {
    const matchedProduct = getProductById(id);
    if (matchedProduct) {
        const newProductReview = {
            rating,
            comment,
        };
        matchedProduct.reviews.push(newProductReview);
        return newProductReview;
    }
}


module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById, 
    addNewProduct,
    addNewProductReview,
};