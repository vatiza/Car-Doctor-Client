import { useEffect, useState } from "react";
import ServicesCards from "./ServicesCards";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-5 mb-5">
      <div className="text-center">
        <h3 className="text-xl font-bold text-warning">Service</h3>
        <h1 className="text-2xl font-bold">Our Service Area</h1>
        <p className="">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServicesCards key={service._id} service={service}></ServicesCards>
          ))}
        </div>
        <button className="btn btn-outline btn-warning  mt-6 syc">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Services;
