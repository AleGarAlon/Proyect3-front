/*
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";

function Profile() {
  const { user, authenticateUser } = useContext(AuthContext);

  useEffect(() => {
    authenticateUser();
  }, []);

  console.log(user.cat)
  console.log(user.home)

  return (
    <div>
      <img src={user.image} alt="profile image" />
      <h2>{user.name}'s profile page</h2>

      {user.cat.length > 0 ? (
        <div>
          <p>Your cats for adoption</p>
          <ul>
            {user.cat.map((cat) => (
              <li key={cat._id}>
                <Link to={`/cats/${cat._id}`}>
                  {cat.name}
                  {cat.photo && <img src={cat.photo} alt={cat.name} />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No cats available.</p>
      )}

      <Link to="/cats/new">
        <button>Add a new cat for adoption</button>
      </Link>

      {user.house.length > 0 ? (
        <div>
          <p>Your houses</p>
          <ul>
            {user.house.map((home) => (
              <li key={home._id}>
                <Link to={`/homes/${home._id}`}>
                  {home.name}
                  {home.photo && <img src={home.photo} alt={home.name} />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No houses available.</p>
      )}

      <Link to="/homes/new">
        <button>Add a new home</button>
      </Link>
    </div>
  );
}

export default Profile;
*/

import axios from "axios";
import { useContext, useState, useEffect} from "react";
import { useNavigate, Link} from "react-router-dom";
import { AuthContext } from "../context/Auth.context";



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