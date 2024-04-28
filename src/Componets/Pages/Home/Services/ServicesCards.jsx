import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesCards = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex">
          <p className="text-warning font-bold text-start">Price: {price}</p>
          <Link className="text-warning" to="/">
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
