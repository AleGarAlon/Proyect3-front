import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../context/Auth.context";
import Logo from "../assets/logo.png";

const Navbar = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div>
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
                    {isLoggedIn ? (
                        // These links will be shown if the user is authenticated
                        <>
                            <li>
                                <Link to="/profile" className="nav-profile">
                                    Profile
                                </Link>
                            </li>
                            {/* Add other authenticated links */}
                        </>
                    ) : (
                        // These links will be shown if the user is not authenticated
                        <>
                            <li>
                                <Link to="/signup" className="signup">
                                    Sign Up
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="login">
                                    Log In
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
