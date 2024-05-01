import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import loginimg from "../../../assets/images/login/login.svg";
const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const { signIn, setUser, auth, googlePovider, githubProvider } =
    useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginValue = { email, password };
    console.log(loginValue);
    signIn(email, password)
      .then((result) => {
        const loggeduser = result.user;
        console.log(loggeduser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  const handleGoogleSign = () => {
    signInWithPopup(auth, googlePovider)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        setUser(loginUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleGithubSign = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        setUser(loginUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" mr-12 w-1/2">
            <img src={loginimg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="text-center">
              <p className="mb-2">Or Sign in With</p>
              <button
                onClick={handleGoogleSign}
                className="me-4 btn btn-circle hover:text-green-500"
              >
                <FaGoogle />
              </button>
              <button
                onClick={handleGithubSign}
                className="me-4 btn btn-circle hover:text-green-500"
              >
                <FaGithub />
              </button>
              <button className="me-4 btn btn-circle  hover:text-green-500">
                <FaLinkedin />
              </button>
            </div>
            <p className="my-4 text-center">
              New to Car Doctors{" "}
              <Link className="text-warning font-bold" to="/signup">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
