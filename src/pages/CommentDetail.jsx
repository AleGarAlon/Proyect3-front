import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";

function CommentDetails() {
    //destructure id
    const { id } = useParams();

    const navigate = useNavigate();
    // store data
    const [comment, setComment] = useState();

    const fetchComment = async () => {
        try {
            const response = await fetch(`${API_URL}/comments/info/${id}`);
            if (response.status === 200) {
                const parsed = await response.json();
                console.log("your parsed is" ,parsed)
                
                setComment(parsed);
                
            }
        } catch (error) {
            console.error(error);
        }
    };
    //fetch data
    useEffect(() => {
        fetchComment();
    }, []);

    const handleDelete = async () => {
        try {
            const response = await fetch(`${API_URL}/comments/info/${id}`, {
                method: "DELETE",
            });
            if (response.status === 202) {
                navigate("/profile");
            }
        } catch (error) {
            console.error(error);
        }
    };

    // will be undefined, so we use Conditional (ternary)
    return comment ? (
        <div>
            <h1>Comment Details</h1>
            <h3>Name: {comment.title}</h3>
            <p>Author:{comment.author} </p>
            <p>Description: {comment.information}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    ) : (
        <h1>Wait... we have a furball...</h1>
    );
}

export default CommentDetails;