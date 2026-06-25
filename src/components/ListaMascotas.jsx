import PropTypes from 'prop-types'
import MascotaCard from './MascotaCard'

const listWrapperStyle = {
  display: 'grid',
  gap: '1.5rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
}

function ListaMascotas({ mascotas }) {
  const mascotasArray = Array.isArray(mascotas) ? mascotas : []

  return (
    <section style={listWrapperStyle}>
      {mascotasArray.map((mascota) => (
        <MascotaCard
          key={mascota.id}
          nombre={mascota.nombre}
          raza={mascota.raza}
          edad={mascota.edad}
          especie={mascota.especie}
          descripcion={mascota.descripcion}
          caracteristicas={mascota.caracteristicas}
          adopcionUrgente={mascota.adopcionUrgente}
        />
      ))}
    </section>
  )
}

ListaMascotas.propTypes = {
  mascotas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      nombre: PropTypes.string,
      raza: PropTypes.string,
      edad: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      especie: PropTypes.string,
      descripcion: PropTypes.string,
      caracteristicas: PropTypes.arrayOf(PropTypes.string),
      adopcionUrgente: PropTypes.bool,
    })
  ),
}

ListaMascotas.defaultProps = {
  mascotas: [],
}

export default ListaMascotas
