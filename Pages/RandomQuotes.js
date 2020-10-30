import React, { useEffect, useState } from "react";
import Quotes from "./Quotes"

const API = "https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10"

function RandomQuotes() {
    const[quotes, setQuotes] = useState([]);

 
    const getQuotes = async () => { 
            const res = await fetch(API);
            // console.log(res);
            const listOfQuotes = await res.json();
            setQuotes(listOfQuotes.quotes);// to access the value inside of
        
    }

    useEffect(() => {
        getQuotes();
    }, []);
    console.log(quotes);
    return(
    <div>{quotes.map((quote) => (<Quotes key={quote.id} quote={quote} />))}</div>
    )
}


export default RandomQuotes;