let inputs = document.querySelectorAll('input');
let otsideEl = document.querySelector('.outsideEl')
let h3Elements = document.querySelectorAll('h3')

let errors = {
    "ime_prezime":[],
    "korisnicko_ime":[],
    "email":[],
    "lozinka":[],
    "ponovi_lozinku":[]
};

inputs.forEach(input => {
    input.addEventListener('change', (e) => {
        let currentInput = e.target
        let inputValue = input.value;
        let inputName = currentInput.name
        

        if(inputValue.length > 5) {
            // if(otsideEl.contains(h3)){
            //     console.log('contain')
            // }
                console.log('sadrzi vise od 5')

                switch(inputName) {

                    case 'ime_prezime':
                        let splitedValue = inputValue.split(' ')
                        if(splitedValue.length < 2){
                            errors[inputName] = []
                            errors.ime_prezime.push('Type both')                 
                        } else {
                            errors[inputName] = []
                        }

                        populateErrors(currentInput)
                         break;

                    case 'korisnicko_ime':
                        errors[inputName] = []
                        populateErrors(currentInput)
                         break;

                    case 'email':
                        let email = inputValue;
                        if(!validateEmail(email)){
                            errors[inputName] = [];
                            errors.email.push('Email is not valid')
                        } else {
                            errors[inputName] = []
                            }
                        
                            populateErrors(currentInput)

                        break;

                    case 'lozinka': 
                            errors[inputName] = []
                            populateErrors(currentInput)
                        break;


                    case 'ponovi_lozinku':
                        let lozinkaValue = document.getElementsByName("lozinka")[0].value
                        if(inputValue !== lozinkaValue){
                            errors[inputName] = [];
                            errors.ponovi_lozinku.push('Passwords does not match')   
                            }else {
                                errors[inputName] = [];
                            }

                            populateErrors(currentInput)
                        break;
                                
                }
        }else {
            errors[inputName] = []
            errors[inputName].push('Has to contain 5 signs')
            populateErrors(currentInput)
        }

    })
})


const populateErrors = (currentInput) => {

    // if(typeof(h3Elements) != 'undefined' && h3Elements != null){
    //     h3Elements.forEach(element => {
    //         element.remove()
    //     })
        
    // }else {
    //     return
    // }
    
    let errorElement = document.createElement('h3')
    errorElement.innerText = errors[currentInput.name]
    let parentElement = currentInput.parentElement
    
    parentElement.appendChild(errorElement)
    errorElement.previousSibling.remove()
}


const validateEmail = (email) => {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}
