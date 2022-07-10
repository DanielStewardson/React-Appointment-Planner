import React from "react";
import { DeleteButton } from "../deleteButton/DeleteButton";

export const Tile = ({ data, id, handleDelete }) => {
  const tileData = Object.values(data);

  return (
    <div className="tile-container">
      <DeleteButton id={id} handleDelete={handleDelete} />
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

// Make notes a pop out on click rather then straight render