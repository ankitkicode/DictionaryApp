let form = document.querySelector('form')
let sub = document.querySelector('.srch')
let result = document.querySelector('.result')

console.log(form);
console.log(sub);

form.addEventListener('submit',(e)=>{
   e.preventDefault() 
   let word = document.querySelector('input').value
   getWord(word)
})

let getWord = async function(val){
    try {   
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`
        let res = await fetch(url)
        let data = await res.json()
        console.log(data);
        let defi = data[0].meanings[0].definitions[0]
        let defiori = data[0].meanings[0].definitions[0]
        result.innerHTML = 
        `<p><strong>Your Word</strong> : ${data[0].word}</p>
        <p><strong>Part Of Speech</strong> : ${data[0].meanings[0].partOfSpeech}</p>
        <p><strong>Meaning</strong> : ${defiori.definition === undefined ? "NOT FOUND" :defiori.definition}</p>
        <p><strong>Example</strong> : ${defi.example === undefined ? "NOT FOUND" : defi.example}</p>
        <a href="${data[0].sourceUrls}" taget ="_blank"> Learn More</a>
        `
        // let newPara = document.createElement('p')
        // newPara.appendChild()
    } catch (error) {
        result.innerHTML = `<h1>NOT Found!</h1>`
    }
}