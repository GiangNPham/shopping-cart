import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Store({ items }) {
  return (
    <div className="flex flex-wrap justify-center gap-12 px-16 py-16 bg-black">
      {items.map((item) => {
        return (
          // Link replace div
          <div
            key={item.node.id}
            className="w-64 rounded bg-primary  drop-shadow-md pb-2"
          >
            <Link
              to={
                "/store/" + item.node.title.replace(/\s+/g, "-").toLowerCase()
              }
            >
              <img
                className="w-64 h-72 bg-black rounded-t"
                src={item.node.featuredImage.url}
                alt={item.node.title}
              />
              <p className="text-white text-sm font-bold h-16 mt-2 p-3">
                {item.node.title}
              </p>
              <p className="text-center text-secondary">
                ${item.node.variants.edges[0].node.price.amount}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

Store.propTypes = {
  items: PropTypes.array,
};
