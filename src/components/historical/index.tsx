import React from 'react';
import './style.scss';
import HistoricalCercle from "../historical-cercle";

const Historical = () => {
  return (
    <div className="historical">
      <div className="historical--wrapper">
          <h1 className="historical--title">
              Исторические даты
          </h1>
          <HistoricalCercle/>
      </div>
    </div>
  );
}

export default Historical;
