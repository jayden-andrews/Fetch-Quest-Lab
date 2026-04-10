import './PokemonCard.css'
import { useState, useEffect } from 'react'

const PokemonCard = ({ name }) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        if (!name) return
        const fetchData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const jsonData = await response.json()
            setData(jsonData)
        }
        fetchData()
    }, [name])

    if (!data) return <div className="card card--loading">...</div>

    return (
        <div className="card">
            <div className="card__inner">
                <div className="card__sprite-box">
                    <img src={data.sprites.front_default} alt={data.name} className="card__sprite" />
                </div>
                <p className="card__name">{data.name}</p>
            </div>
        </div>
    )
}

export default PokemonCard