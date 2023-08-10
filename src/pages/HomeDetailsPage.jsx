import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import "./HomeDetailsPage.css";

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
        };
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
        <div className="house-details-loading">
            <h1>Wait... we have a furball...</h1>
        </div>
    ) : home ? (
        <div className="house-details-container">
            <div className="house-details-content">
                <div className="house-details-img">
                    <img src={home.photo} alt="Home Photo" />{" "}
                </div>
                <div className="house-details">
                    <h3>
                        {" "}
                        House name
                        <p>{home.name}</p>
                    </h3>
                    <h3>
                        {" "}
                        Location <p>{home.location}</p>
                    </h3>
                    <h3>
                        {" "}
                        Description <p>{home.description}</p>
                    </h3>
                    <h3>
                        {" "}
                        Owner <p>
                            {home.Owner ? home.Owner.name : "Unknown"}
                        </p>{" "}
                    </h3>

                    <button
                        onClick={() => navigate(`/comment/${home.Owner._id}`)}
                        className="house-details-btn"
                    >
                        Reach the owner
                    </button>
                </div>
            </div>
        </div>
    ) : (
        <h1>There was an error</h1>
    );
};

export default HomeDetailsPage;
