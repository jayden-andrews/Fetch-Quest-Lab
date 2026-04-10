import React from 'react'

const TypeSelector = ({ setType }) => {
    return (
        <div>
            <button onClick={() => setType('fire')}>Fire</button>
            <button onClick={() => setType('water')}>Water</button>
            <button onClick={() => setType('grass')}>Grass</button>
            <button onClick={() => setType('electric')}>Electric</button>
            <button onClick={() => setType('psychic')}>Psychic</button>
            <button onClick={() => setType('ice')}>Ice</button>
            <button onClick={() => setType('dragon')}>Dragon</button>
            <button onClick={() => setType('dark')}>Dark</button>
            <button onClick={() => setType('fairy')}>Fairy</button>
            <button onClick={() => setType('normal')}>Normal</button>
            <button onClick={() => setType('fighting')}>Fighting</button>
            <button onClick={() => setType('flying')}>Flying</button>
            <button onClick={() => setType('poison')}>Poison</button>
            <button onClick={() => setType('ground')}>Ground</button>
            <button onClick={() => setType('rock')}>Rock</button>
            <button onClick={() => setType('bug')}>Bug</button>
            <button onClick={() => setType('ghost')}>Ghost</button>
            <button onClick={() => setType('steel')}>Steel</button>
        </div>
    )
}

export default TypeSelector
