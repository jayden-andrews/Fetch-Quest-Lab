import { useState, useRef } from 'react'
import './App.css'
import TypeSelector from './components/TypeSelector'
import PokemonGrid from './components/PokemonGrid'

function App() {
  const [type, setType] = useState('')
  const audioRef = useRef(null)
  const [musicStarted, setMusicStarted] = useState(false)

  const toggleMusic = () => {
    if (!musicStarted) {
      audioRef.current.play()
      setMusicStarted(true)
    }
  }

  return (
    <div className="app">
      <audio ref={audioRef} src="./src/assets/20 - Pokémon Center.mp3" loop />
      <div className="pokedex-screen">
        <div className="title-bar">
          <h1 className="app-title">Pokédex</h1>
          <button className="music-btn" onClick={toggleMusic}></button>
        </div>
        <TypeSelector setType={setType} />
        <PokemonGrid type={type} />
      </div>
    </div>
  )
}

export default App
