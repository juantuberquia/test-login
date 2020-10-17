import React from "react";

const Spinner = ({ spinner }) => {
  if (!spinner) return null;
  return (
    <div className="spinner">
      <p> Estamos Preparando todo para ti </p>
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
  );
};

export default Spinner;
