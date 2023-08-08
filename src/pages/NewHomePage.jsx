import { useNavigate } from 'react-router-dom';
import HomeForm from '../components/HomeForm';
import { AuthContext } from "../context/Auth.context";
import { useContext } from 'react';

const NewHomePage = () => {
    const navigate = useNavigate();

    const authContext = useContext(AuthContext); // Use the AuthContext

    const userId = authContext.user._id;


    const handleSubmit = async payload => {
        try {

            // Include the user's ID in the payload
            payload.Owner = userId;

            const response = await fetch('http://localhost:5005/api/homes/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.status === 201) {
                const newHome = await response.json();
                navigate(`/homes/${newHome._id}`);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <h1>New Shelter</h1>
            <HomeForm onSubmit={handleSubmit} />
        </>
    );
}

export default NewHomePage;
