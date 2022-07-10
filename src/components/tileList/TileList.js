import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data, emptyMessage, handleDelete }) => {
  if (!data || data.length === 0) {
    return (
      <div>
         <p>{emptyMessage}</p>
      </div>
      )
  }
  return (
    <>
      {
        data.map((element, index) => {
          return <Tile key={index} data={element} handleDelete={handleDelete} id={index}/>
        })
      }
    </>
  );
};
