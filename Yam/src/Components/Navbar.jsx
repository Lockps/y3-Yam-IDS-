import React from "react";
import "../index.css";

const Navbar = ({ close }) => {
  return (
    <div className="min-h-full w-full z-10 rounded-xl bg-gradient-to-br from-darkbg to-lightbg ">
      <button onClick={close}>asdasd</button>{" "}
    </div>
  );
};

export default Navbar;
