import { useState, useEffect, useRef } from "react";
import logout from "../../assets/logout.svg";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Fetch from "../../utils/Fetch";
import { ApiConfig } from "../../utils/config";
import { toast } from "react-toastify";
import Profile from "./ProfileTab";
import axios from "axios";
import AuthContext from "../../authContext";
import { useContext } from "react";

const ScrollToTopButton = ({ show }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-4 left-4 rounded-full ${
        show ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
      style={{}}
    >
      <img
        width="64"
        height="64"
        src="/src/assets/icons8-collapse-arrow-64(1).png"
        alt="collapse-arrow--v1"
      />
    </button>
  );
};

const NavBar = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [privilege, setPrivilege] = useState("");
  const [user, setUser] = useState({});
  const location = useLocation();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const privilege = localStorage.getItem("privilege");
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");

    if (!userId) {
      localStorage.clear();
      window.location.href = "/";
      navigate("/login");
    }

    if (!accessToken) {
      localStorage.clear();
      window.location.href = "/";
      navigate("/login");
    }

    axios
      .get(ApiConfig.users + "/" + userId + "/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setPrivilege(String(privilege));
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    const refresh = localStorage.getItem("refreshToken");
    const formData = new FormData();
    formData.append("refresh", refresh);
    const response = await Fetch.post(ApiConfig.logout, { refresh });
    if (response.status === 204) {
      localStorage.clear();
      window.location.href = "/";
      setAuth({ login: false, uid: "", uname: "" });
      toast.success("Logged Out Successfully");
    } else {
      localStorage.clear();
      toast.error("Error Logging Out");
    }
  };

  const dropdownRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row justify-between items-center w-full h-16 bg-white border border-gray font-poppins bg-[#f4f2ed]">
        <div className="flex flex-row justify-center items-center gap-x-64 ml-4 max-md:ml-2">
          <NavLink
            to="/"
            className="flex flex-row justify-center items-center text-3xl font-bold cursor-pointer"
          >
            Park<div className="text-[#8DBF41]">Vision</div>
          </NavLink>
          <div className="flex flex-row justify-center items-center font-bold gap-x-8">
            {privilege < 1 && (
              <NavLink
                to="/"
                className={`flex flex-row justify-center items-center font-thin cursor-pointer text-black hover:text-[#8DBF41] transition duration-300 ease-in-out ${
                  location.pathname == "/"
                    ? "text-[#8DBF41] bg-gray-200 p-2 rounded"
                    : ""
                }`}
              >
                Dashboard
              </NavLink>
            )}
            <NavLink
              to="/organizations"
              className={`flex flex-row justify-center items-center font-thin cursor-pointer text-black hover:text-[#8DBF41] transition duration-300 ease-in-out ${
                location.pathname == "/organizations"
                  ? "text-[#8DBF41] bg-gray-200 p-2 rounded"
                  : ""
              }`}
            >
              Organization
            </NavLink>
            <NavLink
              to="/verifier"
              className={`flex flex-row justify-center items-center font-thin cursor-pointer text-black hover:text-[#8DBF41] transition duration-300 ease-in-out ${
                location.pathname == "/verifier"
                  ? "text-[#8DBF41] bg-gray-200 p-2 rounded"
                  : ""
              }`}
            >
              Verifier
            </NavLink>
            <NavLink
              to="/cctv"
              className={`flex flex-row justify-center items-center font-thin cursor-pointer text-black hover:text-[#8DBF41] transition duration-300 ease-in-out ${
                location.pathname == "/cctv"
                  ? "text-[#8DBF41] bg-gray-200 p-2 rounded"
                  : ""
              }`}
            >
              CCTVs
            </NavLink>
            <NavLink
              to="/parkings"
              className={`flex flex-row justify-center items-center font-thin cursor-pointer text-black hover:text-[#8DBF41] transition duration-300 ease-in-out ${
                location.pathname == "/parkings"
                  ? "text-[#8DBF41] bg-gray-200 p-2 rounded"
                  : ""
              }`}
            >
              Parking Lots
            </NavLink>
            <NavLink
              to="/gates"
              className={`flex flex-row justify-center items-center font-thin cursor-pointer text-black hover:text-[#8DBF41] transition duration-300 ease-in-out ${
                location.pathname == "/gates"
                  ? "text-[#8DBF41] bg-gray-200 p-2 rounded"
                  : ""
              }`}
            >
              Gates
            </NavLink>
            {/* {privilege < 1 && (
              <NavLink
                to="/billing"
                className={`flex flex-row justify-center items-center font-thin cursor-pointer text-black hover:text-[#8DBF41] transition duration-300 ease-in-out ${
                  location.pathname == "/billing"
                    ? "text-[#8DBF41] bg-gray-200 p-2 rounded"
                    : ""
                }`}
              >
                Billing
              </NavLink>
            )} */}
            {privilege < 1 && (
              <NavLink
                to="/customer-segmentation"
                className={`flex flex-row justify-center items-center font-thin cursor-pointer text-black hover:text-[#8DBF41] transition duration-300 ease-in-out ${
                  location.pathname == "/customer-segmentation"
                    ? "text-[#8DBF41] bg-gray-200 p-2 rounded"
                    : ""
                }`}
              >
                Customer Segmentation
              </NavLink>
            )}
          </div>
        </div>
        {/* <div
          className="flex flex-row justify-center items-center gap-x-4 mr-2 cursor-pointer"
          onClick={() => {
            handleLogout();
          }}
        >
          <img src={logout} alt="Logout" className="w-8 h-8" />
        </div> */}
        <div className="flex justify-center items-center gap-x-2 mr-4 border border-gray">
          <Profile
            id="profile"
            dropdownRef={dropdownRef}
            user={user}
            toggleVisibility={toggleVisibility}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            handleLogout={handleLogout}
            navigate={navigate}
          />
          {/* <button onClick={handleLogout} className='px-3 py-2 rounded bg-primary text-white hover:bg-opacity-80'>LOGOUT</button> */}
          <div className="pl-4 max-lg:block hidden" id="menutoggle">
            <button onClick={toggleMenu}>
              <i className="fa-solid fa-bars text-black text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-full h-full">
        <Outlet />
      </div>
      <ScrollToTopButton show={showScrollButton} />
    </div>
  );
};

export default NavBar;
