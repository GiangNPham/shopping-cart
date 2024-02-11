import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function FeatureItem({ featuredItem }) {
  return (
    <>
      {featuredItem.length === 0 ? (
        <div>
          <p className="text-3xl text-accent text-center pt-16 pb-44">
            Loading...
          </p>
        </div>
      ) : (
        <div>
          <h1 className="text-accent text-center font-semibold text-4xl my-12">
            Featured Items
          </h1>
          <div className="flex flex-row justify-between mx-56 pb-16">
            {featuredItem.map((item) => {
              return (
                // Link replace div
                <div
                  key={item.node.id}
                  className="w-60 rounded bg-primary drop-shadow-md pb-2"
                >
                  <Link
                    to={
                      "/store/" +
                      item.node.title.replace(/\s+/g, "-").toLowerCase()
                    }
                  >
                    <img
                      className="w-60 h-64 bg-black rounded-t"
                      src={item.node.featuredImage.url}
                      alt={item.node.title}
                    />
                    <p className="text-white text-sm font-bold h-10 mt-2 p-3">
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
        </div>
      )}
    </>
  );
}

FeatureItem.propTypes = {
  featuredItem: PropTypes.array,
};
