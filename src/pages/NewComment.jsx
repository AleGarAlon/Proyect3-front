import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import { AuthContext } from "../context/Auth.context";
import { useContext, useState } from "react";
import "./NewComment.css";

const NewComment = () => {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const userEmail = authContext.user.email;
    const [title, setTitle] = useState("");
    const [information, setInformation] = useState("");
    const [author, setAuthor] = useState(userEmail);
    const { id } = useParams();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const payload = {
                title,
                information,
                author: userEmail,
                receptor: id,
            };
            const response = await fetch(`${API_URL}/comments/:id`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ payload }),
            });

            if (response.status === 201) {
                const parsed = await response.json();
                console.log(parsed);

                navigate(`/profile`);
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
        <div className="new-comment">
            <h1>Comment to the owner</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    placeholder="Comment title"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />

                <textarea
                    value={information}
                    placeholder=""
                    onChange={(e) => {
                        setInformation(e.target.value);
                    }}
                />

                <button type="submit" className="comment-btn">
                    Post
                </button>
            </form>
        </div>
    );
};

export default NewComment;
