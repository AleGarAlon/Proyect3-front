import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import { AuthContext } from "../context/Auth.Context";



function Profile () {
const value = useContext(AuthContext)
const user = value.user
console.log("User", user)

return (
    <>

    <img src={user.image} alt="profile image" />
    <h2>{user.name}'s profile page</h2>
    <Link to= {`/profile/${user._id}/update`}><button>Update your profile</button> </Link>

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