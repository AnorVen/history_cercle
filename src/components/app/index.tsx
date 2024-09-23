import React from 'react';
import './style.scss';
import Historical from "../historical";
import Slider from '../slider'

const Index = () => {
  return (
    <div className="App">
      <div className="wrapper">
          <Historical/>
          <Slider/>
      </div>
    </div>
  );
}

export default Index;
