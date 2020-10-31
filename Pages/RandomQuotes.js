import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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


    return(
        <div>
            <div className="wrapper">
              <button className="quote-button" onClick={getQuotes}>random<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg></button>
            </div>
        <div className="container">
            <div className="quoteList">
                <div className="quote">
                   <p><q>{quotes.quoteText}</q></p>
                </div>
            </div>
            <Link to={`/authors/${quotes.quoteAuthor}`}>
               <button className="authorQuote">
                   {quotes.quoteAuthor}
                   <p>{quotes.quoteGenre}</p>
               </button>
            </Link> 
        </div>
        </div>
    )
}


export default RandomQuotes;