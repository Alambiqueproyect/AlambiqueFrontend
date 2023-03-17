import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CarouselElement.css'

export function CarouselElement() {
  return (
    <Carousel className='CarouselContainer'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./src/assets/images/Carrousel1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>¿Algo te inquieta, te perturaba o te atormenta?</h3>
          <p>¡La bruja Avería tiene la solución. Aqui encontrarás la poción perfecta para ti.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\images\Carrousel6.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>La bruja Avería</h3>
          <p>Vivita y coleando desde 1687, aqui en mi tienda tengo todo lo que necesitas y si necesitas verme en persona consulta nuestra página de eventos, quizás me pase por tu ciudad un día de estos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\images\Carrousel7.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>¿No ves nada que te guste?</h3>
          <p>
            En ese caso contacta conmigo, escribeme y haré una poción especial, solo para ti. ¡Llámame! La felicidad esta a un sorbo. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselElement;
