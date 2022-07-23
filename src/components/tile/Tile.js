import React from "react";
import './tile.css';

export const Tile = ({ data, showDetails }) => {
  const tileData = Object.values(data);

  if (typeof data === 'string') {
    return (
      <div className="tile" onClick={() => showDetails(data)}>
        <p className='tile-title'>{data}</p>
      </div>
    );
  }

  return (
    <div className="tile" onClick={() => alert(tileData)}>
      {
        tileData.map((element, index) => {
          if (index === 0) {
            return <p key={index} className='tile-title'>{element}</p>
          }
            return <p key={index} className='tile-text'>{element}</p>
        })
      }
    </div>
  );
};
//make onclick run passed down function from contacts, appoints etc. that will open modal