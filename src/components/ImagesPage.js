import React from "react";
import { useStateValue } from "../StateProvider";
import "./ImagesPage.css";
import Response from "../response";
import SearchPageHeader from "./SearchPageHeader";
import useGoogleSearch from "../useGoogleSearch";
import noTerm from "./noTerm.png";

const ImagesPage = () => {
  const [{term}, dispatch] = useStateValue();
	const { data } = useGoogleSearch(term);

	return (
		   <div className="imagesPage">
       <SearchPageHeader className="imagePage__header"/>
         {term && (
          <div className="imagesPage__Results">
          {data?.items?.map(item => (
             <a href={item?.link}>
             {item.pagemap?.cse_image?.length > 0 && 
              item.pagemap?.cse_image
              [0]?.src && (
                <img className="imagesPage__resultImage"
                src={item.pagemap?.
                  cse_image?.length
                  > 0 && 
                  item.pagemap?.
                  cse_image[0]?.src}
                alt=""
                 />
                )}
               </a>
           ))}
          </div>
          )}

         {!term && (
        <img className="searchPage__nullImage" src={noTerm} alt="empty-search" />
      )}
        </div>
      );
}

export default ImagesPage; 