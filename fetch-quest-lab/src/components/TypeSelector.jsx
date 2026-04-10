import './TypeSelector.css'

const TypeSelector = ({ setType }) => {
    const types = [
        'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting',
        'fire', 'flying', 'ghost', 'grass', 'ground', 'ice',
        'normal', 'poison', 'psychic', 'rock', 'steel', 'water'
    ]

    return (
        <div className="type-selector">
            {types.map((type) => (
                <button
                    key={type}
                    className={`type-btn type-btn--${type}`}
                    onClick={() => setType(type)}
                >
                    {type}
                </button>
            ))}
        </div>
    )
}

export default TypeSelector