import React from 'react';
import './DiaporamaExpositionTexte.css';

const DiaporamaInfoExpositions = (props) => {
  return (
    <div className="diaporamaExpositionTexte">
      <h1 className="diaporamaExpositionTexte__titre">
        {props.nom_exposition}
      </h1>
      <h2 className="diaporamaExpositionTexte__auteur">{props.nom_musee}</h2>
      <h3 className="diaporamaExpositionTexte__date">
        du {props.date_debut} au {props.date_fin}
      </h3>
      <div className="diaporamaExpositionTexte__top">
        <p>TOP 4 expositions</p>
      </div>
    </div>
  );
};

export default DiaporamaInfoExpositions;
