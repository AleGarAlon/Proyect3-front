import { useContext, useState, useEffect} from "react";
import { useNavigate, Link} from "react-router-dom";
import { AuthContext } from "../context/Auth.context";
import { API_URL } from "../config/config.index";




function Profile () {
const value = useContext(AuthContext)
const user = value.user
console.log("User", user)
const { authenticateUser } = useContext(AuthContext);



useEffect(() => {
  authenticateUser();
}, []);

return (
    <>

    <img src={profile.image} alt="profile image" />
    <h2>{profile.name}'s profile page</h2>
    

    {profile.cat && profile.cat.length > 0 ? (
      <div>
        <p>Your cats for adoption</p>
        <ul>
          {profile.cat.map((c) => (
            <>
            <ul key={c._id}>
            <li >{c.name}</li>
            <li>{c.photo}</li>
            </ul>
            </>
          ))}
        </ul>
      </div>
    ) : (
        <p></p>
    )}
    <Link to="/cats/new"><button>Add a new cat for adoption</button> </Link>

   
    <Link to="/homes/new"><button>Add a new home</button> </Link>  

    {profile.articles && profile.articles.length > 0 ? (
        <div>
            <p>Your articles</p>
            <ul>
            {profile.articles.map((article) => (
                <>
                <ul key={article._id}>
                <li >{article.title}</li>
                </ul>
                </>
            ))}
            </ul>
        </div>
        ) : (
            <p></p>
        )}
    </>
)
}

export default Profile;