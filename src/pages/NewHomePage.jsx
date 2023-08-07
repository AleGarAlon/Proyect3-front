import { useNavigate } from 'react-router-dom';
import HomeForm from '../components/HomeForm';

const NewHomePage = () => {
    const navigate = useNavigate();

    const handleSubmit = async payload => {
        try {
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
