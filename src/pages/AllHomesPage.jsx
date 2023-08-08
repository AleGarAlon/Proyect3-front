import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllHomesPage = () => {
    const [homes, setHomes] = useState([]);

    const fetchHomes = async () => {
        try {
            const response = await fetch('http://localhost:5005/api/homes/');
            if (response.status === 200) {
                const parsedHomes = await response.json();
                setHomes(parsedHomes);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchHomes();
    }, []);

    return (
        <>
        {homes.map(home => (
                <Link key={home._id} to={`/homes/${home._id}`}>
                    <h2>{home.name}</h2>
                    <h3>Location: {home.location}</h3>
                </Link>
            ))}
        </>
    );
}

export default AllHomesPage;
