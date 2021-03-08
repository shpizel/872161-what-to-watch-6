import React from "react";

import Logo from "../logo";
import UserInfo from "../user-info";


const MovieCardHeader = () => {
  return (
    <header className="page-header movie-card__head">
      <Logo/>
      <UserInfo/>
    </header>
  );
};

export default MovieCardHeader;
