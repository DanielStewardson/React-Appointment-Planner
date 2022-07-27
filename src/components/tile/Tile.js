import React from "react";
import './tile.css';

export const Tile = ({ data, showDetails }) => {
  const id = data.key;
  const tileData = {...data};
  delete tileData.key;
  const tileOutput = Object.values(tileData);

  if (typeof data === 'string') {
    return (
      <div className="tile" onClick={() => showDetails(data)}>
        <p className='tile-title'>{data}</p>
      </div>
    );
  }

  return (
    <div className="tile" onClick={() => showDetails(id)}>
      {
        tileOutput.map((element, index) => {
          if (index === 0) {
            return <p key={index} className='tile-title'>{element}</p>
          }
            return <p key={index} className='tile-text'>{element}</p>
        })
      }
    </div>
  );
};