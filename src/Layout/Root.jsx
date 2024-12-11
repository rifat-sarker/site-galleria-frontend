import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-Inter">
      <Outlet />
    </div>
  );
};

export default Root;
