import React, { useState } from 'react';

const AdsListItem = React.memo(({ ad, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(ad.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(ad.id, editText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
          <button onClick={handleSave}>Save &hearts;</button>
        </>
      ) : (
        <>
          {ad.text}
          <button onClick={handleEdit}>Edit &hearts;</button>
          <button onClick={() => onDelete(ad.id)}>Delete &hearts;</button>
        </>
      )}
    </li>
  );
});

export default AdsListItem;
