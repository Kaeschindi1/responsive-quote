const getNewQuote = async () => {
    const response = await fetch("https://type.fit/api/quotes");

    const allQuotes = await response.json();

    const idx = Math.floor(Math.random()*allQuotes.length);

    const quote = allQuotes[idx].text;
    const aut = allQuotes[idx].author;

    if(aut == null){
        author = "Anonymous"
    }

    const text = quote;
    const author = "~ " + aut;

    document.getElementById("quote").innerHTML = text;
    document.getElementById("author").innerHTML = author;
}

getNewQuote();