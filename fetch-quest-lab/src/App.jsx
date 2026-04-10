import { useState } from 'react'
import './App.css'
import TypeSelector from './components/TypeSelector'
import PokemonGrid from './components/PokemonGrid'

function App() {
  const [type, setType] = useState('')

  return (
    <>
      <div>
        <h1>Pokemon Viewer</h1>
        <TypeSelector setType={setType} />
        <PokemonGrid type={type} />
      </div>
    </>
  )
}

export default App
