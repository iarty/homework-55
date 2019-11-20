import React from 'react';
import './burger.css';
import Ingredients from './burger-ingredients/burger-ingredients';

export default (props) => {
  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      <Ingredients />
      <div className="BreadBottom"></div>
    </div>
  )
}