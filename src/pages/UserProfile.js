import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const users = useOutletContext();
  const params = useParams();
  const userId = params.id;

  const user = users.find(user => user.id === parseInt(userId));

  if(!user){
    return <h1>Loading...</h1>
  };

  return(  
      <aside>
        <h1>{user.name}</h1>
      </aside>
  );
};

export default UserProfile;