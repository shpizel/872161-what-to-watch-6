import React from "react";
import Logo from "../logo";
import Copyright from "../copyright";
import UserInfo from "../user-info";
import Catalog from "../catalog";
import PropTypes from "prop-types";
import {filmShape} from "../../validators/film";


const MyList = (props) => {
  const {films} = props;
  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>
          <h1 className="page-title user-page__title">My list</h1>
          <UserInfo/>
        </header>
        <Catalog films={films} noShowMoreButton={true}/>
        <footer className="page-footer">
          <Logo modifier={`logo__link--light`}/>
          <Copyright/>
        </footer>
      </div>
    </React.Fragment>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(filmShape).isRequired,
};

export default MyList;
