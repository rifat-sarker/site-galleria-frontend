import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      {" "}
      <h1 className="text-3xl font-bold text-center my-4">
        Welcome To Job Portal Website!!
      </h1>{" "}
      <div className="flex gap-2 justify-center">
        {" "}
        <Link to="/login">
          {" "}
          <Button
            gradientDuoTone="purpleToBlue"
            className="border text-white px-4 py-2 my-2 rounded-md"
          >
            {" "}
            Login{" "}
          </Button>{" "}
        </Link>{" "}
        <Link to="/signup">
          {" "}
          <Button
            gradientDuoTone="purpleToPink"
            className="border px-4 py-2 my-2 rounded-md"
          >
            {" "}
            User Sign Up{" "}
          </Button>{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default Home;
