import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../page/AuthContext';


function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  
  const { logout } = useAuth();

  const handleLogout = () => {
    // Appelez la fonction logout lorsque l'utilisateur souhaite se déconnecter
    logout();
  };

  return (
    <>
      <div className="sidenav">
        <img
          className="sidenav__logo"
          src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
          alt="Instagram Logo"
        />

        <div id="sidenav__buttons">
          <Link to="/">
            <button className="sidenav__button">
              <HomeIcon />
              <span>Home</span>
            </button>
          </Link>
          <button className="sidenav__button">
            <SearchIcon />
            <span>Search</span>
          </button>
          <button className="sidenav__button">
            <ExploreIcon />
            <span>Explore</span>
          </button>
          <button className="sidenav__button">
            <SlideshowIcon />
            <span>Reels</span>
          </button>
          <button className="sidenav__button">
            <ChatIcon />
            <span>Messages</span>
          </button>
          <button className="sidenav__button">
            <FavoriteBorderIcon />
            <span>Notifications</span>
          </button>
          <Link to="/create-post">
            <button className="sidenav__button">
              <AddCircleOutlineIcon />
              <span>Create</span>
            </button>
          </Link>
          <Link to="/profile">
          <button className="sidenav__button">
            <Avatar>
              {user.username ? user.username.charAt(0).toUpperCase() : "A"}
            </Avatar>
            <div>
              {user.username}{" "}
              <button onClick={handleLogout} className="logout__button">
                Logout
              </button>
            </div>
          </button>
          </Link>
        </div>
        <div className="sidenav__more">
          <button className="sidenav__button">
            <MenuIcon />
            <span className="sidenav__buttonText">More</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
