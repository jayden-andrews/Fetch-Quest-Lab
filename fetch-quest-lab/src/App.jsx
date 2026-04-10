import { useState } from 'react'
import './App.css'
import TypeSelector from './components/TypeSelector'
import PokemonGrid from './components/PokemonGrid'

function App() {
  const [type, setType] = useState('')

  return (
  <div className="app">
    <div className="pokedex-screen">
      <h1 className="app-title">Pokemon Viewer</h1>
      <TypeSelector setType={setType} />
      <PokemonGrid type={type} />
    </div>
  </div>
)
}

export default App
