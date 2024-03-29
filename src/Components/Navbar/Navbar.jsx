import React from "react";
import menu_icon from "../../assets/menu.png";
import search_icon from "../../assets/search.png";
import logo from "../../assets/logo.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";
const Navbar = ({ setSidebar }) => {
  return (
    <>
      <div className="navbar bg-transparent flex h-14 justify-between items-center border-b-2 border-gray-400">
        <div className="NavLeft flex ml-5 items-center">
          <img
            src={menu_icon}
            onClick={() =>
              setSidebar((prev) => (prev === false ? true : false))
            }
            alt=""
            className=" size-6 ml-1 mr-5"
          />
          <Link to="/">
            <img src={logo} alt="" className=" ml-3 hidden lg:block md:block" />
          </Link>
        </div>

        <div className="searchbox flex  items-center border-2 border-gray-300 rounded-xl h-9 p-1 ">
          <div>
            <input
              type="text"
              name=""
              id="searchbox"
              className=" mr-1 h-7 p-4 bg-transparent outline-none w-[30vw]  
              
              "
              placeholder="Search"
            />
          </div>
          <div className="searchicon">
            <img src={search_icon} alt="" />
          </div>
        </div>

        <div className="NavRight flex items-center space-x-5 mr-8 ">
          <img
            src={upload_icon}
            alt=""
            className=" w-8 h-8 hidden md:hidden lg:inline-block"
          />
          <img
            src={more_icon}
            alt=""
            className=" w-8 h-8 hidden md:hidden lg:inline-block"
          />
          <img
            src={notification_icon}
            alt=""
            className=" w-8 h-8 hidden md:hidden lg:inline-block"
          />
          <img src={profile_icon} alt="" className=" w-9 h-9 rounded-full" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
