import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/config.index';

const AllHomesPage = () => {
    const [homes, setHomes] = useState([]);

    const fetchHomes = async () => {
        try {
            const response = await fetch(`${API_URL}/auth/verify/api/homes/`);
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
                    {home.name}
                </Link>
            ))}
        </>
    );
}

export default AllHomesPage;
