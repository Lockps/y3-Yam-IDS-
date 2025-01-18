import React from "react";

const Navbutton = ({ icon, text, isfocus }) => {
  return (
    <div className="w-[90%] h-[90%] bg-mainbg flex items-center ">
      <div className=" bg-iconbg w-[12%] h-[45%] rounded-md  ml-[10%] text-whites flex justify-center items-center">
        {icon}
      </div>
      <div className="ml-[6%]">{isfocus}</div>
    </div>
  );
};

export default Navbutton;
