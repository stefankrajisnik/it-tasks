const newAgeEl = document.querySelector('.section1 h1')
let newAgeText = newAgeEl.textContent
let newAgeTextSplited = newAgeText.split('')

newAgeEl.innerHTML= ''

newAgeTextSplited.forEach( splited => {
    if(splited == " "){
        splited = "&nbsp"
    }
    newAgeEl.innerHTML += `<span>${splited}</span>`
    
})

let spans = document.querySelectorAll('span')
let i = 0;

let interval = setInterval(()=> {
    
    let singleSpan = spans[i];

    singleSpan.classList.add('slideIn')

    i++


    if(i === spans.length )
    clearInterval(interval)
},100)

const secondTextEl = document.querySelector('.section2 h1')

const showSecondText = () => {
    
    let textElYPosition = secondTextEl.getBoundingClientRect().y
    console.log(textElYPosition)
    if(textElYPosition < 540){
        secondTextEl.classList.add('show')
    }
}


const line = document.querySelector('.border-line')
let widthProcent = 0;
window.onscroll = () => {
    showSecondText()
    
    if(this.oldScroll < this.scrollY){
        widthProcent++
    } else {
        widthProcent--
    }

    if(widthProcent >= 100){
        widthProcent = 100;
    }
    if(widthProcent<=0){
        widthProcent = 0;
    }
    
    line.style.width = widthProcent + '%'

    // console.log("width Procent:",widthProcent)
    // console.log("old scroll:",oldScroll)
    // console.log("current scroll:",scrollY)
    oldScroll = scrollY
}
