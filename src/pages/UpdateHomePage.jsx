import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HomeForm from '../components/HomeForm';

const UpdateHomePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Home attributes based on our model
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchHome = async () => {
    const response = await fetch(`http://localhost:5005/api/homes/${id}`);
    if (response.status === 200) {
      const home = await response.json();
      setName(home.name);
      setLocation(home.location);
      setDescription(home.description);
      setPhoto(home.photo);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchHome();
  }, []);

  const handleSubmit = async payload => {
    try {
      const response = await fetch(`http://localhost:5005/api/homes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 202) { 
        const updatedHome = await response.json();
        navigate(`/homes/${updatedHome._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h3>Edit Shelter</h3>
      {!isLoading && (
        <HomeForm onSubmit={handleSubmit} home={{ name, location, description, photo }} />
      )}
    </>
  )
}

export default UpdateHomePage;
