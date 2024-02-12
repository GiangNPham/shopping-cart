import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Cart({ cart, setCart, openCart, setOpenCart }) {
  const closeCart = function () {
    setOpenCart(false);
  };
  return (
    <>
      {openCart && (
        <div
          className="top-0 right-0 fixed h-full w-full backdrop-blur-sm"
          onClick={closeCart}
        >
          <div
            className="h-full w-1/4 top-0 right-0 absolute bg-primary transition-opacity"
            onClick={(e) => e.stopPropagation()}
          >
            {cart.length !== 0 ? (
              <div className="text-text px-8 pt-6 flex flex-col">
                <div className="flex flex-row justify-between mb-4">
                  <h1 className="text-2xl font-semibold">
                    Cart ({cart.length}) {cart.length === 1 ? "item" : "items"}{" "}
                  </h1>
                  <button className="pr-2" onClick={closeCart}>
                    <FontAwesomeIcon icon={faXmark} className="h-6" />
                  </button>
                </div>

                {cart.map((item) => {
                  return (
                    <div
                      key={item.title}
                      className="bg-red-400	rounded-md flex flex-row"
                    >
                      <img
                        src={item.url}
                        alt={item.title}
                        className="h-32 rounded-l"
                      />
                      <div className="ml-3">
                        <h1 className="text-lg">{item.title}</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              // When the cart is empty
              <div className="text-text px-8 pt-6 flex flex-col ">
                <div className="flex flex-row justify-between">
                  <h1 className="text-2xl font-semibold">Your cart is empty</h1>
                  <button className="pr-2" onClick={closeCart}>
                    <FontAwesomeIcon icon={faXmark} className="h-6" />
                  </button>
                </div>
                <Link to="/store" className="flex ">
                  <button
                    className="mt-3 w-full bg-secondary py-1 rounded"
                    onClick={closeCart}
                  >
                    Browse Products
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
  openCart: PropTypes.bool,
  setOpenCart: PropTypes.func,
};
