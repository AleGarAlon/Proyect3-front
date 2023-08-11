import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/config.index";
import { AuthContext } from "../context/Auth.context";
import { useContext, useState } from "react";
import "./NewArticle.css";

const NewArticle = () => {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext); // Use the AuthContext
    const userId = authContext.user._id;
    const [title, setTitle] = useState("");
    const [information, setInformation] = useState("");
    const [author, setAuthor] = useState(userId);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${API_URL}/articles`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, information, author: userId }),
            });
            console.log(response);
            if (response.status === 201) {
                const parsed = await response.json();
                console.log(parsed);
                // Logic to navigate to the just created cat
                navigate(`/articles`);
                // Logic to empty your state to have a clean form
                setTitle("");
                setInformation("");
                setAuthor("");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="new-article">
            <h1>Add a new tail-tale</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    placeholder="Article title"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />

                <textarea
                    value={information}
                    placeholder="Description"
                    onChange={(e) => {
                        setInformation(e.target.value);
                    }}
                />

                <button type="submit" className="new-article-btn">
                    Post
                </button>
            </form>
        </div>
    );
};
export default NewArticle;
