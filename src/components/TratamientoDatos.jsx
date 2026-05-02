import "./TratamientoDatos.css";

function TratamientoDatos({ onAceptar }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Tratamiento de Datos</h2>
        <p>
          Acepto el uso de mis datos personales para el acceso a la plataforma.
        </p>

        <button onClick={onAceptar}>Aceptar</button>
      </div>
    </div>
  );
}

export default TratamientoDatos;