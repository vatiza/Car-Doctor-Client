import { BiPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const MiddleFooter = () => {
  return (
    <div className="rounded-lg w-full h-[250px] bg-black">
      <div className="flex text-white gap-9 justify-center">
        <div className="mt-28">
          <SlCalender />
          <p>We are open monday-friday</p>
          <h3 className="font-bold text-xl ">7:00 am - 9:00 pm</h3>
        </div>
        <div className="mt-28">
          <BiPhoneCall />
          <p>We are open monday-friday</p>
          <h3 className="font-bold text-xl ">7:00 am - 9:00 pm</h3>
        </div>
        <div className="mt-28">
          <FaLocationDot />
          <p>We are open monday-friday</p>
          <h3 className="font-bold text-xl ">7:00 am - 9:00 pm</h3>
        </div>
      </div>
    </div>
  );
};

export default MiddleFooter;
