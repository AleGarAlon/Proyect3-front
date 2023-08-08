import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/config.index';

const Articles = () => {
    const [articles, setArticles] = useState([])

    const fetchAllArticles = async () => {
        try {
             const response = await fetch(`${API_URL}/articles`)
             if (response.status === 200) {
                const parsed = await response.json();
                setArticles(parsed);
            }
        } catch (error) {
            console.log("Error in the fetching all articles", error)
        }
       
    }

    useEffect(() => {
        fetchAllArticles();
    }, []);

    return (
        
        <>
        <h2>Whisker Chronicles</h2>
        <Link to="/articles/new"><button>add a tail-tales</button> </Link>
        {...articles.reverse().map(article => (
                <div key= {article._id}>
                    <p>{article.title}</p>
                    <p>{article.information}</p> 
                </div>
            ))}
        </>



    )
}

export default Articles;