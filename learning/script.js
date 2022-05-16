class NameField {
    constructor(name) {
        const field = document.createElement('div');
        field.innerText = name;
        const nameListHook = document.querySelector('#names')
        nameListHook.appendChild(field)
    }
}

//**  CLASS EXPRESSIONS **

// let NameGenerator = class {
//     constructor() {
//         const btn = document.querySelector('button');
//         btn.addEventListener('click', this.addName())
// }

// ** CLASS DECLARATIONS

class NameGenerator {

    constructor() {
        const btn = document.querySelector('button');
        
        btn.addEventListener('click', this.addName)
    }

    addName() {

        const names = ['Max', 'Anna', 'Hunter'];
        const name = new NameField(`${names[Math.floor(Math.random()*names.length)]}`)
        
    }
}

const gen = new NameGenerator();


///////////////////////////////////////////

this.table = 'window table'
this.chair = 'window chair'

const clean = () =>{
    console.log(`cleaning ${this.table}`);
};

clean()

////////////////////////////////////////////////////////////

var sayName = function() {
    console.log('I am' + this.name)
}

var me = {
    name: ' Stefan',
    age: 25
}


sayName.call(me)

  


const buttons = document.querySelectorAll('.portfolio-categories button')
const portfolioItems = document.querySelectorAll('.portfolio-single-item')
let category;

getCategory = () => {
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log({event})
            let category = button.getAttribute('data-category')
            filterCategories(category);
    })
})}

getCategory()
console.log(category)


const filterCategories = category => {
    console.log(category);
    portfolioItems.forEach(item => {
        itemCategory = item.getAttribute('data-category')
        if(itemCategory === category || category === 'sve'){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
        
    })
}
