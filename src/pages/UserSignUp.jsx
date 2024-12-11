import { Link } from "react-router-dom";

const UserSignUp = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        {" "}
        <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
          {" "}
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Register
          </h2>{" "}
          <form>
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
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                {" "}
                Register{" "}
              </button>{" "}
              <p className="py-3">Already have an account? <Link to={'/login'} className="text-blue-500">Login</Link></p>
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default UserSignUp;
