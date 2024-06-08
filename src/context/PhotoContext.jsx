import React, { createContext, useState } from "react";

export const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (photo) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === photo.id)) {
        return prevFavorites.filter((fav) => fav.id !== photo.id);
      } else {
        return [...prevFavorites, photo];
      }
    });
  };

  return (
    <PhotoContext.Provider
      value={{ photos, setPhotos, favorites, addFavorite }}
    >
      {children}
    </PhotoContext.Provider>
  );
};
