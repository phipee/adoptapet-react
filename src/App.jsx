import { useState } from 'react'
import ListaMascotas from './components/ListaMascotas'
import FiltroEspecie from './components/FiltroEspecie'
import { mascotas } from './data/mascotas'
import './App.css'

const pageStyle = {
  padding: '2rem',
  backgroundColor: '#f5f7fb',
  minHeight: '100vh',
}

const headerStyle = {
  marginBottom: '1.5rem',
}

const titleStyle = {
  margin: 0,
  color: '#1f2937',
}

const subtitleStyle = {
  margin: '0.5rem 0 0',
  color: '#4b5563',
}

const emptyMessageStyle = {
  marginTop: '1.25rem',
  color: '#6b7280',
  fontSize: '1rem',
}

function App() {
  const [selectedSpecies, setSelectedSpecies] = useState('Todas')
  const [searchValue, setSearchValue] = useState('')

  const filteredMascotas = mascotas.filter((mascota) => {
    const matchesSpecies = selectedSpecies === 'Todas' || mascota.especie === selectedSpecies
    const matchesSearch = mascota.nombre
      .toString()
      .toLowerCase()
      .includes(searchValue.trim().toLowerCase())

    return matchesSpecies && matchesSearch
  })

  return (
    <main style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>AdoptaPet</h1>
        <p style={subtitleStyle}>Selecciona una mascota y conoce sus datos principales.</p>
      </header>

      <FiltroEspecie
        selectedSpecies={selectedSpecies}
        onSpeciesChange={setSelectedSpecies}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />

      {filteredMascotas.length > 0 ? (
        <ListaMascotas mascotas={filteredMascotas} />
      ) : (
        <p style={emptyMessageStyle}>No hay mascotas que coincidan</p>
      )}
    </main>
  )
}

export default App
