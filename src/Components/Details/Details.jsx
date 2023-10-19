import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./styles.module.css";

import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Details = () => {
  const param = useParams();
  const [product, setproduct] = useState({});
  const fetchproduct = () => {
    fetch(`https://fakestoreapi.com/products/${param.id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);

        setproduct(json);
      });
  };
  const fullStar = (
    <FontAwesomeIcon
      icon={faStar}
      style={{ color: "#FFFF00", fontSize: "0.7rem" }}
    />
  );
  const emptystar = (
    <FontAwesomeIcon
      icon={faStar}
      style={{ color: "black", fontSize: "0.7rem" }}
    />
  );
  useEffect(() => {
    fetchproduct();
  }, []);
  return (
    <h1>
      <div className="row mt-4 p-5">
        <div className="col-lg-4 mt-4 p-4">
          <div className={styles.img}>
            <Card.Img variant="top" src={product.image} />
          </div>
        </div>
        <div className="col-lg-8 p-4">
          <h3>{product.title}</h3>
          <p className={styles.description}>{product.description}</p>
          <div>
            <p className={styles.price}>
              <span className="me-2">Price :</span>
              {product.price}$
            </p>
            <span className={styles.rating}>Rating:</span>
            <Rating
              initialRating={product.rating.count}
              emptySymbol={emptystar}
              fullSymbol={fullStar}
              readonly
            />
          </div>
        </div>
      </div>
    </h1>
  );
};

export default Details;
