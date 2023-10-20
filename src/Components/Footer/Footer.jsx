import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import Contact from "../Contact/Contact";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className="row ">
          <div className="col-lg-2 p-3">
            <p className="fs-4 text-light pt-5">
              "Bandage is delighted to offer the upcoming fashion styles For
              you"
            </p>
          </div>
          <div className="col-lg-10">
            <Contact />
          </div>
        </div>
        <p className="text-white">Copyright@2023summer</p>
      </Container>
    </div>
  );
};

export default Footer;
