import React from "react";
import Logo from "../logo";
import UserInfo from "../user-info";
import Catalog from "../catalog";
import PropTypes from "prop-types";
import {filmShape} from "../../validators/film";
import Footer from "../footer";


const MyList = ({films}) => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list</h1>
        <UserInfo/>
      </header>
      <Catalog films={films} noShowMoreButton={true}/>
      <Footer/>
    </div>
  );
};

MyList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(filmShape).isRequired,
};

export default MyList;
