import { useSelector } from "react-redux/es/hooks/useSelector";
import { addtoCart, removeFromCart } from "../../Redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function CartIcon() {
  const dispatch = useDispatch();
  const cartlist = useSelector((store) => store.cart);
  console.log(cartlist);
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  return (
    <div>
      <h2 className="text-center mb-4">Your Cart</h2>
      <ul className="list-group">
        {Array.isArray(cartlist) &&
          cartlist?.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="d-flex">
                <img
                  src={item.image} // Assuming you have an 'image' property in your cart item
                  alt={item.title}
                  className="cart-item-image me-2"
                />
                <div>
                  <h6>{item.title}</h6>
                  <p className="text-muted">Price: ${item.price}</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${item.subtotal}</p>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        }
      </ul>
    </div>
  );
}

export default CartIcon;
