import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/Auth.Context";

const UpdateProfile = () => {
    const value = useContext(AuthContext)
    const user = value.user

   //attributes than can be modified on the user model
    const [name, setName] = useState(user.name)
    const [image,setImage] = useState(user.image)

return (
    <>
    <h2>Update your profile</h2>
    </>
)
}

export default UpdateProfile;