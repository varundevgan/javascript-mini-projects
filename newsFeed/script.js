const cards = document.querySelector('.cards')
const button = document.querySelector('button')
let elements = 12
const apiKey = '9c39355ad111403a8922c011a2c1d562'
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`
let articles = []
let count = 1;


window.addEventListener('load',()=>{
    count = 1
    fetchNewsContent(elements)
})

async function fetchNewsContent(elements){

    try{
        const res = await fetch(`${apiUrl}`)
        if(res.ok){
            const data = await res.json()
            articles = data.articles.slice(0,elements)
            return articles
        }
    }catch{
        console.log(error)
        return []
    }finally{
        createCards(articles)
    }
}

function createCards(articles){
    cards.innerHTML = ''
    articles.forEach(element => {
        const div = document.createElement('div')
        div.className = 'card'
        div.innerHTML = `<img src="${element.urlToImage}" />
        <h2>${element.title}</h2>
        <p>${element.description}</p>`
        cards.appendChild(div)
        div.addEventListener('click', ()=>{
            window.open(element.url, '_blank')
        })
    });
}

document.querySelector('#search-button').addEventListener('click', async ()=>{
   specificNews(elements)
})

async function specificNews(elements){
    const input = document.querySelector('#search-input').value.trim()
    let response = [];
    if(input != ""){
        try{
            const articles = await fetch(`https://newsapi.org/v2/everything?q=${input}&page=2&apiKey=9c39355ad111403a8922c011a2c1d562`)
            const data = await articles.json()
            console.log(data)
            response = data.articles.slice(0,elements)
            console.log(response)
        }catch(error){
            console.log(error)
        }
        finally{
            createCards(response)
        }
    }
}

window.addEventListener('scroll', (e)=>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        count++
        specificNews(12 * count)    
    }
    
})




let increment = 0

let incrementCount = (amount) => {
    console.log(increment += amount);
}

const debounce = (fn, delay) => {
    let timer
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn(...args)
        },delay)
    }
}

incrementCount = debounce(incrementCount, 500)

window.addEventListener('scroll', () => incrementCount(5))