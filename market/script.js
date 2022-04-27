const getProductsFromLocalStorage = () => {
    const value = window.localStorage.getItem("PRODUCTS")
    
    let products = JSON.parse(value)
    
    if(!products) {
        products = []
    }

    return products;
}

const getBasketProductsFromLocalStorage = () => {
    const value = window.localStorage.getItem("BASKET")
    
    let products = JSON.parse(value)
    
    if(!products) {
        products = []
    }

    return products;
}

const newProductBtn = document.querySelector('.new-product-btn')


newProductBtn.addEventListener('click', ()=>{
    const products = getProductsFromLocalStorage();

    let newProductName = document.querySelector('.form-name').value
    let newImageUrl = document.querySelector('.form-image').value
    let newPrice = document.querySelector('.form-price').value

    const newProduct = {};
    newProduct.name = newProductName
    newProduct.price = newPrice
    newProduct.imageUrl = newImageUrl

    products.push(newProduct);

    window.localStorage.setItem("PRODUCTS", JSON.stringify(products))

    renderProducts();
})

const renderProducts = () => {
    const products = getProductsFromLocalStorage();
    document.querySelector(".veggies").innerHTML = `<h2>Veggies</h2>`;
    products.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product')
        productElement.innerHTML = `
            <div class="product-img" style = "background-image: url(${product.imageUrl})"></div>
    
            <div class="name-price">
                <h3 class="name">${product.name}</h3>
                <h4 class="price">Price: $<span id="price">${product.price}</span></h4>
            </div>
    
            <div class="quantity-add">
                <input class="quantity" type="number" value="0" min="0">
                <button class="product-add" data-product-index="${index}">Add</button>
            </div>`;
    
        productElement.querySelector('button').addEventListener('click', (e) => {
            const { productIndex } = e.target.dataset;
    
            // const productIndex = e.target.dataset.productIndex;
    
            const product = products[productIndex];
            const quantity = e.target.closest('.quantity-add').querySelector('input.quantity').value;
            product.quantity = +quantity;
    
            console.log({product})
            console.log(product.quantity)
            add(product);
            renderBasket();
        });
    
        document.querySelector(".veggies").appendChild(productElement);
    });
}






const add = (item) => {
    let products = getBasketProductsFromLocalStorage();

    if (item.quantity < 1) {
        return;
    }

    const itemExists = products.find(product => {
        return product.name === item.name;
    });

    if (itemExists) {
        products = products.filter(product => {
            return product.name !== item.name;
        });
    }

    products.push(item)

    window.localStorage.setItem("BASKET", JSON.stringify(products))

    console.log(products);

}

const remove = (item) => {
    let products = getBasketProductsFromLocalStorage();

    products = products.filter(product => {
        return product.name !== item.name;
    });

    window.localStorage.setItem("BASKET", JSON.stringify(products))

    console.log(products);
}

const calculateTotalPrice = () => {
    let products = getBasketProductsFromLocalStorage();
    let total = 0;

    products.forEach(product => {
        total = total + (product.price * product.quantity);
    });

    document.querySelector('.total-price').textContent = `Total: ${total} $`;
}

const renderBasket =() => {
    const products = getBasketProductsFromLocalStorage();

    document.querySelector('.chart').innerHTML = '';

    products.forEach(product => {
        const item = document.createElement('div');

        item.innerHTML = `
            ${product.name}: $${product.price} x ${product.quantity} = $<span class = "totalProductPrice">${product.price * product.quantity}</span> 
            <button>X</button>
        `;

        item.querySelector('button').addEventListener('click', (e) => {
            remove(product);
            renderBasket();
            
        })

        document.querySelector('.chart').appendChild(item);
    });

    calculateTotalPrice();
}

renderProducts();
renderBasket()
