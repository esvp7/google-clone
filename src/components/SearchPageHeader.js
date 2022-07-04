import React from "react";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "./Avatar";
import Search from "./Search";

const SearchPageHeader = () => {
	return (
		<div className="searchPage__header">
		  <Link to="/">
		   <img 
		      className="searchPage__logo"
		      src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-png-transparent-background-large-new.png" 
		      alt="google-logo"/>
		  </Link>

		  <div className="searchPage__headerBody"> 
		      <Search hideButtons />

		      <div className="searchPage__options">
		      <div className="searchPage__optionsLeft">
		      <div className="searchPage__option">
		       <SearchIcon fontSize="small"/>
		       <Link to="/search">All</Link>
		    </div>
		    <div className="searchPage__option">
		       <DescriptionIcon fontSize="small"/>
		       <Link to="/news">News</Link>
		    </div>
		    <div className="searchPage__option">
		       <ImageIcon fontSize="small"/>
		       <Link to="/images">Images</Link>
		    </div>
		    <div className="searchPage__option">
		       <LocalOfferIcon fontSize="small"/>
		       <Link to="/shopping">Shopping</Link>
		    </div>
		    <div className="searchPage__option">
		       <RoomIcon fontSize="small"/>
		       <Link to="/maps">Maps</Link>
		    </div>
		    <div className="searchPage__option">
		       <MoreVertIcon fontSize="small"/>
		       <Link to="/more">More</Link>
		    </div>
		  </div>

		      <div className="searchPage__optionsRight">
		        <div className="searchPage__option">
		           <Link to="/settings">Settings</Link>
		        </div>
		        <div className="searchPage__option">
		           <Link to="/tools">Tools</Link>
		        </div>
		        <div className="searchPage__option">
		           <Avatar className="searchPage__avatar"/>
		        </div>

		      </div>

		      </div>
		  </div>

		</div>
	);
}

export default SearchPageHeader;