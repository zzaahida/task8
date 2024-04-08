import React, { useContext } from 'react';
import { AdContext } from './AdContext';
import AdsListItem from './AdsListItem';

const AdsList = () => {
  const { ads, deleteAd, updateAd } = useContext(AdContext);

  return (
    <ul>
      {ads.map(ad => (
        <AdsListItem key={ad.id} ad={ad} onDelete={deleteAd} onUpdate={updateAd} />
      ))}
    </ul>
  );
};

export default AdsList;
