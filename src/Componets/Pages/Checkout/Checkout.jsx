import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const services=useLoaderData();
    const {title,}=services;
  return (
 
    <div>
      <h1>Book Services:{title}</h1>
    </div>
  );
};

export default Checkout;
