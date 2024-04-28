import person from "../../../../assets/images/about_us/person.jpg";
import parts from "../../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />
        </div>
        <div className="lg:w-1/2">
          <p className="font-bold text-xl text-warning">About Us</p>
          <h1 className="text-5xl w-[376px] font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 w-[489px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which  look even slightly
            believable.
          </p>
          <p className=" w-[489px]">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which  look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-warning mt-3">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
