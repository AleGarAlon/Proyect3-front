
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
    <h2>{user.name}'s profile page</h2>
    

    {profile.cat.length > 0 ? (
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

    {profile.house.length > 0 ? (
        <div>
            <p>Your houses</p>
            <ul>
            {profile.house.map((home) => (
                <>
                <ul key={home._id}>
                <li >{home.name}</li>
                <li>{home.photo}</li>
                </ul>
                </>
            ))}
            </ul>
        </div>
        ) : (
            <p></p>
        )}
    <Link to="/homes/new"><button>Add a new home</button> </Link>  

    </>
)
}

export default Profile;