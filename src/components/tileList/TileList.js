import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data, emptyMessage }) => {
  if (!data || data.length === 0) {
    return (
      <div>
         <p>{emptyMessage}</p>
      </div>
      )
  }
  return (
    <div>
      {
        data.map((element, index) => {
          return <Tile key={index} data={element} />
        })
      }
    </div>
  );
};
