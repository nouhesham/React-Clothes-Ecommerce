import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  ClearCart,
  alltotal,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../Redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { Button, Container, InputGroup } from "react-bootstrap";
import { useEffect } from "react";

function CartIcon() {
  const dispatch = useDispatch();
  const cartlist = useSelector((store) => store.cart.cart);
  useEffect(() => {
    // Dispatching alltotal() when the component mounts
    dispatch(alltotal());
  }, [dispatch]);
  // dispatch(alltotal());

  const total = useSelector((store) => store.cart.total);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
    dispatch(alltotal());
  };
  const handleincreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
    dispatch(alltotal());
  };
  const handledecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
    dispatch(alltotal());
  };
  const removeAll = () => {
    dispatch(ClearCart());
  };
  return cartlist.length > 0 ? (
    <div className="container">
      <div>
        <h2 className="text-center mb-4">Your Cart</h2>
        <ul className="list-group p-2">
          {cartlist?.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center flex-lg-row flex-sm-column"
            >
              <div className="d-flex justify-content-center ">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ width: "33%", margin: "auto" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image"
                  />
                </div>
                <div
                  className="d-flex flex-column justify-content-center"
                  style={{ width: "60%" }}
                >
                  <h6>{item.title}</h6>
                  <p className="text-muted">Price: ${item.price}</p>
                </div>
              </div>
              <div
                className="d-flex align-items-center w-100"
                style={{ width: "50%" }}
              >
                <InputGroup className="mb-3">
                  <Button
                    variant="light"
                    className="increase-quantity-button"
                    onClick={() => {
                      handleincreaseQuantity(item.id);
                    }}
                  >
                    +
                  </Button>
                  <InputGroup.Text className="quantity-text">
                    {item.quantity}
                  </InputGroup.Text>
                  <Button
                    variant="light"
                    className="decrease-quantity-button"
                    onClick={() => {
                      handledecreaseQuantity(item.id);
                    }}
                  >
                    -
                  </Button>
                </InputGroup>
                <div className="me-4">
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${Math.floor(item.subtotal)}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove item
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <h3>
          <div className="row">
            <div className="col-lg-2 ms-auto me-2 d-flex flex-column ">
              <p className="me-3">
                Total:<span>${total.toFixed(2)}</span>
              </p>
              <button
                className="ms-4 btn btn-danger "
                onClick={() => {
                  removeAll();
                }}
              >
                Clear cart
              </button>
            </div>
          </div>
        </h3>
      </div>
    </div>
  ) : (
    <p className="text-center mt-4 text-danger fs-2 fw-bold">
      your cart is empty
    </p>
  );
}

export default CartIcon;
