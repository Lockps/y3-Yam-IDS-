import React from "react";
import { FaHome, FaQuestionCircle } from "react-icons/fa";

const Sidebar = () => {
  const bar = [{ name: "Dashboard", icon: <FaHome /> }];

  return (
    <div className="w-[20%] h-[screen]  flex justify-center items-center ">
      <div className="w-[90%] h-[96%] bg-darkbg p-4 rounded-xl flex flex-col items-center justify-between">
        <div className="">
          <h2 className="text-whites text-xl mb-[20%] mt-[2%]  flex justify-center">
            Badguy Detection
          </h2>
          {bar.map((element, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-whites mb-2 justify-center cursor-pointer"
            >
              {element.icon}
              <h1>{element.name}</h1>
            </div>
          ))}
        </div>
        <div className="w-[95%] h-[23%]  bg-[url('/Test.svg')] mb-[6%] rounded-xl ">
          <div className="absolude mt-[5%] ml-[80%] text-white w-5 pt-[1%] flex justify-center items-center">
            <FaQuestionCircle />
          </div>
          <div className="font-bold text-xl mt-[26%] flex justify-center">
            Need help?
          </div>
          <div className=" mt-[5%] flex justify-center">
            <div className="flex justify-center bg-mainbg w-[90%] mt-[3%] pt-[3%] pb-[3%] rounded-xl text-xs">
              DOCUMENTATION
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
