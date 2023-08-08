import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const HomeDetailsPage = () => {
  /* Get back the homeId */
  const { id } = useParams(); 
  /* Store our home */
  const [home, setHome] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  /* Fetch our home */
  useEffect(() => {
    const fetchHome = async () => {
      const response = await fetch(`http://localhost:5005/api/homes/${id}`);
      if (response.status === 200) {
        const parsed = await response.json();
        setHome(parsed);
        setIsLoading(false);
      }
    }
    fetchHome();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5005/api/homes/${id}`, {
        method: 'DELETE',
      });
      if (response.status === 202) {
        navigate('/homes');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : home ? (
    <>
      <h1>Shelter Details</h1>
      <p>Owner: {home.Owner ? home.Owner.name : 'Unknown'}</p>
      <p>{home.name}</p>
      <p>{home.location}</p>
      <p>{home.description}</p>
      <img src={home.photo} alt="Home Photo" />
      <button onClick={() => navigate(`/homes/${id}/edit`)}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  ) : (
    <h1>There was an error</h1>
  );
}

export default HomeDetailsPage;
