import '../App.css'

const Card = ({ juegoFavorito, descripcion, plataforma, anio }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
      <h2>Detalles del Videojuego</h2>
      <p><strong>Juego Favorito:</strong> {juegoFavorito}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Plataforma:</strong> {plataforma}</p>
      <p><strong>Año:</strong> {anio}</p>
    </div>
  );
};

export default Card