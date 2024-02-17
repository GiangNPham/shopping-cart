import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function ItemPage({ items, cart, setCart, setCartNumber }) {
  const [cartItem, setCartItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { itemId } = useParams();

  useEffect(() => {
    setQuantity(1);
  }, [itemId]);

  useEffect(() => {
    const newCartNumber = cart.reduce(
      (accumulator, curval) => accumulator + curval.quantity,
      0
    );
    setCartNumber(newCartNumber);
  }, [cart]);

  useEffect(() => {
    const targetItem =
      items.find(
        (item) => item.node.title.replace(/\s+/g, "-").toLowerCase() === itemId
      ) || null;
    console.log(targetItem);
    setCartItem(targetItem);
  }, [items, itemId]);

  const decrementQuantity = function () {
    if (quantity === 1) alert("Quanity must be larger than 0");
    else {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = function () {
    setQuantity(quantity + 1);
  };

  const addToCart = async function () {
    if (isNaN(quantity)) alert("Quanity must be larger than 0");
    else {
      // Check for repeating object
      const findItem = cart.findIndex(
        (item) => item.title === cartItem.node.title
      );
      if (findItem === -1) {
        const newCart = [
          ...cart,
          {
            title: cartItem.node.title,
            quantity: quantity,
            price: cartItem.node.variants.edges[0].node.price.amount,
            url: cartItem.node.featuredImage.url,
          },
        ];
        // console.log(newCart);
        await setCart(newCart);
      } else {
        const newCart = cart.filter((_, index) => index !== findItem);
        const changedItem = cart[findItem];

        await setCart([
          ...newCart,
          {
            title: changedItem.title,
            price: changedItem.price,
            quantity: changedItem.quantity + quantity,
            url: changedItem.url,
          },
        ]);
      }
    }
  };

  return (
    <>
      {cartItem == null || cartItem.node == null ? (
        <div className="h-screen bg-background">Loading</div>
      ) : (
        <div className="bg-background min-h-screen	 text-text pt-10 flex flex-col">
          <div className="grid grid-cols-2 mx-auto">
            <img
              className="w-72 h-72 bg-black rounded justify-self-end	"
              src={cartItem.node.featuredImage.url}
              alt={cartItem.node.title}
            />
            <div className="pl-10">
              <h1 className="text-3xl font-semibold">{cartItem.node.title}</h1>
              <h1>${cartItem.node.variants.edges[0].node.price.amount}</h1>

              <div className="mt-6">
                <button onClick={decrementQuantity}>
                  <FontAwesomeIcon icon={faCircleMinus} className="h-5" />
                </button>
                <input
                  type="number"
                  className="rounded mx-2 h-6 text-black text-center py-4"
                  value={quantity}
                  onChange={(e) => {
                    const temp = e.target.valueAsNumber;
                    if (temp <= 0) alert("Quantity must be larger than 0");
                    else setQuantity(temp);
                  }}
                ></input>
                <button onClick={incrementQuantity}>
                  <FontAwesomeIcon icon={faCirclePlus} className="h-5" />
                </button>
              </div>
              <button
                className="rounded bg-primary w-full py-2 mt-5"
                onClick={addToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="mx-auto w-2/6 mt-10">
            <h2 className="text-primary font-bold text-lg">Description</h2>
            <p>{cartItem.node.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

ItemPage.propTypes = {
  items: PropTypes.array,
  cart: PropTypes.array,
  setCart: PropTypes.func,
  cartNumber: PropTypes.number,
  setCartNumber: PropTypes.func,
};
