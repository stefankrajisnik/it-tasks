const addBtns = document.querySelectorAll('.add')
const basket = document.querySelector('.basket')

addBtns.forEach((btn) => {
    btn.addEventListener('click',(e) => {

        const addButton = e.target;
        const addButtonData = addButton.dataset;

        const { productName, productPrice } = addButtonData;


        console.log({productName});
        console.log({productPrice});
return;
        let product = btn.closest('.product')
        let name = product.querySelector('.name').innerText
        let price = product.querySelector('#price').innerText
        let quantity = product.querySelector('.quantity').value
        let resPrice = price * quantity
        
        let basketItem = document.createElement('div')
        basketItem.classList.add('basket-item')
        basketItem.innerHTML = ` ${name}: <br>
                                ${quantity}Kg x $${price} = $${resPrice}
                                <button class="remove-btn">Remove</button>
                                `

        basket.appendChild(basketItem)


        let removeBtn = document.querySelector('.remove-btn')
        removeBtn.addEventListener('click', ()=> {
        basketItem.remove()
        })
    })
    
})