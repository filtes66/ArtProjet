import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import fetchData from '../../hooks/fetchData';
import './ListeMouvements.css';
import { REACT_APP_BASE_URL } from '../../../constants/environment';

function Mouvement({ id_mouvement, image_mouvement, nom_mouvement }) {
  return (
    <Link
      className="liste-mouvement__lien"
      to={`/presentation-du-mouvement/${id_mouvement}`}
    >
      <div className="liste-mouvement__image">
        <img
          src={image_mouvement}
          height="120px"
          width="193px"
          alt="mouvement peinture"
        />
      </div>
      <h5 className="liste-mouvement__legende">{nom_mouvement}</h5>
    </Link>
  );
}

function ListeMouvements(props) {
  let ListeMouvementsInitialData;

  if (__isBrowser__) {
    ListeMouvementsInitialData = window.__INITIAL_DATA__ || [];
  } else {
    ListeMouvementsInitialData = props.SSRData;
  }

  let [mouvements, setMouvements] = useState(ListeMouvementsInitialData);

  useEffect(() => {
    if (window.__INITIAL_DATA__) {
      delete window.__INITIAL_DATA__;
    } else {
      fetchData(`${REACT_APP_BASE_URL}/mouvement`, setMouvements);
    }
  }, []);
  return (
    <div className="liste-mouvements">
      <div className="liste-mouvements__wrapper">
        <h1 className="liste-mouvements__titre">Les mouvements artistiques</h1>
        <div className="liste-mouvement__grid">
          {mouvements.map(
            ({ id_mouvement, image_mouvement, nom_mouvement }) => (
              <Mouvement
                key={id_mouvement}
                id_mouvement={id_mouvement}
                image_mouvement={image_mouvement}
                nom_mouvement={nom_mouvement}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default ListeMouvements;
