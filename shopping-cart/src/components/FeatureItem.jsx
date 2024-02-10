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
          <h1 className="text-accent text-center font-semibold text-4xl mt-4 mb-8">
            Featured Items
          </h1>
          <div className="flex flex-row justify-between mx-56 pb-10">
            {featuredItem.map((item) => {
              return (
                // Link replace div
                <div
                  key={item.id}
                  className="w-48 rounded bg-primary drop-shadow-md pb-2"
                >
                  <img
                    className="w-52 h-52 bg-black rounded-t"
                    src={item.images[0]}
                    alt={item.name}
                  />
                  <p className="text-white text-sm font-bold h-16 mt-2 p-3">
                    {item.title}
                  </p>
                  <p className="text-center text-secondary">${item.price}</p>
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
