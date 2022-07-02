import React from "react";
import Search from "./Search";
import HomeHeader from "./HomeHeader";
import "./Home.css";

const Home = () => {

	return (
		<div className="home">

		<HomeHeader />

		<div className="home__body">
		   <img src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-png-transparent-background-large-new.png" alt="google-logo"/>
		   <div className="home__inputContainer">
		   <Search />
		   </div>
		</div>

		</div>
	);
}

export default Home;