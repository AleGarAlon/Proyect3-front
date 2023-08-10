import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/config.index";
import "./Articles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const Articles = () => {
    const [articles, setArticles] = useState([]);

    const fetchAllArticles = async () => {
        try {
            const response = await fetch(`${API_URL}/articles`);
            if (response.status === 200) {
                const parsed = await response.json();
                setArticles(parsed);
            }
        } catch (error) {
            console.log("Error in the fetching all articles", error);
        }
    };

    useEffect(() => {
        fetchAllArticles();
    }, []);

    return (
        <div className="article-container">
            <div className="articles-intro">
                <h2>Whisker Chronicles</h2>
                <p>
                    Our Purrfect Pawtners is more than just a forum; it's a
                    gathering place for passionate cat enthusiasts to come
                    together, share their stories, seek advice, and celebrate
                    the beauty of our whiskered companions.
                </p>
                <Link to="/articles/new">
                    <button className="article-btn">Add a tail-tales</button>{" "}
                </Link>
            </div>
            <div className="articles">
                {...articles.reverse().map((article) => (
                    <div key={article._id} className="article">
                        <h3>
                            {article.title}{" "}
                            <FontAwesomeIcon
                                icon={faPaw}
                                size="lg"
                                style={{ color: "#fafcff" }}
                            />{" "}
                        </h3>
                        <p>{article.information}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Articles;
