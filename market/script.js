{/* <div class="product">
    <div class="product-img carrot-img"></div>

    <div class="name-price">
        <h3 class="name">Carrot</h3>
        <h4 class="price">Price: $<span id="price">6</span></h4>
    </div>

    <div class="quantity-add">
        <input class="quantity" id="carrot-qnt" type="number" value="0" min="0">
        <button class="add" id="carrot-add">Add</button>
    </div>
</div> */}

const products = [
    {
        "name": "Kinoa",
        "price": 1.00,
        "imageUrl": "https://picsum.photos/300/300"
    },
    {
        "name": "Luk",
        "price": 2.00,
        "imageUrl": "https://picsum.photos/300/300"
    },
    {
        "name": "Krompir",
        "price": 2.50,
        "imageUrl": "https://picsum.photos/300/300"
    },
    {
        "name": "Paradajz",
        "price": 3.75,
        "imageUrl": "https://picsum.photos/300/300"
    },
    {
        "name": "Krastavac",
        "price": 5,
        "imageUrl": "https://picsum.photos/300/300"
    },
];


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



const getProductsFromLocalStorage = () => {
    const value = window.localStorage.getItem("BASKET")
    
    let products = JSON.parse(value)
    
    if(!products) {
        products = []
    }

    return products;
}


const add = (item) => {
    let products = getProductsFromLocalStorage();

    if (item.quantity < 1) {
        return;
    }

    const itemExists = products.filter(product => {
        return product.name === item.name;
    })[0];

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
    let products = getProductsFromLocalStorage();

    products = products.filter(product => {
        return product.name !== item.name;
    });

    window.localStorage.setItem("BASKET", JSON.stringify(products))

    console.log(products);
}

const calculateTotalPrice = () => {
    let products = getProductsFromLocalStorage();
    let total = 0;

    products.forEach(product => {
        total = total + (product.price * product.quantity);
    });

    document.querySelector('.total-price').textContent = `Total: ${total} $`;
}

const renderBasket =() => {
    const products = getProductsFromLocalStorage();

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

renderBasket()
