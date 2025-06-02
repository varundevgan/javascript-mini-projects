const images = document.querySelector('.images')

images.addEventListener('wheel',(e)=>{
    e.preventDefault();
    images.scrollLeft += e.deltaY
})

function changePos(direction){
    if(direction === 'back'){
        images.style.scrollBehavior = 'smooth'
        images.scrollLeft += -280
    } 
    else {
        images.style.scrollBehavior = 'smooth'
        images.scrollLeft += 280
    }

    images.style.scrollBehavior = 'auto';
}