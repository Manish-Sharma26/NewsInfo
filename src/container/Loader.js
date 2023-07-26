import React from "react";
import loader from "./loader2.gif";

const Loader = () => {
  return (
    <div className="text-center">
      <img src={loader} alt="loading" />
    </div>
  );
};

export default Loader;
