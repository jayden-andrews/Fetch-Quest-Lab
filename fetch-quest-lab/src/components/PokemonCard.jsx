import React from 'react'
import { useState, useEffect } from 'react'

const PokemonCard = ({ name }) => {
  const [data, setData] = useState(null)
  
      useEffect(() => {
          if (!name) {
              setData(null)
              return
          }
          const fetchData = async () => {
              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
              const jsonData = await response.json()
              setData(jsonData)
          }
  
          fetchData()
      }, [name])

      if (!data) {
        return <div>Loading...</div>
    }

    return (
    <div>
        <h2>{data?.name}</h2>
        <img src={data?.sprites.front_default} alt={data?.name} />
    </div>
  )
}

export default PokemonCard