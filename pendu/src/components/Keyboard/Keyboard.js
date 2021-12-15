import React from 'react'
import './Keyboard.css'

export default function Keyboard() {
    return "abcdefghijklmnopqrstuvwwxyz".split("").map(letter => (
        <button 
            className="btn"
            //key={letter}
            //value={letter}
            //onClick={this.handleGuess}
            //disabled={this.state.guess.has(letter)}
        >
            {letter}
        </button>
    )) 
}
