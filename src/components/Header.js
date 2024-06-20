import React from "react";
import './Header.css';
import logo from '../images/netflix_logo.svg';
import user from '../images/Netflix-avatar-3.png';
import { Avatar } from "@mui/material";

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src={logo} alt="Logo Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <Avatar src={user} variant="rounded" alt="User">
          </Avatar>
        </a>
      </div>
    </header>
  )
}