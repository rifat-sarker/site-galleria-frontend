import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const UserSignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleUserSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // const user = { email, password };
    // console.log(user);

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        //user added to the database
        const createdAt = result.user.metadata.creationTime;
        const user = { email, createdAt };
        axios
          .post("http://localhost:5000/user", user)
          .then((data) => {
            if (data.data.insertedId) {
              console.log("data added to the database");
            }
          });
        Swal.fire({
          title: "Success!",
          text: "Account created successfully",
          icon: "success",
          confirmButtonText: "ok",
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        {" "}
        <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
          {" "}
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Register
          </h2>{" "}
          <form onSubmit={handleUserSignUp}>
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
                gradientDuoTone="purpleToPink"
                type="submit"
                className="text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                {" "}
                Register{" "}
              </Button>{" "}
              <p className="py-3">
                Already have an account?{" "}
                <Link to={"/login"} className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default UserSignUp;
