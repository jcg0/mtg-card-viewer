import React from "react";
// import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import Nav from "./Nav";

const Header = () => {
  return (
    <nav>
      <SearchForm />
      <Nav />
    </nav>
  );
};

export default Header;
