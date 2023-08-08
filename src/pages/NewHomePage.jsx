import { useNavigate } from 'react-router-dom';
import HomeForm from '../components/HomeForm';
import { API_URL } from "../config/config.index";

const NewHomePage = () => {
    const navigate = useNavigate();

    const handleSubmit = async payload => {
        try {
            const response = await fetch(`${API_URL}/api/homes/`, {
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
