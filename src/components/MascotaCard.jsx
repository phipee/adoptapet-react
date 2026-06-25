import PropTypes from 'prop-types'

const especieStyles = {
  Perro: {
    borderColor: '#1f6ed4',
    backgroundColor: '#e7f0ff',
    labelColor: '#1f6ed4',
  },
  Gato: {
    borderColor: '#c83392',
    backgroundColor: '#fde8fb',
    labelColor: '#c83392',
  },
  Otro: {
    borderColor: '#2a9d8f',
    backgroundColor: '#e6fbf8',
    labelColor: '#2a9d8f',
  },
}

const defaultCardStyle = {
  border: '1px solid #d2d2d2',
  borderRadius: '16px',
  padding: '1.25rem',
  maxWidth: '360px',
  backgroundColor: '#ffffff',
  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.06)',
  fontFamily: 'system-ui, sans-serif',
}

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.75rem',
  marginBottom: '0.75rem',
}

const tagStyle = (color) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.35rem 0.8rem',
  borderRadius: '999px',
  fontSize: '0.8rem',
  fontWeight: 700,
  color: '#ffffff',
  backgroundColor: color,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
})

const titleStyle = {
  fontSize: '1.35rem',
  margin: 0,
  color: '#141414',
}

const metaStyle = {
  margin: '0.25rem 0 1rem',
  color: '#4f4f4f',
  fontSize: '0.95rem',
}

const descriptionStyle = {
  margin: '0 0 1rem',
  lineHeight: 1.6,
  color: '#333333',
}

const listStyle = {
  margin: 0,
  paddingLeft: '1.15rem',
  color: '#2d2d2d',
}

const listItemStyle = {
  marginBottom: '0.45rem',
}

const sectionLabelStyle = {
  margin: '1rem 0 0.5rem',
  fontWeight: 700,
  color: '#1f1f1f',
}

function MascotaCard({ nombre, raza, edad, especie, descripcion, caracteristicas }) {
  const especieKey = typeof especie === 'string' ? especie.trim() : ''
  const normalizedEspecie = especieKey.charAt(0).toUpperCase() + especieKey.slice(1).toLowerCase()
  const style = especieStyles[normalizedEspecie] || especieStyles.Otro
  const validCaracteristicas = Array.isArray(caracteristicas) ? caracteristicas : []

  return (
    <article style={{ ...defaultCardStyle, borderColor: style.borderColor, backgroundColor: style.backgroundColor }}>
      <div style={headerStyle}>
        <div>
          <h2 style={titleStyle}>{nombre}</h2>
          <p style={metaStyle}>
            Raza: <strong>{raza}</strong> · Edad: <strong>{edad}</strong> años
          </p>
        </div>
        <span style={tagStyle(style.labelColor)}>{normalizedEspecie || 'Otro'}</span>
      </div>

      <p style={descriptionStyle}>{descripcion}</p>

      <div>
        <p style={sectionLabelStyle}>Características</p>
        {validCaracteristicas.length > 0 ? (
          <ul style={listStyle}>
            {validCaracteristicas.map((caracteristica, index) => (
              <li key={index} style={listItemStyle}>
                {caracteristica}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ margin: 0, color: '#5a5a5a' }}>Sin características registradas.</p>
        )}
      </div>
    </article>
  )
}

MascotaCard.propTypes = {
  nombre: PropTypes.string,
  raza: PropTypes.string,
  edad: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  especie: PropTypes.string,
  descripcion: PropTypes.string,
  caracteristicas: PropTypes.arrayOf(PropTypes.string),
}

MascotaCard.defaultProps = {
  nombre: 'Mascota sin nombre',
  raza: 'No especificada',
  edad: 'Desconocida',
  especie: 'Otro',
  descripcion: 'No hay descripción disponible.',
  caracteristicas: [],
}

export default MascotaCard
