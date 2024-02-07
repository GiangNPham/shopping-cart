import logo from "../assets/image/hnbmg.png";
export default function Home() {
  return (
    <div className="grid grid-cols-2 bg-background pt-32">
      <img
        src={logo}
        alt="Logo"
        className="drop-shadow-xl rounded-md justify-self-center"
      />
      <div className="text-secondary">
        <h1 className="text-5xl font-bold ">
          We bring <i className="font-extrabold">fashion</i> to the world
        </h1>
        <p>
          Discover an unparalleled shopping experience with our extensive
          selection of products, unbeatable prices, and exceptional customer
          service. Shop now and transform your shopping journey with us.
        </p>
      </div>
    </div>
  );
}
