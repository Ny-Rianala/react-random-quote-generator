import React from "react"


function Quotes({ quote }) {
    return(
        <ul>
            <li>{quote.quoteText}</li>
            <li>{quote.quoteAuthor}</li>
        </ul>
    )
}


export default Quotes