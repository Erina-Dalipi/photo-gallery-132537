import { useState, useEffect, useMemo } from "react";
import PhotoCard from "./components/PhotoCard";
import RegisterPhoto from "./components/RegisterPhoto";

function App() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?_limit=5")
            .then((res) => res.json())
            .then((data) => {
                const updated = data.map((p) => ({
                    ...p,
                    saved: false,
                    category: "Nature",
                }));
                setPhotos(updated);
            });
    }, []);
    const addPhoto = (photo) => {
        setPhotos([...photos, photo]);
    };
    const totalPhotos = useMemo(() => {
        return photos.length;
    }, [photos]);
    return (
        <div>
            <h1>Photo App</h1>

            <h2>Total Photos: {totalPhotos}</h2>

            <RegisterPhoto addPhoto={addPhoto} />

            <div>
                {photos.map((p) => (
                    <PhotoCard key={p.id} photo={p} />
                ))}
            </div>
        </div>
    );
}

export default App;