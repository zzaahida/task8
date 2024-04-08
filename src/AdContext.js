import React, { createContext, useState, useCallback } from 'react';

export const AdContext = createContext();

export const AdProvider = ({ children }) => {
  const [ads, setAds] = useState([]);

  const addAd = useCallback((ad) => {
    setAds((currentAds) => [...currentAds, { ...ad, id: Date.now() }]);
  }, []);

  const deleteAd = useCallback((id) => {
    setAds((currentAds) => currentAds.filter(ad => ad.id !== id));
  }, []);

  const updateAd = useCallback((id, text) => {
    setAds((currentAds) => currentAds.map(ad => ad.id === id ? { ...ad, text } : ad));
  }, []);

  return (
    <AdContext.Provider value={{ ads, addAd, deleteAd, updateAd }}>
      {children}
    </AdContext.Provider>
  );
};
