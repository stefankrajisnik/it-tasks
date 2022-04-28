rotateCrashCymbalToLeft = () => {
    let crashImg = document.querySelector('.crash-cymbal')
    crashImg.classList.add("active-left")
    crashImg.addEventListener('animationend',()=> {
        crashImg.classList.remove("active-left")
    })
}
rotateCrashCymbalToRight = () => {
    let crashImg = document.querySelector('.crash-cymbal')
    crashImg.classList.add("active-right")
    crashImg.addEventListener('animationend',()=> {
        crashImg.classList.remove("active-right")
    })
}

hiHatTopToDown = (e) => {
    let hihatTop = document.querySelector('.hihat-top-cymbal');
    hihatTop.classList.add("active")
    let key = 
    hihatTop.addEventListener('animationend', ()=> {
        hihatTop.classList.remove("active")
    })
}

window.addEventListener("keydown", (e) => {
    let code = e.code;
    // console.log(code)
    let audio = document.querySelector(`audio[data-key="${code}"]`)
    let keyEl = document.querySelector(`div[data-key="${code}"]`)
    let keyFrame = keyEl.children[0]
    
    if(!keyEl){
        return
    }
    audio.currentTime = 0;
    audio.play()

    switch(code) {
        
        case "KeyE": rotateCrashCymbalToLeft(e)
                    break
        case "KeyR": rotateCrashCymbalToRight(e)
                    break
        case "KeyI":
        case "KeyK": hiHatTopToDown(e)
    }

})
