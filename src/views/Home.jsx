import React, { useEffect, useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";

const Home = () => {
  const { photos, setPhotos, favorites, addFavorite } =
    useContext(PhotoContext);

  useEffect(() => {
    fetch("/photos.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.photos);
        setPhotos(data.photos);
      })
      .catch((error) => console.error("Error fetching photos:", error));
  }, [setPhotos]);

  return (
    <div>
      <h1>Natural Pic</h1>
      <div className="gallery grid-columns-5">
        {Array.isArray(photos) &&
          photos.map((photo) => (
            <div
              key={photo.id}
              className="photo"
              style={{ backgroundImage: `url(${photo.src.large})` }}
            >
              <button onClick={() => addFavorite(photo)}>
                {favorites.some((fav) => fav.id === photo.id) ? "❤️" : "🤍"}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
