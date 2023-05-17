import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
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
    </div>
  );
};

export default Nav;
