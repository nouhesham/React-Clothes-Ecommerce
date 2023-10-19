import Carousel from "react-bootstrap/Carousel";

const Caroussel = () => {
  return (
    <Carousel data-bs-theme="dark" className="m-4 p-4">
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className="text-light fs-1">Women Section</h5>
          <p className="text-light fs-4">Your way to fashion</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://images.pexels.com/photos/5543538/pexels-photo-5543538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="text-light fs-1">Men Section</h5>
          <p className="text-light fs-4">Embark Your stylish journey</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://images.pexels.com/photos/5560471/pexels-photo-5560471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="text-light fs-1">Kids Section</h5>
          <p className="text-light fs-4">Look comfy as you can</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Caroussel;
