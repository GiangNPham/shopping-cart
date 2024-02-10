import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import logo from "../assets/image/hnbmg.png";
import FeatureItem from "../components/FeatureItem";

export default function Home({ featuredItem }) {
  return (
    <div className="bg-background">
      <div className="grid grid-cols-2 border-y-2 py-12 border-accent ">
        <img
          src={logo}
          alt="Logo"
          className="drop-shadow-xl rounded-md justify-self-center"
        />
        <div className="text-secondary flex flex-col justify-center mr-3">
          <h1 className="text-5xl font-bold text-accent">
            We bring <i className="font-extrabold">fashion</i> to <br />
            the world
          </h1>
          <p className="mt-4 mr-5">
            Discover an unparalleled shopping experience with our extensive
            selection of products, unbeatable prices, and exceptional customer
            service. Shop now and transform your shopping journey with us.
          </p>

          <Link to="/store" className="ml-auto mr-auto">
            <button className="bg-accent text-black rounded px-4 py-3 mt-4	font-semibold ">
              Shop now
            </button>
          </Link>
        </div>
      </div>
      <FeatureItem featuredItem={featuredItem} />
    </div>
  );
}

Home.propTypes = {
  featuredItem: PropTypes.array,
};
