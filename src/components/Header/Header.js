import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="nav">
      <h1> Movie Library</h1>
      <div className="routeDivs">
        <Link style={linkStyle} to="/">
          Search  {" | "} 
        </Link>
        
        <Link style={linkStyle} to="/library">
          Library
        </Link>
      </div>
    </nav>
  );
}
const linkStyle = {
  textDecoration: "none",
  color: "#fff"
};
