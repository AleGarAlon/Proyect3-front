import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import "./CommentDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

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
                console.log("your parsed is", parsed);

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
            const response = await fetch(`${API_URL}/comments/delete/${id}`, {
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
        <div className="comment-detail-container">
            <div className="comment-intro">
                <h1>Comment Details</h1>
            </div>
            <div className="comment-details">
                <div className="comment-detail">
                    <h3>
                        Name {comment.title}{" "}
                        <FontAwesomeIcon
                            icon={faPaw}
                            size="lg"
                            style={{ color: "#fafcff" }}
                        />
                    </h3>
                    <h3>
                        Author
                        <p>{comment.author} </p>
                    </h3>
                    <h3>
                        {" "}
                        Description
                        <p>{comment.information}</p>{" "}
                    </h3>
                    <button
                        onClick={handleDelete}
                        className="comment-detail-btn"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    ) : (
        <h1>Wait... we have a furball...</h1>
    );
}

export default CommentDetails;
