import React from "react";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response"
import Search from "./Search";
import noTerm from "./noTerm.png";
import "./SearchPage.css";
import SearchPageHeader from "./SearchPageHeader";

const SearchPage = () => {
	const [{term}, dispatch] = useStateValue();
	const { data } = useGoogleSearch(term);
     
	console.log(data);
	return (
		<div className="searchPage">
		<SearchPageHeader />
	  {term && (
		<div className="searchPage__results">
		   <p className="searchPage__resultCount">
		      About {data?.searchInformation?.totalResults} results 
		      	({data?.searchInformation?.searchTime} seconds)
		      	for {term}
		   </p>
		{data?.items?.map(item => (
			   <div className="searchPage__result">
			     <a href={item?.link}>
			       {item.pagemap?.cse_image?.length > 0 && 
			       	item.pagemap?.cse_image
			       	[0]?.src && (
			        	<img className="searchPage__resultImage"
			        	src={item.pagemap?.
			        		cse_image?.length
			        		> 0 && 
			        		item.pagemap?.
			        		cse_image[0]?.src}
			        	alt=""
			           />
			          )}
			       {item?.displayLink} ▿ 
			     </a>

			     <a className="searchPage__resultsTitle"
			        href={item?.link}>
			        <h2>{item?.title}</h2>
			     </a> 
			     <p className="searchPage__resultSnippet">
			         {item?.snippet}
			     </p>
			   </div>
			))}

		  </div>
		 )};

	  {!term && (
	  	<img className="searchPage__nullImage" src={noTerm} alt="empty-search" />
	  	)}


	</div>
	);
}

export default SearchPage;