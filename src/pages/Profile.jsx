import { useContext, useState, useEffect} from "react";
import { useNavigate, Link} from "react-router-dom";
import { AuthContext } from "../context/Auth.context";
import { API_URL } from "../config/config.index";

function Profile () {
const value = useContext(AuthContext)
const user = value.user
console.log("User", user)
const [profile, setProfile] = useState ("")

const fetchUser = async () => {
  try {
      const response = await fetch(`${API_URL}/auth/${user._id}`);
      if (response.status === 200) {
          const parsed = await response.json();
          console.log("you fetched info is",parsed)
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
    <>

    <img src={profile.image} alt="profile image" />
    <h2>{profile.name}'s profile page</h2>
    

    {profile.cat && profile.cat.length > 0 ? (
      <div>
        <p>Your cats for adoption</p>
        <ul>
          {profile.cat.map((c) => (
            <>
            <div key={c._id}>
            <p >{c.name}</p>
            <p>{c.photo}</p>
            </div>
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