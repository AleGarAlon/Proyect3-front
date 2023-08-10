import { useState } from "react";

const HomeForm = ({ onSubmit, home }) => {
    const [name, setName] = useState(home?.name || "");
    const [location, setLocation] = useState(home?.location || "");
    const [description, setDescription] = useState(home?.description || "");
    const [photo, setPhoto] = useState(home?.photo || "");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, location, description, photo });
    };

    return (
        <div className="new-shelter-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    placeholder="Home Name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <input
                    type="text"
                    value={location}
                    placeholder="Location"
                    onChange={(e) => {
                        setLocation(e.target.value);
                    }}
                />
                <textarea
                    value={description}
                    placeholder="Description"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
                <input
                    type="text"
                    value={photo}
                    placeholder="Photo URL"
                    onChange={(e) => {
                        setPhoto(e.target.value);
                    }}
                />
                <button type="submit" className="new-shelter-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default HomeForm;
