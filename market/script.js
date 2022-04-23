let products = [
    {
        "name": "Kinoa",
        "price": 20.00,
        "imageUrl": "https://picsum.photos/300/300"
    },
    {
        "name": "Luk",
        "price": 20.00,
        "imageUrl": "https://picsum.photos/300/300"
    },
    {
        "name": "Luk",
        "price": 20.00,
        "imageUrl": "https://picsum.photos/300/300"
    },
    {
        "name": "Luk",
        "price": 20.00,
        "imageUrl": "https://picsum.photos/300/300"
    },
    {
        "name": "Luk",
        "price": 20.00,
        "imageUrl": "https://picsum.photos/300/300"
    },
    {
        "name": "Luk",
        "price": 20.00,
        "imageUrl": "https://picsum.photos/300/300"
    },
    {
        "name": "Luk",
        "price": 20.00,
        "imageUrl": "https://picsum.photos/300/300"
    },
    {
        "name": "Luk",
        "price": 20.00,
        "imageUrl": "https://picsum.photos/300/300"
    },
    {
        "name": "Luk",
        "price": 20.00,
        "imageUrl": "https://picsum.photos/300/300"
    },
    {
        "name": "Luk",
        "price": 20.00,
        "imageUrl": "https://picsum.photos/300/300"
    },
    {
        "name": "Luk",
        "price": 20.00,
        "imageUrl": "https://picsum.photos/300/300"
    },
    {
        "name": "Luk",
        "price": 20.00,
        "imageUrl": "https://picsum.photos/300/300"
    }
]


let veggies = document.querySelector('veggies')

products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('.product')
    productElement.innerHTML = `
    <div class="product">

        <div class="product-img" style = "background-image: url(${product.imageUrl})"></div>

        <div class="name-price">
            <h3 class="name">${product.name}</h3>
            <h4 class="price">Price: $<span id="price">${product.price}</span></h4>
        </div>

        <div class="quantity-add">
            <input class="quantity" id="tomato-qnt" type="number" value="0" min="0">
            <button data-product-name="Tomato" data-product-price="20" class="add" id="tomato-add">Add</button>
        </div>
    </div>
                            `
    document.querySelector(".veggies").appendChild(productElement)
    
})


const potatoInput = document.querySelector('#potato-qnt')
const tomatoInput = document.querySelector('#tomato-qnt')
const carrotInput = document.querySelector('#carrot-qnt')

const potatoAdd = document.querySelector('#potato-add')
const tomatoAdd = document.querySelector('#tomato-add')
const carrotAdd = document.querySelector('#carrot-add')


const total = document.querySelector('.total-price')



function countPrice() {
    let potatoPrice = 10;
    let potatoKg = potatoInput.value
    let resPotato = potatoPrice * potatoKg

    let tomatoPrice = 20;
    let tomatoKg = tomatoInput.value
    let resTomato = tomatoPrice * tomatoKg

    let carrotPrice = 6;
    let carrotKg = carrotInput.value
    let resCarrot = carrotPrice * carrotKg

    let text = ''
    
    total.innerText = 
    resCarrot + resPotato + resTomato + "$"
}

function addPotatoInBasket() {
    let potatoPrice = 10;
    let potatoKg = potatoInput.value
    
    let resPotato = potatoPrice * potatoKg

    let potatoChart = document.createElement('div');
    potatoChart.classList.add('potato-basket')
    potatoChart.innerHTML = `Potato: <br>
                            $${potatoPrice} x ${potatoKg} = $${resPotato}
                            <button class="remove-potato">Remove</button>
                            `

    document.querySelector(".chart").appendChild(potatoChart)

    potatoAdd.disabled = true;

    let removeBtn = document.querySelector('.remove-potato')
    removeBtn.addEventListener('click',  () => {
    
        potatoChart.remove()
        potatoAdd.disabled = false;
        
    })
}


function addTomatoInBasket() {
    let tomatoPrice = 20;
    let tomatoKg = tomatoInput.value
    
    let resTomato = tomatoPrice * tomatoKg

    let tomatoChart = document.createElement('div');
    tomatoChart.classList.add('tomato-basket')
    tomatoChart.innerHTML = `Tomato: <br>
                            $${tomatoPrice} x ${tomatoKg} = $${resTomato}
                            <button class="remove-tomato">Remove</button>
                            `

    document.querySelector(".chart").appendChild(tomatoChart)

    tomatoAdd.disabled = true;

    let removeBtn = document.querySelector('.remove-tomato')
    removeBtn.addEventListener('click',  () => {
        tomatoChart.remove()
        tomatoAdd.disabled = false;

    })
}

function addCarrotInBasket() {
    let carrotPrice = 6;
    let carrotKg = carrotInput.value
    
    let resCarrot = carrotPrice * carrotKg

    let carrotChart = document.createElement('div');
    carrotChart.classList.add('carrot-basket')
    carrotChart.innerHTML = `Carrot: <br>
                            $${carrotPrice} x ${carrotKg} = $${resCarrot}
                            <button class="remove-carrot">Remove</button>
                            `

    document.querySelector(".chart").appendChild(carrotChart)

    carrotAdd.disabled = true;

    let removeBtn = document.querySelector('.remove-carrot')
    removeBtn.addEventListener('click',  () => {
        carrotChart.remove()
        carrotAdd.disabled = false;

    })
    
}




potatoAdd.addEventListener('click', () => {
    
    addPotatoInBasket()
    countPrice()

})

tomatoAdd.addEventListener('click', () => {
    
    addTomatoInBasket()
    countPrice()

})

carrotAdd.addEventListener('click', () => {
    
    addCarrotInBasket()
    countPrice()

})
