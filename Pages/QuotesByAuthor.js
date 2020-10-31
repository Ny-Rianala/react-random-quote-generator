import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";



//Get the authors from the api and specify the length of the quotes 

const API_BY_AUTHOR="https://quote-garden.herokuapp.com/api/v2/authors/"
const API_MAX="?page=1&limit=3";

export default function QuotesByAuthor() {

    const { authorName } = useParams();
    const [newQuote, setnewQuote] = useState([]);

    //Fetch new quotes from api by author and the number max of the quotes 
    const getnewQuotes = async () => {
            const res = await fetch(API_BY_AUTHOR + authorName + API_MAX);
            const newAuthorQuotes = await res.json();
            setnewQuote(newAuthorQuotes);
            console.log(newAuthorQuotes);
        }
        
        useEffect(() => {
            getnewQuotes();
        }, [authorName])
        
        if (!newQuote.quotes) return null

    return(
        <div className="allChosenQuotes">
            <div className="wrapper">
              <button className="quote-button-second" onClick={getnewQuotes}>random<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg></button>
            </div>
            <div>
                <h1>{authorName}</h1>
                <ul>
                    {newQuote.quotes.map(
                        quote => (
                            <li className="listOfQuote" key={quote.id}><q>{quote.quoteText}</q></li>
                    ))}
                </ul>  
            </div>
        </div>
    )
}


