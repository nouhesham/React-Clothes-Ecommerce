import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { HiShoppingCart } from "react-icons/hi";
import { addtoCart } from "../../Redux/Slices/CartSlice";
import { useDispatch } from "react-redux";

const ProductsList = ({ products }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addtoCart(product));
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
  return (
    <div className="row mt-4 p-5">
      {products.length > 0 &&
        products.map((product) => {
          return (
            <div className="col-lg-3 mt-4 col-md-6 col-sm-6" key={product.id}>
              <Card style={{ maxwidth: "18rem", maxHeight: "40rem" }}>
                <div className={styles.img}>
                  <Card.Img variant="top" src={product.image} />
                </div>

                <Card.Body>
                  <Card.Title>{product.title.slice(0, 23)}</Card.Title>
                  <Card.Text className={styles.shop}>
                    {product.description.slice(-50)}
                  </Card.Text>
                  <Card.Text className={styles.price}>
                    <span className="text-primary me-2">Price:</span>
                    {product.price}$
                  </Card.Text>
                  <span className={styles.rate}>Rating:</span>
                  <Rating
                    initialRating={product.rating.rate}
                    emptySymbol={emptystar}
                    fullSymbol={fullStar}
                    readonly
                  />
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      className={styles.view}
                      to={`/shop/${product.id}`}
                      variant="primary"
                    >
                      View Details
                    </Link>
                    <Link>
                      <HiShoppingCart
                        size={30}
                        onClick={() => handleAddToCart(product)}
                      />
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default ProductsList;
