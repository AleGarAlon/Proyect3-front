import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";
import { API_URL } from "../config/config.index";
import "./Profile.css";

function Profile() {
    const value = useContext(AuthContext);
    const user = value.user;
    console.log("User", user);
    const [profile, setProfile] = useState("");

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

    //fetch data
    useEffect(() => {
        fetchUser();
    }, []);

    return (
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
            </div>
            <div className="profile-information">
                <h2>Hey {profile.name}!</h2>

                {profile.cat && profile.cat.length > 0 ? (
                    <div>
                        <p>Your cats for adoption</p>
                        <ul>
                            {profile.cat.map((c) => (
                                <>
                                    <div key={c._id}>
                                        <p>{c.name}</p>
                                        <p>{c.photo}</p>
                                    </div>
                                </>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p></p>
                )}

                {profile.house && profile.house.length > 0 ? (
                    <div>
                        <p>Your houses</p>
                        <ul>
                            {profile.house.map((home) => (
                                <>
                                    <ul key={home._id}>
                                        <Link to="='/homes/" {...home._id}>
                                            <li>{home.name}</li>
                                            <li>{home.photo}</li>
                                        </Link>
                                    </ul>
                                </>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p></p>
                )}

                {profile.articles && profile.articles.length > 0 ? (
                    <div>
                        <p>Your articles</p>
                        <ul>
                            {profile.articles.map((article) => (
                                <>
                                    <ul key={article._id}>
                                        <li>{article.title}</li>
                                    </ul>
                                </>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    );
}

export default Profile;
