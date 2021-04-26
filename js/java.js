const getQuote = () => {
    return fetch('https://api.kanye.rest')
    .then(data=>{return data.json()})
}

document.addEventListener('DOMContentLoaded', getQuote)

getQuote().then(data => {
    const quoteDiv = makeQuoteDiv(data.quote)
    appendQuote(quoteDiv)
})

const makeQuoteDiv = (quote => {
    console.log(quote)
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
 

    h3.innerHTML = quote;

    div.appendChild(h3)

    return div
})

const appendQuote = (quoteDiv) => {
    const quoteContainer = document.getElementById("quotebox")
    quoteContainer.innerHTML = ""
    quoteContainer.appendChild(quoteDiv)
}


const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    getQuote().then(data => {
        const quoteDiv = makeQuoteDiv(data.quote)
        appendQuote(quoteDiv)
    })
})