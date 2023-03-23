function fetchAllProducts() {
    console.log("inside function");
    const gridContainer = document.querySelector('.grid-container');
    const url = 'https://fakestoreapi.com/products';

    gridContainer.innerHTML = '';

    fetch(url)
        .then(res => res.json())
        .then(products => {
            console.log(products); 
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');

                const productImage = document.createElement('img');
                productImage.src = product.image;
                productDiv.appendChild(productImage);

                const productName = document.createElement('h2');
                productName.textContent = product.title;
                productDiv.appendChild(productName);

                const productPrice = document.createElement('p');
                productPrice.textContent = `$${product.price}`;
                productDiv.appendChild(productPrice);
                gridContainer.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error(`Error fetching products: ${error}`);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    const productsButton = document.querySelector('#products-button');
    productsButton.addEventListener('click', fetchAllProducts);
});