// const color = ['orange','green','blue','red']
// const buttons = document.querySelector('.buttons')

// color.forEach(element => {
//     buttons.insertAdjacentHTML('beforeend',`<button id='${element}'>${element}</button>`)
//     document.getElementById(`${element}`).onclick = ()=>{
//         document.body.style.backgroundColor = `${element}`
//     }
// });

function clickHandler(color){
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = clickHandler('orange')
document.getElementById('green').onclick = clickHandler('green')