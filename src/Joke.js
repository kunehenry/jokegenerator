import React from 'react';
import "./Joke.css"

const Joke = ({jokeProps}) => {
    return (
        <div className="joke">
            <h1>{jokeProps.joke}</h1>
        </div>
    )
}

export default Joke;