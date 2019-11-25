import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FunctionComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      <h1 style={{ padding: "1em" }}>Resource Not Found</h1>
      <p style={{ paddingBottom: "0.5em" }}>
        The resource you specified cannot be found.
      </p>
      <Link to="/">Click here to go back home.</Link>
    </div>
  );
};

export default NotFound;
