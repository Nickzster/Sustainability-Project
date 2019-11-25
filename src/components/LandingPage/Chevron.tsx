import React from "react";

const Chevron: React.FunctionComponent = () => {
  return (
    <div>
      <img
        className="chevron"
        style={{ color: "#fff" }}
        src={require("../../images/chevron.svg")}
        alt="chev"
      />
    </div>
  );
};

export default Chevron;
