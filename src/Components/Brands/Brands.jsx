import { Container } from "react-bootstrap";
import styles from "./styles.module.css";

const Brands = () => {
  const photos = [
    { image: "../fa-brands-2.svg", name: "brand1" },
    { image: "../fa-brands-3.svg", name: "brand1" },
    { image: "../fa-brands-4.svg", name: "brand1" },
    { image: "../col-md-2.svg", name: "brand1" },
  ];

  return (
    <div>
      <Container>
        <div className="row">
          {photos.map((photo) => (
            <div className="col-lg-3">
              <div className={styles.img}>
                <img src={photo.image} alt={photo.name} className="w-100" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Brands;
