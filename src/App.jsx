import { useState } from 'react'
import ListaMascotas from './components/ListaMascotas'
import FiltroEspecie from './components/FiltroEspecie'
import { mascotas } from './data/mascotas'
import './App.css'

const pageStyle = {
  padding: '2rem',
  backgroundColor: '#f5f7fb',
  minHeight: '100vh',
  maxWidth: '1180px',
  margin: '0 auto',
}

const headerStyle = {
  marginBottom: '1.5rem',
  paddingBottom: '1rem',
  borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
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

const urgentCountStyle = {
  marginBottom: '1rem',
  color: '#b91c1c',
  fontWeight: 700,
}

const urgentToggleStyle = {
  padding: '0.7rem 1rem',
  borderRadius: '999px',
  border: '1px solid rgba(185, 28, 28, 0.25)',
  backgroundColor: '#fff1f2',
  color: '#b91c1c',
  cursor: 'pointer',
  fontWeight: 700,
}

const urgentToggleActiveStyle = {
  backgroundColor: '#b91c1c',
  color: '#ffffff',
  borderColor: '#b91c1c',
}

function App() {
  const [selectedSpecies, setSelectedSpecies] = useState('Todas')
  const [searchValue, setSearchValue] = useState('')
  const [urgentOnly, setUrgentOnly] = useState(false)

  const filteredMascotas = mascotas.filter((mascota) => {
    const matchesSpecies = selectedSpecies === 'Todas' || mascota.especie === selectedSpecies
    const matchesSearch = mascota.nombre
      .toString()
      .toLowerCase()
      .includes(searchValue.trim().toLowerCase())
    const matchesUrgent = !urgentOnly || mascota.adopcionUrgente

    return matchesSpecies && matchesSearch && matchesUrgent
  })

  const urgentCount = filteredMascotas.filter((mascota) => mascota.adopcionUrgente).length

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

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <p style={urgentCountStyle}>Urgentes: {urgentCount}</p>
        <button
          type="button"
          onClick={() => setUrgentOnly((current) => !current)}
          style={urgentOnly ? { ...urgentToggleStyle, ...urgentToggleActiveStyle } : urgentToggleStyle}
        >
          {urgentOnly ? 'Mostrar todas' : 'Solo urgentes'}
        </button>
      </div>

      {filteredMascotas.length > 0 ? (
        <ListaMascotas mascotas={filteredMascotas} />
      ) : (
        <p style={emptyMessageStyle}>No hay mascotas que coincidan</p>
      )}
    </main>
  )
}

export default App
