// const potatoPrice = document.querySelector('#potato-price')
const tomatoPrice = document.querySelector('#tomato-price')
const carrotPrice = document.querySelector('#carrot-price')

const potatoInput = document.querySelector('#potato-qnt')
const tomatoInput = document.querySelector('#tomato-qnt')
const carrotInput = document.querySelector('#carrot-qnt')

const potatoAdd = document.querySelector('#potato-add')
const tomatoAdd = document.querySelector('#tomato-add')
const carrotAdd = document.querySelector('#carrot-add')

const total = document.querySelector('.total-price')

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
