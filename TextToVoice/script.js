let speech = new SpeechSynthesisUtterance()
let voices = []
let voiceSelect = document.querySelector('select')


window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices()
    speech.voice = voices[0]
    
    voices.map((voice, index) => (voiceSelect.options[index] = new Option(voice.name, index) ))
}

voiceSelect.addEventListener('change', ()=>{
    speech.voice = voices[voiceSelect.value]
    console.log(voiceSelect.value)
})

document.querySelector('button').addEventListener('click',()=>{
    speech.text = document.querySelector('textarea').value
    if(window.speechSynthesis.paused)
        return window.speechSynthesis.resume()
    
    window.speechSynthesis.speak(speech)
})

document.querySelector('.pauseButton').addEventListener('click',()=>{
    window.speechSynthesis.pause()
})

const madeUpArray = ['apple','banana','orange']


