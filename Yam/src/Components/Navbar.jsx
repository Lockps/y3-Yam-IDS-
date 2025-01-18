import React, { useState } from "react";
import "../index.css";
import "./Navbar.css";
import Navbutton from "./Navbutton";
import { TiHome } from "react-icons/ti";
import { data } from "autoprefixer";

const Navbar = () => {
  const data = [
    { icon: <TiHome />, text: "Home" },
    { icon: <TiHome />, text: "Home" },
    { icon: <TiHome />, text: "Home" },
    { icon: <TiHome />, text: "Home" },
    { icon: <TiHome />, text: "Home" },
    { icon: <TiHome />, text: "Home" },
  ];

  const [focus, setFocus] = useState(0);

  return (
    <div className="h-full w-full z-10 rounded-xl bg-gradient-to-br from-darkbg to-lightbg ">
      <div className=" h-[10%] w-full flex flex-col items-center pt-[25%]">
        <h1 className="bg-tran mb-[5%] text-whites ">Yam</h1>
        <div className="Nav-line">HI Hacker</div>
      </div>
      <div className="w-full bg-tran h-[50%] mt-[15%]">
        <div className="w-full h-full grid grid-rows-6 gap-1">
          {data.map((element, index) => {
            return (
              <div
                key={index}
                className={`${
                  focus === index
                    ? "w-full h-full text-whites flex justify-center items-center"
                    : "w-full h-full text-whites flex justify-center items-center"
                }`}
                onClick={() => {
                  setFocus(index);
                  console.log(index);
                }}
              >
                <Navbutton
                  icon={element.icon}
                  text={element.text}
                  isfocus={`${focus === index}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
