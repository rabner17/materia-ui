const Catalogo = () => {
  const productos = [
    { id: 1, nombre: 'Descuentos Hasta 70%', imagen: './src/img/imagen70.png' },
    { id: 2, nombre: 'Blusa', precio: 34.99, imagen: './src/img/03.jpg' },
    { id: 3, nombre: 'Blusa', precio: 45.99, imagen: './src/img/04.jpg' },
    // Agrega más productos aquí
  ];

  return (
    <div>
      <h1>MUJER</h1>
      <div className="productos">
        <div key={productos[0].id} className="producto">
          <img
            src={productos[0].imagen}
            alt={productos[0].nombre}
            style={{ width: '100%', height: 'auto' }} // Cambia el tamaño de la imagen aquí
          />
          <h2>{productos[0].nombre}</h2>
          {productos[0].precio && <p>Precio: ${productos[0].precio}</p>}
        </div>
        <div className="producto">
          <img
            src={productos[1].imagen}
            alt={productos[1].nombre}
            style={{ width: '200px', height: 'auto' }} // Cambia el tamaño de la imagen aquí
          />
          <h2>{productos[1].nombre}</h2>
          {productos[1].precio && <p>Precio: ${productos[1].precio}</p>}
        </div>
        <div className="producto">
          <img
            src={productos[2].imagen}
            alt={productos[2].nombre}
            style={{ width: '200px', height: 'auto' }} // Cambia el tamaño de la imagen aquí
          />
          <h2>{productos[2].nombre}</h2>
          {productos[2].precio && <p>Precio: ${productos[2].precio}</p>}
        </div>
      </div>
      <style jsx>{`
        .productos {
          display: flex;
          flex-wrap: wrap; /* Permite que los elementos se coloquen en varias líneas */
          justify-content: space-between;
        }

        .producto {
          text-align: center;
          margin-bottom: 20px; /* Espaciado entre productos */
        }
      `}</style>
    </div>
  );
};

export default Catalogo;
