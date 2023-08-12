import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
      <div style={containerStyle}>
        <h1>Contacto</h1>
        <div style={formContainerStyle}>
          <h2>Formulario de contacto</h2>
          <form style={formStyle}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" style={inputStyle} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" style={inputStyle} />
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" style={inputStyle}></textarea>
            <button type="submit" style={buttonStyle}>Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '50vh',
  padding: '20px',
  backgroundColor: '#f4f4f4',
};

const formContainerStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '400px',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle: React.CSSProperties = {
  marginBottom: '10px',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '10px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default Contact;
