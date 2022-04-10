import React from "react";
import { Link } from "react-router-dom";
import LoginWithGoogle from "../Hooks/LoginWithGoogle";
import "./Header.css";

const Header = () => {
  const { user , GoogleSignOut} = LoginWithGoogle();
  return (
    <div className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <div className="profile">
          <span>{user?.displayName}</span>
          {
              user?.uid ? <button onClick={GoogleSignOut}>LogOut</button> : <Link to='/'> Login</Link>
          }
        </div>
    </div>
  );
};

export default Header;
