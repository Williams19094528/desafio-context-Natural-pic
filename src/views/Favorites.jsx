import React, { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";

const Favorites = () => {
  const { favorites, addFavorite } = useContext(PhotoContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="gallery grid-columns-4">
        {favorites.map((photo) => (
          <div
            key={photo.id}
            className="photo"
            style={{ backgroundImage: `url(${photo.src.large})` }}
          >
            <button onClick={() => addFavorite(photo)}>❤️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
