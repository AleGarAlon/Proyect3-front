import axios from "axios";
import { useContext, useState, useEffect} from "react";
import { useNavigate, Link} from "react-router-dom";
import { AuthContext } from "../context/Auth.context";



function Profile () {
const value = useContext(AuthContext)
const user = value.user
console.log("User", user)
const [profile, setProfile] = useState ("")

const fetchUser = async () => {
  try {
      const response = await fetch(`${API_URL}/${user}`);
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

    <img src={user.image} alt="profile image" />
    <h2>{user.name}'s profile page</h2>
    

    {user.cat.length > 0 ? (
      <div>
        <p>Your cats for adoption</p>
        <ul>
          {user.cat.map((c) => (
            <>
            <ul key={c._id}>
            <Link to="/cats/"{...c._id}>
            <li >{c.name}</li>
            <li>{c.photo}</li>
            </Link>
            </ul>
            </>
          ))}
        </ul>
      </div>
    ) : (
        <p></p>
    )}
    <Link to="/cats/new"><button>Add a new cat for adoption</button> </Link>

    {user.cat.length > 0 ? (
        <div>
            <p>Your houses</p>
            <ul>
            {user.house.map((home) => (
                <>
                <ul key={home._id}>
                <Link to="='/homes/"{...home._id}>
                <li >{home.name}</li>
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
    <Link to="/homes/new"><button>Add a new home</button> </Link>  

    </>
)
}

export default Profile;