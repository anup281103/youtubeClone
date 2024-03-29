import React from "react";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div
      className={`sidebar lg:w-[10vw] md:w-[20vw] hidden md:block lg:block  ${
        sidebar
          ? "ml-3 flex flex-col space-y-2 "
          : "  ml-3 space-y-2 w-[4.5vw] "
      } `}
    >
      <div className="sortcut-links flex flex-col space-y-5 mt-3 pr-2 ">
        <div
          className={`side-link flex items-center ${
            category === 0
              ? " scale-105 font-semibold text-red-600 duration-100 ease-in"
              : ""
          } `}
          onClick={() => setCategory(0)}
        >
          <img
            src={home}
            alt=""
            className={`w-7 mr-4 ml-2 ${
              category === 0 ? " border-b-4 border-red-600  " : ""
            }`}
          />
          <p className={`${sidebar ? " inline-block" : "hidden"}`}>Home</p>
        </div>

        <div
          className={`side-link flex items-center ${
            category === 20
              ? " scale-105 font-semibold text-red-600 duration-100 ease-in"
              : ""
          } `}
          onClick={() => setCategory(20)}
        >
          <img
            src={game_icon}
            alt=""
            className={`w-7 mr-4 ml-2 ${
              category === 20 ? " border-b-4 border-red-600 " : ""
            }`}
          />
          <p className={`${sidebar ? " inline-block" : "hidden"}`}>Gaming</p>
        </div>

        <div
          className={`side-link flex items-center ${
            category === 2
              ? " scale-105 font-semibold text-red-600 duration-100 ease-in"
              : ""
          } `}
          onClick={() => setCategory(2)}
        >
          <img
            src={automobiles}
            alt=""
            className={`w-7 mr-4 ml-2 ${
              category === 2 ? " border-b-4 border-red-600 " : ""
            }`}
          />
          <p className={`${sidebar ? " inline-block" : "hidden"}`}>
            Automobiles
          </p>
        </div>

        <div
          className={`side-link flex items-center ${
            category === 17
              ? " scale-105 font-semibold text-red-600 duration-100 ease-in"
              : ""
          } `}
          onClick={() => setCategory(17)}
        >
          <img
            src={sports}
            alt=""
            className={`w-7 mr-4 ml-2 ${
              category === 17 ? " border-b-4 border-red-600 " : ""
            }`}
          />
          <p className={`${sidebar ? " inline-block" : "hidden"}`}>Sports</p>
        </div>

        <div
          className={`side-link flex items-center ${
            category === 24
              ? " scale-105 font-semibold text-red-600 duration-100 ease-in"
              : ""
          } `}
          onClick={() => setCategory(24)}
        >
          <img
            src={entertainment}
            alt=""
            className={`w-7 mr-4 ml-2 ${
              category === 24 ? " border-b-4 border-red-600 " : ""
            }`}
          />
          <p className={`${sidebar ? " inline-block" : "hidden"}`}>
            Entertainment
          </p>
        </div>

        <div
          className={`side-link flex items-center ${
            category === 28
              ? " scale-105 font-semibold text-red-600 duration-100 ease-in"
              : ""
          } `}
          onClick={() => setCategory(28)}
        >
          <img
            src={tech}
            alt=""
            className={`w-7 mr-4 ml-2 ${
              category === 28 ? " border-b-4 border-red-600 " : ""
            }`}
          />
          <p className={`${sidebar ? " inline-block" : "hidden"}`}>
            Technology
          </p>
        </div>

        <div
          className={`side-link flex items-center ${
            category === 10
              ? " scale-105 font-semibold text-red-600 duration-100 ease-in"
              : ""
          } `}
          onClick={() => setCategory(10)}
        >
          <img
            src={music}
            alt=""
            className={`w-7 mr-4 ml-2 ${
              category === 10 ? " border-b-4 border-red-600 " : ""
            }`}
          />
          <p className={`${sidebar ? " inline-block" : "hidden"}`}>Music</p>
        </div>

        <div
          className={`side-link flex items-center ${
            category === 25
              ? " scale-105 font-semibold text-red-600 duration-100 ease-in"
              : ""
          } `}
          onClick={() => setCategory(25)}
        >
          <img
            src={news}
            alt=""
            className={`w-7 mr-4 ml-2 ${
              category === 25 ? " border-b-4 border-red-600  " : ""
            }`}
          />
          <p className={`${sidebar ? " inline-block" : "hidden"}`}>News</p>
        </div>
      </div>

      <div className="subscribed-list m-1 p-1">
        <h2>
          <hr />
          <b className={`${sidebar ? " inline-block" : "hidden"}`}>
            Subscribed
          </b>
        </h2>
      </div>

      <div className="sub-side-bar flex items-center ">
        <img src={jack} alt="" className=" rounded-full w-10 ml-2 mr-3" />
        <p className={`${sidebar ? " inline-block" : "hidden"}`}>jack</p>
      </div>

      <div className="sub-side-bar flex ">
        <img src={simon} alt="" className=" rounded-full w-10 ml-2 mr-3" />
        <p className={`${sidebar ? " inline-block" : "hidden"}`}>simon</p>
      </div>

      <div className="sub-side-bar flex ">
        <img src={cameron} alt="" className=" rounded-full w-10 ml-2 mr-3" />
        <p className={`${sidebar ? " inline-block" : "hidden"}`}>cameron</p>
      </div>

      <div className="sub-side-bar flex ">
        <img src={tom} alt="" className=" rounded-full w-10 ml-2 mr-3" />
        <p className={`${sidebar ? " inline-block" : "hidden"}`}>tom</p>
      </div>
      <div className="sub-side-bar flex ">
        <img src={megan} alt="" className=" rounded-full w-10 ml-2 mr-3" />
        <p className={`${sidebar ? " inline-block" : "hidden"}`}>megan</p>
      </div>
    </div>
  );
};

export default Sidebar;
