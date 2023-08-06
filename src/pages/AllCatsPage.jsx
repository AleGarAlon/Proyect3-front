import { useEffect, useState } from "react";

const AllCatsPage = () => {
    //store data
    const [cats, setCats] = useState([]);

    const fetchCats = async () => {
        try {
            const response = await fetch("http://localhost:5005/api/cats");
            if (response.status === 200) {
                const parsedCats = await response.json();
                setCats(parsedCats);
            }
        } catch (error) {
            console.error(error);
        }
    };

    //make sure we access data and running once at mounting time
    useEffect(() => {
        fetchCats();
    }, []);

    return (
        <div>
            {" "}
            <h1> All Cats </h1>
            {cats.map((cat) => (
                <h3 key={cat._id}> {cat.name}</h3>
            ))}
        </div>
    );
};

export default AllCatsPage;
