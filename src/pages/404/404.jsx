import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404, Page not found</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Error;
