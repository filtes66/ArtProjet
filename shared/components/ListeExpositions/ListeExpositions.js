import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { REACT_APP_BASE_URL } from '../../../constants/environment';
import './ListeExpositions.css';

function ExpositionAffichage({
  id_exposition,
  nom_exposition,
  image_exposition,
  nom_musee,
  date_debut,
  date_fin,
}) {
  return (
    <div className="exposition__flex-raw">
      <Link to={`/presentation-de-l-exposition/${id_exposition}`}>
        <div className="exposition__image">
          <img src={image_exposition} alt="exposition" />
        </div>
      </Link>
      <div>
        <Link to={`/presentation-de-l-exposition/${id_exposition}`}>
          <h2 className="exposition__titre">{nom_exposition}</h2>
        </Link>
        <div className="exposition__reference">
          <p>{nom_musee}</p>
          <p>
            Du {date_debut} au {date_fin}
          </p>
        </div>
      </div>
    </div>
  );
}

function ListeExpositions({ exposition }) {
  const listeExpositions = exposition.map(
    ({
      id_exposition,
      nom_exposition,
      nom_musee,
      date_debut,
      date_fin,
      image_exposition,
    }) => (
      <ExpositionAffichage
        key={id_exposition}
        nom_exposition={nom_exposition}
        nom_musee={nom_musee}
        date_debut={date_debut}
        date_fin={date_fin}
        image_exposition={`${REACT_APP_BASE_URL}/image/${image_exposition}`}
        id_exposition={id_exposition}
      />
    ),
  );
  return <>{listeExpositions}</>;
}

export default ListeExpositions;
