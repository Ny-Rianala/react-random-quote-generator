import React from "react"
import RandomQuotes from "./RandomQuotes";
import QuotesByAuthor from "./QuotesByAuthor";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
    return(
            <Router> 
                <Switch>
                    <Route path="/authors/:authorName">
                        <QuotesByAuthor />              
                    </Route>
                    <Route path="/">
                       <RandomQuotes />
                    </Route>
                </Switch>
            </Router>
    )
}

export default App;