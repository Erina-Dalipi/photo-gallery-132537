import { useState } from "react";

function RegisterPhoto({ addPhoto }) {
    const [title, setTitle] = useState("");
    const [albumId, setAlbumId] = useState("");
    const [url, setUrl] = useState("");
    const [saved, setSaved] = useState(false);
    const [category, setCategory] = useState("Nature");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === "") {
            setError("Title cannot be empty");
            return;
        }

        if (albumId <= 0) {
            setError("AlbumId must be greater than 0");
            return;
        }

        const newPhoto = {
            id: Date.now(),
            title,
            albumId: Number(albumId),
            url,
            thumbnailUrl: url,
            saved,
            category
        };

        addPhoto(newPhoto);

        setTitle("");
        setAlbumId("");
        setUrl("");
        setSaved(false);
        setCategory("Nature");
        setError("");


    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Photo</h2>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br />

            <input
                type="number"
                placeholder="Album ID"
                value={albumId}
                onChange={(e) => setAlbumId(e.target.value)}
            />

            <br />

            <input
                type="text"
                placeholder="URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />

            <br />

            <label>
                Saved:
                <input
                    type="checkbox"
                    checked={saved}
                    onChange={(e) => setSaved(e.target.checked)}
                />
            </label>

            <br />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="Nature">Nature</option>
                <option value="Architecture">Architecture</option>
                <option value="People">People</option>
            </select>

            <br />

            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterPhoto;

