import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import UserSignUp from "../pages/UserSignUp";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <UserSignUp/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);

export default router;
