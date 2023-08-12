import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';

const Home = () => {
  const productos = [
    { id: 1, nombre: 'Blusa Elegante', precio: 49.99, imagen: './src/img/blusas.png' },
    { id: 2, nombre: 'Vestido de Verano', precio: 59.99, imagen: './src/img/vestidos.png' },
    { id: 3, nombre: 'Pantalones Vaqueros', precio: 39.99, imagen: './src/img/pantalones.png' },
  ];

  return (
    <div className="home-container">
      <div className="carousel-container">
        <Carousel showArrows={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
          {productos.map((producto) => (
            <div key={producto.id} className="carousel-producto">
              <img src={producto.imagen} alt={producto.nombre} />
              <div className="producto-info">
                <h2>{producto.nombre}</h2>
                <p className="precio">${producto.precio}</p>
                <button className="comprar-btn">Comprar</button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
