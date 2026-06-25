import PropTypes from 'prop-types'

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginBottom: '1.75rem',
}

const buttonsWrapperStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem',
}

const buttonStyle = {
  border: '1px solid #d1d5db',
  backgroundColor: '#ffffff',
  color: '#111827',
  padding: '0.6rem 1rem',
  borderRadius: '999px',
  cursor: 'pointer',
  fontSize: '0.95rem',
}

const activeButtonStyle = {
  backgroundColor: '#2563eb',
  color: '#ffffff',
  borderColor: '#2563eb',
}

const inputStyle = {
  width: '100%',
  maxWidth: '420px',
  padding: '0.75rem 1rem',
  borderRadius: '12px',
  border: '1px solid #d1d5db',
  fontSize: '0.95rem',
  color: '#111827',
}

const FiltroEspecie = ({ selectedSpecies, onSpeciesChange, searchValue, onSearchChange }) => {
  const speciesOptions = ['Todas', 'Perro', 'Gato', 'Otro']

  return (
    <section style={wrapperStyle}>
      <div style={buttonsWrapperStyle}>
        {speciesOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSpeciesChange(option)}
            style={option === selectedSpecies ? { ...buttonStyle, ...activeButtonStyle } : buttonStyle}
          >
            {option}
          </button>
        ))}
      </div>

      <input
        type="search"
        value={searchValue}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Buscar por nombre"
        aria-label="Buscar mascotas por nombre"
        style={inputStyle}
      />
    </section>
  )
}

FiltroEspecie.propTypes = {
  selectedSpecies: PropTypes.string.isRequired,
  onSpeciesChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
}

export default FiltroEspecie
