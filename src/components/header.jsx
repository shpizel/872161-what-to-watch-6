import React from "react";
import Logo from "./logo";


const Header = () => {
  return (
    <React.Fragment>
      <header className="page-header movie-card__head">
        <Logo/>
        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
