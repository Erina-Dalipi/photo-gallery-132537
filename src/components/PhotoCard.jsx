function PhotoCard({ photo }) {
    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <img src={photo.thumbnailUrl} alt={photo.title} width="100" />
            <h3>{photo.title}</h3>
            <p>Album: {photo.albumId}</p>
            <p>Category: {photo.category}</p>

            {/* CONDITIONS */}
            {photo.saved === true && <p> Saved</p>}
            {photo.category === "Architecture" && <p> Architecture</p>}
        </div>
    );
}

export default PhotoCard;
