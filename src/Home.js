import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>this is homepage</h2>
      <Link to="/about">about</Link>
    </div>
  );
};

export default Home;
