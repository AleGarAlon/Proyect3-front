import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cats">Cats</Link>
        </li>
        <li>
          <Link to="/homes">Shelters</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
