export default function Store({ items }) {
  return (
    <div className="flex flex-wrap justify-center gap-12 px-8 py-16 bg-black">
      {items.map((item) => {
        return (
          // Link replace div
          <div
            key={item.id}
            className="w-48 rounded bg-primary  drop-shadow-md pb-2"
          >
            <img
              className="w-48 h-52 bg-black rounded-t"
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
  );
}
