var imgContainer = document.querySelector('.image-container')
var imgWrap = document.querySelector('.image-wrap')
var imgWidth = document.querySelector('#constWidth')
var span = document.querySelector('#span')

imgWidth.style.width = imgContainer.offsetWidth + 'px'

    imgContainer.onmousemove = (e)=>{
        let length = e.pageX - imgContainer.offsetLeft + 'px'
        imgWrap.style.width = length
        span.style.left = length
    }
