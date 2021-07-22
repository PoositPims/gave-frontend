import React from "react";
import "./Homepage.css"
import {Link} from "react-router-dom";

function Homepage() {
  return <div>
      <h1>Homepage</h1>
      <button><Link to="/login">login</Link></button>
      
  </div>;
}

export default Homepage;
