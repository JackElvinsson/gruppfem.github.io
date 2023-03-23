function order(itemId){
    console.log(itemId);
    const orderContainer = document.querySelector('.main-container');
    const url = 'https://mocki.io/v1/a99e6cf4-1e5a-4b0e-bc57-6c651f0f09cd';


    fetch(url)
        .then(res => res.json())
        .then(products => {
            console.log(products);
            products.forEach(product => {
                console.log(product.id + " " + itemId)
                if(product.id == itemId){
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product');
    
                    const productImage = document.createElement('img');
                    productImage.src = product.image;
                    productDiv.appendChild(productImage);
    
                    const productName = document.createElement('h2');
                    productName.textContent = product.title;
                    productDiv.appendChild(productName);
    
                    const productDescription = document.createElement('p');
                    productDescription.textContent = `${product.description}`;
                    productDiv.appendChild(productDescription);
                    orderContainer.appendChild(productDiv);
                }
            })
        })
        .catch(error => {
            console.error(`Error fetching products: ${error}`);
        });
}