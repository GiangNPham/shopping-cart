import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="bg-background flex justify-between drop-shadow	">
      <Link to="/" className="text-primary font-bold text-4xl pl-20 py-5">
        HNBMG
      </Link>
      <ul className="text-text flex text-xl pt-7 pr-20">
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
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
