import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const services = useLoaderData();
  const { title, _id, price } = services;
  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const msg = form.msg.value;
    const order = {
      customerFname: fname,
      customerLname: lname,
      phone,
      email,
      msg,
      service: _id,
      price,
    };
    console.log(order);
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
