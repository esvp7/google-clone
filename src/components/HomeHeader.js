import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "./Avatar";
import "./Home.css";

const HomeHeader = () => {

	return (
		<div className="home__header">
		   <div className="home__headerLeft">
		   <Link to="/about">About</Link>
		   <Link to="/store">Store</Link>
		   </div>

		   <div className="home__headerRight">
		   <p><a href="https://www.gmail.com/">Gmail</a></p>
		   <p><a href="https://images.google.com/">Images</a></p>
		   <AppsIcon />
		   <Avatar />
		   </div>
		</div>
	);
}

export default HomeHeader;