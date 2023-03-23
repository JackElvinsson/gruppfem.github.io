// Add an event listener to the "Products" link
const productsLink = document.querySelector('#products-button');
productsLink.addEventListener('click', () => {
    fetchAllProducts('products');
});