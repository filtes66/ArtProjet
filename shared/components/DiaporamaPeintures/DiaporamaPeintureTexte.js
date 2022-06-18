import React from 'react';
import './DiaporamaPeintureTexte.css';

const DiaporamaPeintureTexte = (props) => {
  return (
    <div className="diaporamaPeintureTexte">
      <h1 className="diaporamaPeintureTexte__auteur">
        {props.prenomPeintre} {props.nomPeintre}
      </h1>
      <h2 className="diaporamaPeintureTexte__titre">{props.nomOeuvre}</h2>
      <h3 className="diaporamaPeintureTexte__date">{props.dateOeuvre}</h3>
      <div className="diaporamaPeintureTexte__source">
        <p>Courtesy {props.nomSource}</p>
        <p>{props.rightsSource} image</p>
      </div>
    </div>
  );
};

export default DiaporamaPeintureTexte;
