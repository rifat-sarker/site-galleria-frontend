import axios from "axios";
import { Button } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const {signInUser} = useContext(AuthContext)
  
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

   

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);

        //get token
        const user = { email };
        axios
          .post("http://localhost:5000/user", user)
          .then((res) => {
            console.log(res.data);
            
          });
     
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <div className="flex justify-center items-center h-screen bg-gray-100">
          {" "}
          <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
            {" "}
            <h2 className="text-2xl font-bold text-center text-gray-700">
              Login
            </h2>{" "}
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                {" "}
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Email Address
                </label>{" "}
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />{" "}
              </div>{" "}
              <div className="mb-4">
                {" "}
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Password
                </label>{" "}
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />{" "}
              </div>{" "}
              <div className="">
                {" "}
                <Button
                  gradientDuoTone="purpleToBlue"
                  type="submit"
                  className=" text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                >
                  Login
                </Button>
                <p className="py-3">
                  Don't have an account?{" "}
                  <Link to={"/signup"} className="text-blue-500">
                    Create an Account
                  </Link>
                </p>
              </div>{" "}
            </form>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
