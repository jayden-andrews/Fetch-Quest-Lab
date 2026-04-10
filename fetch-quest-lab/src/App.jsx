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
    } else {
      audioRef.current.pause()
      setMusicStarted(false)
    }
  }

  return (
    <div className="app">
      <audio ref={audioRef} src="./src/assets/20 - Pokémon Center.mp3" loop />
      <div className="pokedex-screen">
        <h1 className="app-title">Pokémon Viewer</h1>
        <button className="music-btn" onClick={toggleMusic}></button>
        <TypeSelector setType={setType} />
        <PokemonGrid type={type} />
      </div>
    </div>
  )
}

export default App
