import PokemonCard from './PokemonCard'
import { useState, useEffect } from 'react'

const PokemonGrid = ({ type }) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        if (!type) {
            setData(null)
            return
        }
        const fetchData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
            const jsonData = await response.json()
            setData(jsonData)
        }

        fetchData()
    }, [type])

    if (!type) return <div>Select a type to see Pokemon!</div>

    if (!data) return <div>Loading...</div>

    return (
        <div>
            {data.pokemon.map((poke) => {
                return <PokemonCard key={poke.pokemon.name} name={poke.pokemon.name} />
            })}
        </div>
    )
}

export default PokemonGrid