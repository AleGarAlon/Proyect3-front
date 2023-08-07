import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";


function Profile () {
const value = useContext(AuthContext)
const user = value.user
console.log("User", user)

return (
    <>
   <h2>{user.name}'s profile page</h2>
   

    </>
)


}



export default Profile;