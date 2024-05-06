import { useEffect, useRef, useState } from "react";
import ServicesCards from "./ServicesCards";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/services?search=${search}&sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc, search]);

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
        <div className="form-control">
          <div className="input-group">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <button
          onClick={() => setAsc(!asc)}
          className="btn btn-outline btn-warning"
        >
          {asc ? "Price High to Low" : "Price Low to High"}
        </button>
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
