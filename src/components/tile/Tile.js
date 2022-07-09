import React from "react";

export const Tile = ({ data }) => {
  const tileData = Object.values(data);

  return (
    <div className="tile-container">
      {
        tileData.map((element, index) => {
          if (index === 0){
          return <p key={index} className='tile-title'>{element}</p>
          }
          return <p key={index} className='tile'>{element}</p>
        })
      }
    </div>
  );
};