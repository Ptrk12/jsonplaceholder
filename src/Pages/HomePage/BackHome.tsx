import React from "react";
import { Link } from "react-router-dom";

const BackHome = () => {
  return (
    <div>
      <button>
        <Link to={"/"}>HOME</Link>
      </button>
    </div>
  );
};

export default BackHome;
