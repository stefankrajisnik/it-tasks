const blocks = document.querySelectorAll('.block');

const firstBlock = blocks[0];
const secondBlock = blocks[1];

firstBlock.addEventListener('click',()=>{
    toggleColors(firstBlock);
    toggleColors(secondBlock);
})

secondBlock.addEventListener('click',()=>{
    toggleColors(firstBlock);
    toggleColors(secondBlock);
})

function toggleColors(element) {
    element.classList.toggle('red');
    element.classList.toggle('blue');
}
