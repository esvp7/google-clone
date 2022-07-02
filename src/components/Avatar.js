import React, { useState, useRef } from "react";
import { useScript } from "../useScript";
import jwt_decode from "jwt-decode";
import "./Home.css";

const Avatar = () => {
  const googlebuttonref = useRef();
  const [user, setuser] = useState(false);

	const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_decode(userCred);
    console.log(payload);
    setuser(payload);
  };

	 useScript("https://accounts.google.com/gsi/client", () => {
     window.google.accounts.id.initialize({
      client_id: "158734916124-leoo65dfnk735cfmd9kalaiidua54670.apps.googleusercontent.com",
      callback: onGoogleSignIn,
      auto_select: false,
    });

     window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "medium",
    });
  });

	return (
		<div>
		{!user && <div ref={googlebuttonref}></div>}
		   {user && (
           <div>
           <div
           onClick={() => {
              setuser(false);
           }}>
           <img src={user.picture} 
               alt="profile" 
               className="avatar"/>
           </div>
        
        </div>
      )}
		</div>
	);
}

export default Avatar;