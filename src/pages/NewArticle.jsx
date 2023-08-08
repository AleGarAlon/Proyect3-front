import { useNavigate } from 'react-router-dom';
import { API_URL } from "../config/config.index";
import { AuthContext } from "../context/Auth.context";
import { useContext, useState} from 'react';

const NewArticle = () => {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext); // Use the AuthContext
    const userId = authContext.user._id;
    const [title, setTitle] = useState("");
    const [information, setInformation] = useState("");
    const [author, setAuthor] = useState(userId);

    const handleSubmit = async (event) => {
        event.preventDefault();
        


        payload.author = userId
        try {
            const response = await fetch(`${API_URL}/articles`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, information, author}),
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
    }

    return (
        <>
            <h1>New tail-tale</h1>
            <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={title}
                placeholder='Article title'
                onChange={e => {
                    setTitle(e.target.value);
                }}
            />
            
            <textarea
                value={information}
                placeholder=''
                onChange={e => {
                    setInformation(e.target.value);
                }}
            />
           
            <button type='submit'>Post</button>
        </form>
        </>
    );
    
}
export default NewArticle;