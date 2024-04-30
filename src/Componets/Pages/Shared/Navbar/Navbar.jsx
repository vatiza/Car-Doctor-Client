import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.svg";
import { SlHandbag } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const hanleLogout = () => {
    logout()
      .then(() => {})
      .then((error) => console.log(error));
  };
  const navbar = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        {" "}
        <Link to="/">Services</Link>
      </li>
      <li>
        {" "}
        <Link to="/">Blog</Link>
      </li>
      <li>
        {" "}
        <Link to="/">Contact</Link>
      </li>{" "}
      {user?.email ? (
        <>
          <li>
            <Link to="/bookings">My Bookings</Link>
          </li>
          <li>
            <button onClick={hanleLogout}>Logout</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbar}
          </ul>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbar}</ul>
      </div>
      <div className="navbar-end">
        <button className="me-4">
          <SlHandbag></SlHandbag>
        </button>
        <button className="me-4">
          <IoSearchOutline />
        </button>
        <button className="btn btn-outline btn-warning">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
