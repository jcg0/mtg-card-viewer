import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../Forms/SearchForm";

const Header = () => {
  return (
    <nav>
      <div>
        <SearchForm />
      </div>
      <section>
        <div>
          <Link to="/home">
            <p>Home</p>
          </Link>
        </div>
        <div>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>
        <div>
          <Link to="/signup">
            <p>Signup</p>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Header;
