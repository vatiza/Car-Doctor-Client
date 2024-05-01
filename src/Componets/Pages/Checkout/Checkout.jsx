import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProviders";

const Checkout = () => {
  const services = useLoaderData();
  const { user } = useContext(AuthContext);

  const { title, _id, price, img } = services;

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const msg = form.msg.value;
    const date = form.date.value;
    const orders = {
      customerFname: fname,
      customerLname: lname,
      phone,
      email,
      img,
      msg,
      services: title,
      serviceId: _id,
      price,
      date,
    };
  
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Your Order is Pending",
          icon: "success",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <div>
      <h1>Book Services:{title}</h1>
      <form onSubmit={handleOrder} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <input
              name="fname"
              type="text"
              placeholder="First Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              name="lname"
              type="text"
              placeholder="Last Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              name="phone"
              type="tel"
              placeholder="Your Phone"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <textarea
          name="msg"
          className="textarea textarea-bordered h-20"
          placeholder="Your Message"
        ></textarea>
        <div className="form-control">
          <input
            name="date"
            type="date"
            placeholder="Your Date"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-block btn-warning"
            type="submit"
            value="Order Confrim"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
