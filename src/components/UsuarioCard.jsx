// componente pequeño que recibe datos por Props

const UsuarioCard = ({nombre, rol}) => {
    return (
        <div style={{border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{nombre}</h3>
            <p>{rol}</p>
        </div>
    );
};

export default UsuarioCard;