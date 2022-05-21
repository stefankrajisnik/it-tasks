let inputs = document.querySelectorAll('input')
console.log(inputs)
let errors = {
    "ime_prezime":[],
    "korisnicko_ime":[],
    "email":[],
    "lozinka":[],
    "ponovi_lozinku":[]
}


inputs.forEach(element => {
    
    element.addEventListener('change', (e) => {
        
        let currentInput = e.target;
        let inputValue = currentInput.value;
        let inputName = currentInput.getAttribute('name')
        // let currentParentDiv = currentInput.parentElement
        
        
        if(inputValue.length > 4) {
            errors[inputName] = [];

            switch(inputName){
                case 'ime_prezime':
                    let validation = inputValue.trim();
                    validation = validation.split(" ");
                    if(validation.length < 2) {
                        errors[inputName].push('You have to type both, name and surname')
                    }
                break;

                case 'email':
                    if(!validateEmail(inputValue)){
                        errors[inputName].push('Email is not fine!')
                    }

                break;
                 case 'ponovi_lozinku': 
                    let lozinka = document.querySelector('input[name="lozinka"]').value
                    if(inputValue !== lozinka) {
                        errors[inputName].push('Passwords does not match!')
                    }
                 

            }
        } else { 
            errors[inputName] = ['Field has to contain 4 sign at least']
        }

        // let eror = document.createElement("h4")
        // eror.innerText = `${errors[inputName]}`
        // currentParentDiv.appendChild(eror)

        populateErrors()
    })

    
})


let populateErrors = () => {

    for(let elem of document.querySelectorAll('ul')) {
        elem.remove()
    }

    for(key of Object.keys(errors)){
        let input = document.querySelector(`input[name="${key}"]`)
        let parentElement = input.parentElement
        let errorsElement = document.createElement('ul');
        parentElement.appendChild(errorsElement)


        errors[key].forEach(error => {
            console.log(error)
            // errorElement.innerHTML = `<li>${error}</li>`
            let li = document.createElement('li');
            li.innerText = error;

            errorsElement.appendChild(li)
        })

        
    }

    
}


const validateEmail = email => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
        
    }
    else {
            false 
        } 
}
