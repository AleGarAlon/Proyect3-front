import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../config/config.index';

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
      const response = await fetch(`${API_URL}/api/homes/${id}`);
      if (response.status === 200) {
        const parsed = await response.json();
        setHome(parsed);
        setIsLoading(false);
      }
    }
    fetchHome();
  }, [id]);

  /*const handleDelete = async () => {
    try {
      const response = await fetch(`${API_URL}/api/homes/${id}`, {
        method: 'DELETE',
      });
      if (response.status === 202) {
        navigate('/homes');
      }
    } catch (error) {
      console.error(error);
    }
  };*/

  return isLoading ? (
    <h1>Wait... we have a furball...</h1>
  ) : home ? (
    <>
      <h1>Choose the purrfect house fur your cat</h1>
      <p>Owner: {home.Owner ? home.Owner.name : 'Unknown'}</p>
      <p>House name: {home.name}</p>
      <p>Location: {home.location}</p>
      <p>Description: {home.description}</p>
      <img src={home.photo} alt="Home Photo" />
      <button onClick={() => navigate(`/comment/${home.Owner._id}`)}>Reach the owner</button>
    </>
  ) : (
    <h1>There was an error</h1>
  );
}

export default HomeDetailsPage;
