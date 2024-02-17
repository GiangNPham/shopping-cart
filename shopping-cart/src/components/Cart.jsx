import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faTrash,
  faCircleMinus,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Cart({
  cart,
  setCart,
  openCart,
  setOpenCart,
  cartNumber,
}) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = cart.reduce(
      (accumulator, curval) => accumulator + +curval.quantity * +curval.price,
      0
    );
    setTotalPrice(price);
  }, [cart]);

  const closeCart = function () {
    setOpenCart(false);
  };

  const changeQuantity = function (index, newQuantity) {
    if (newQuantity < 1) {
      alert("Quantity must be larger than 0");
      return;
    }
    const newItem = cart[index];
    const newCart = cart.toSpliced(index, 1);
    // console.log(index, cart);
    newItem.quantity = newQuantity;
    newCart.splice(index, 0, newItem);

    // setCart([...cart, newItem]);
    setCart(newCart);
  };

  const deleteItem = function (index) {
    cart.splice(index, 1);
    setCart([...cart]);
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
              <div>
                <div className="text-text px-8 pt-6 flex flex-col">
                  <div className="flex flex-row justify-between mb-4">
                    <h1 className="text-2xl font-semibold">
                      Cart ({cartNumber}) {cartNumber === 1 ? "item" : "items"}{" "}
                    </h1>
                    <button className="pr-2" onClick={closeCart}>
                      <FontAwesomeIcon icon={faXmark} className="h-6" />
                    </button>
                  </div>

                  {cart.map((item, index) => {
                    return (
                      <div
                        key={item.title}
                        className="bg-red-400	rounded-md flex flex-row mt-5"
                      >
                        <img
                          src={item.url}
                          alt={item.title}
                          className="h-32 rounded-l"
                        />
                        <div className="ml-3 pt-2">
                          <h1 className="text-lg">{item.title}</h1>
                          <p>${+item.price * +item.quantity}</p>

                          <div className="mt-2 flex">
                            <button
                              onClick={() => {
                                changeQuantity(index, +item.quantity - 1);
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faCircleMinus}
                                className="h-5"
                              />
                            </button>
                            <input
                              type="number"
                              className="rounded mx-2 w-36 h-6 text-black text-center"
                              placeholder={item.quantity}
                              onChange={(e) => {
                                const temp = e.target.valueAsNumber;
                                if (isNaN(temp)) return;
                                if (temp <= 0) {
                                  alert("Quantity must be larger than 0");
                                  e.target.value = item.quantity;
                                } else changeQuantity(index, temp);
                              }}
                            ></input>
                            <button
                              onClick={() => {
                                changeQuantity(index, +item.quantity + 1);
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faCirclePlus}
                                className="h-5"
                              />
                            </button>
                          </div>
                        </div>
                        <button
                          className="ml-auto self-start	mt-3 mr-4 text-xl"
                          onClick={() => deleteItem(index)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    );
                  })}
                  <div className="absolute bottom-8 right-8 left-8 ">
                    <h1 className="text-lg">
                      Total: $<b>{totalPrice}</b>
                    </h1>
                    <button className="bg-accent w-full rounded-xl py-2 mt-2">
                      Checkout
                    </button>
                  </div>
                </div>
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
                <Link to="/store" className="flex">
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
  cartNumber: PropTypes.number,
};
