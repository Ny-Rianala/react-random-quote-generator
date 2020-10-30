import React, { useEffect, useState } from "react";

const API = "https://quote-garden.herokuapp.com/api/v2/quotes/random"

function RandomQuotes() {
    
    const[quotes, setQuotes] = useState([]);

    const getQuotes = async () => { 
            const res = await fetch(API);
            const listOfQuotes = await res.json();
            console.log(listOfQuotes.quote);
            setQuotes(listOfQuotes.quote);  // to access the value inside of an object
            
    }

    useEffect(() => {
        getQuotes();
    }, []);

    console.log(quotes.quoteText);

    return(
        <div>
            <button className="quote-button" onClick={getQuotes}>Random</button>
            <p className="quote">{quotes.quoteText}</p>
        </div>
    )
}


export default RandomQuotes;