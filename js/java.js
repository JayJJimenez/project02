// step 1 : create function getQuote - retrieve fetch api 

const getQuote = () => {
    return fetch('https://api.kanye.rest')
    .then(data=>{return data.json()})
}

// step 2: create the DIV that will replace elements within HTML with the fetched information
const makeQuoteDiv = (quote => {
    console.log(quote)
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
 

    h3.innerHTML = quote;

    div.appendChild(h3)

    return div
})


// step 3: append the DIV to the HTML
const appendQuote = (quoteDiv) => {
    const quoteContainer = document.getElementById("quotebox")
    quoteContainer.innerHTML = ""
    quoteContainer.appendChild(quoteDiv)
}


// step 4: appending the information from the fetched data
getQuote().then(data => {
    const quoteDiv = makeQuoteDiv(data.quote)
    appendQuote(quoteDiv)
})



// step 5: add an event listener to load content once page starts
document.addEventListener('DOMContentLoaded', getQuote)


// step 6: create event listener that initializes the QuoteDIV function when the btn is clicked
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    getQuote().then(data => {
        const quoteDiv = makeQuoteDiv(data.quote)
        appendQuote(quoteDiv)
    })
})