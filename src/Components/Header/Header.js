import { signOut } from "firebase/auth";
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
          <img src={user?.photoURL && user.photoURL}  alt="no loaded photos" />
          {
              user?.uid ? <button onClick={GoogleSignOut}>SignOut</button> : <Link to='/'> Login</Link>
            }
        </div>
    </div>
  );
};

export default Header;
