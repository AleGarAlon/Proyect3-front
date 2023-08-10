import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";
import { API_URL } from "../config/config.index";
import "./Profile.css";

function Profile() {
    const value = useContext(AuthContext);
    const user = value.user;
    console.log("User", user);
    const setUser = value.setUser;
    const [profile, setProfile] = useState("");
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const fetchUser = async () => {
        try {
            const response = await fetch(`${API_URL}/auth/${user._id}`);
            if (response.status === 200) {
                const parsed = await response.json();
                console.log("you fetched info is", parsed);
                setProfile(parsed);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    // ...

    const handleCatDelete = async (id) => {
        try {
            const response = await fetch(`${API_URL}/cats/${id}`, {
                method: "DELETE",
            });
            if (response.status === 202) {
                // Remove the deleted cat from the profile state
                setProfile((prevProfile) => ({
                    ...prevProfile,
                    cat: prevProfile.cat.filter((cat) => cat._id !== id),
                }));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleHomeDelete = async (id) => {
        try {
            const response = await fetch(`${API_URL}/api/homes/${id}`, {
                method: "DELETE",
            });
            if (response.status === 202) {
                // Remove the deleted home from the profile state
                setProfile((prevProfile) => ({
                    ...prevProfile,
                    house: prevProfile.house.filter((home) => home._id !== id),
                }));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {
        // Clear user context and token, and redirect to login
        logout();
        navigate("/login");
    };

    return profile ? (
        <div className="profile-container">
            <div className="profile-actions">
                <img src={profile.image} alt="profile image" />
                <Link to="/cats/new">
                    <button className="profile-btns">
                        Add a new cat for adoption
                    </button>{" "}
                </Link>
                <Link to="/homes/new">
                    <button className="profile-btns">Add a new home</button>{" "}
                </Link>
                <button onClick={handleLogout} className="profile-btns">
                    Logout
                </button>
            </div>
            <div className="profile-information">
                <h2>Hey {profile.name}! </h2>

                <h3>Your cats for adoption</h3>
                {profile.cat && profile.cat.length > 0 ? (
                    <div className="prifile-cats">
                        {profile.cat.map((c) => (
                            <div key={c._id} className="profile-cats-content">
                                <img src={c.image} alt={`${c.name} cat`} />
                                <div className="box-content">
                                    <Link to={`/cats/${c._id}`}>
                                        <h4>{c.name}</h4>
                                    </Link>
                                    <div className="cats-btns">
                                        <Link to={`/cats/${c._id}/update`}>
                                            Edit Cat
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleCatDelete(c._id)
                                            }
                                        >
                                            Delete Cat
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p></p>
                )}
                <div className="underline"></div>
                <h3>Your houses</h3>
                {profile.house && profile.house.length > 0 ? (
                    <div className="profile-houses">
                        <div>
                            {profile.house.map((home) => (
                                <ul
                                    key={home._id}
                                    className="profile-houses-content"
                                >
                                    <img
                                        src={home.photo}
                                        alt={`${home.name} house`}
                                    />
                                    <div className="box-content">
                                        <Link to={`/homes/${home._id}`}>
                                            <h4>{home.name}</h4>
                                        </Link>
                                        <div className="houses-btns">
                                            <Link
                                                to={`/homes/${home._id}/edit`}
                                            >
                                                Edit House
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleHomeDelete(home._id)
                                                }
                                            >
                                                Delete House
                                            </button>
                                        </div>
                                    </div>
                                </ul>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p></p>
                )}
                <h3>Your articles</h3>
                {profile.articles && profile.articles.length > 0 ? (
                    <div className="profile-articles">
                        {profile.articles.map((article) => (
                            <>
                                <div key={article._id}>
                                    <p> 🐱 {article.title}</p>
                                </div>
                            </>
                        ))}
                    </div>
                ) : (
                    <p></p>
                )}
                <h3>Your comments</h3>
                {profile.comments && profile.comments.length > 0 ? (
                    <div className="profile-comments">
                        {profile.comments.map((c) => (
                            <div
                                key={c._id}
                                className="profile-comments-content"
                            >
                                <Link to={`/comment/info/${c._id}`}>
                                    <p> Title : {c.title}</p>
                                    <p> User: {c.author}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    ) : (
        <h1>Wait... we have a furball...</h1>
    );
}

export default Profile;
