const hour = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')


for(let i = 1; i < 13; i++){
    const p = document.createElement('p')
    p.innerText = i
    const angle = (i * 30) * (Math.PI/180)
    const radius = 85
    const x = radius * Math.sin(angle)
    const y = -radius * Math.cos(angle)
        
    p.style.transform = `translate(-50%,-50%) translate(${x}px,${y}px)`
    document.querySelector('.clock').appendChild(p)
}

function updateClock(){

    const time = new Date();
    console.log(time.getSeconds())
    const secondsDeg = time.getSeconds() * 6 
    const minutesDeg = time.getMinutes() * 6 + time.getSeconds() * 0.1 
    const hoursDeg = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5

    hour.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`
    minutes.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`
    seconds.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`
  
}

updateClock()
setInterval(updateClock,1000)
