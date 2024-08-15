import React, { useState } from 'react';
import Card from './Card'; 
import SubmitButton from './SubmitButton';
import '../App.css'

const Form = () => {
  const [juegoFavorito, setJuegoFavorito] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [plataforma, setPlataforma] = useState('');
  const [anio, setAnio] = useState('');
  const [error, setError] = useState('');
  const [mostrarCard, setMostrarCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

/* Al hacer clic en el botón de Enviar, debemos realizar las siguientes validaciones:
Para el caso del primer input, la longitud mínima del texto ingresado deberá ser de 3 caracteres y no deberá contener espacios en blanco al comienzo.
Para el segundo input, debemos validar que contenga al menos al menos 6 caracteres.*/ 

    if (juegoFavorito.length < 3 || juegoFavorito.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (descripcion.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    /* En caso de que los valores ingresados superen las validaciones en forma exitosa, 
    debemos renderizar el componente llamado Card */

    setMostrarCard(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Juego Favorito:
            <input
              type="text"
              value={juegoFavorito}
              onChange={(e) => setJuegoFavorito(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Descripción:
            <input
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Plataforma:
            <input
              type="text"
              value={plataforma}
              onChange={(e) => setPlataforma(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Año:
            <input
              type="text"
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
            />
          </label>
        </div>
        <SubmitButton handleSubmit={handleSubmit} />
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {mostrarCard && (
        <Card
          juegoFavorito={juegoFavorito}
          descripcion={descripcion}
          plataforma={plataforma}
          anio={anio}
        />
      )}
    </div>
  );
};

export default Form;