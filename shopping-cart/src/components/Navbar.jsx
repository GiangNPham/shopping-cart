import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import PropTypes from "prop-types";

export default function Navbar({ setOpenCart, cartNumber }) {
  const openCart = function () {
    setOpenCart(true);
  };

  return (
    <nav className="bg-background flex justify-between border-b-2 border-accent	">
      <Link to="/" className="text-primary font-bold text-4xl pl-20 py-5">
        HNBMG
      </Link>
      <ul className="text-primary flex text-xl pt-7 pr-20">
        <li>
          <Link to="/" className="mr-8">
            Home
          </Link>
        </li>
        <li>
          <Link to="/store" className="mr-8">
            Store
          </Link>
        </li>
        <li>
          <button
            className="relative transition duration-150 ease-in-out active:scale-95"
            onClick={openCart}
            aria-label="cart"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="absolute right-[-10px] top-[-5px] flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-red-600 p-0.5 text-xs text-white">
              {cartNumber < 100 ? cartNumber : 99 + "+"}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
  setOpenCart: PropTypes.func,
  cartNumber: PropTypes.number,
  setCartNumber: PropTypes.func,
};
