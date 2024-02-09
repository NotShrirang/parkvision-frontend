import logout from "../../assets/logout.svg";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row justify-between items-center w-full h-16 bg-white border border-gray font-inter bg-[#f4f2ed]">
        <div className="flex flex-row justify-center items-center gap-x-64 ml-4 max-md:ml-2">
          <NavLink
            to="/"
            className="flex flex-row justify-center items-center text-3xl font-bold cursor-pointer"
          >
            Park<div className="text-[#8DBF41]">Vision</div>
          </NavLink>
          <div className="flex flex-row justify-center items-center font-bold gap-x-8">
            <NavLink
              to="/"
              className={`flex flex-row justify-center items-center font-thin cursor-pointer text-black hover:text-[#8DBF41] transition duration-300 ease-in-out ${
                window.location.pathname == "/" ? "text-[#8DBF41]" : ""
              }`}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/organizations"
              className={`flex flex-row justify-center items-center font-thin cursor-pointer text-black hover:text-[#8DBF41] transition duration-300 ease-in-out ${
                window.location.pathname == "/organizations"
                  ? "text-[#8DBF41]"
                  : ""
              }`}
            >
              Organizations
            </NavLink>
            <NavLink
              to="/cctv"
              className={`flex flex-row justify-center items-center font-thin cursor-pointer text-black hover:text-[#8DBF41] transition duration-300 ease-in-out ${
                window.location.pathname == "/cctv" ? "text-[#8DBF41]" : ""
              }`}
            >
              CCTVs
            </NavLink>
            <NavLink
              to="/parkings"
              className={`flex flex-row justify-center items-center font-thin cursor-pointer text-black hover:text-[#8DBF41] transition duration-300 ease-in-out ${
                window.location.pathname == "/parkings" ? "text-[#8DBF41]" : ""
              }`}
            >
              {console.log(window.location.pathname == "/parkings")}
              Parking Lots
            </NavLink>
            <NavLink
              to="/feed"
              className={`flex flex-row justify-center items-center font-thin cursor-pointer text-black hover:text-[#8DBF41] transition duration-300 ease-in-out ${
                window.location.pathname == "/feed" ? "text-[#8DBF41]" : ""
              }`}
            >
              Real Time Feed
            </NavLink>
            <NavLink
              to="/billing"
              className={`flex flex-row justify-center items-center font-thin cursor-pointer text-black hover:text-[#8DBF41] transition duration-300 ease-in-out ${
                window.location.pathname == "/billing" ? "text-[#8DBF41]" : ""
              }`}
            >
              Billing
            </NavLink>
            <NavLink
              to="/customer-segmentation"
              className={`flex flex-row justify-center items-center font-thin cursor-pointer text-black hover:text-[#8DBF41] transition duration-300 ease-in-out ${
                window.location.pathname == "/customer-segmentation"
                  ? "text-[#8DBF41]"
                  : ""
              }`}
            >
              Customer Segmentation
            </NavLink>
          </div>
        </div>
        <div
          className="flex flex-row justify-center items-center gap-x-4 mr-2 cursor-pointer"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          <img src={logout} alt="Logout" className="w-8 h-8" />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
