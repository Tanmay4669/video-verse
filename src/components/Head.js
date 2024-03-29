import React from "react";
import { LOGO, DEFAULT_USER_ICON, HAMBURGER_ICON } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 my-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="menu"
          src={HAMBURGER_ICON}
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img className="h-8 mx-2" alt="youtube-logo" src={LOGO} />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src={DEFAULT_USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
