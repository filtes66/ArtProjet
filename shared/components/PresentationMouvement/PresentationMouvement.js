import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FormatDataDB, { FormatData } from '../../services/FormatDataDB';
import useFetchPresentation from '../../hooks/useFetchPresentation';
import './PresentationMouvement.css';
import { REACT_APP_BASE_URL } from '../../../constants/environment';

function OeuvresMouvement({
  image_oeuvre,
  nom_oeuvre,
  nom_peintre,
  commentaire_intro,
  id_oeuvre,
}) {
  return (
    <div>
      <div className="mouvement-presentation__flex-raw">
        <div className="mouvement-presentation__image-oeuvre">
          <img
            src={image_oeuvre}
            width="auto"
            height="164"
            border="0"
            alt="mouvement"
          />
        </div>
        <div className="mouvement-presentation__reference-oeuvre">
          <div className="mouvement-presentation__titre-oeuvre">
            <h2>{nom_oeuvre}</h2>
          </div>
          <div className="mouvement-presentation__auteur-oeuvre">
            <h3>{nom_peintre}</h3>
          </div>
          <div className="mouvement-presentation__commentaire-oeuvre">
            <FormatData>{commentaire_intro}</FormatData>
          </div>
          <Link to={`/presentation-de-l-oeuvre/${id_oeuvre}`}>
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
}

function PresentationMouvement(props) {
  let presentationMouvementInitialData;
  let { id } = useParams();

  if (__isBrowser__) {
    presentationMouvementInitialData = window.__INITIAL_DATA__ || [];
  } else {
    presentationMouvementInitialData = props.SSRData;
  }

  const mouvement = useFetchPresentation(
    `${REACT_APP_BASE_URL}/mouvement/${id}`,
    presentationMouvementInitialData,
  );

  if (mouvement.length === 0) {
    return null;
  }

  const listeOeuvresMouvement = mouvement.map(
    ({ image_oeuvre, nom_oeuvre, nom_peintre, commentaire, id_oeuvre }) => (
      <OeuvresMouvement
        key={id_oeuvre}
        image_oeuvre={`${REACT_APP_BASE_URL}/image/${image_oeuvre}`}
        nom_oeuvre={nom_oeuvre}
        nom_peintre={nom_peintre}
        commentaire_intro={commentaire}
        id_oeuvre={id_oeuvre}
      />
    ),
  );

  return (
    <div className="mouvement-presentation__wrapper">
      <h1 className="mouvement-presentation__titre">
        {mouvement[0].nom_mouvement}
      </h1>
      <div className="mouvement-presentation__comment">
        <FormatDataDB>{mouvement[0].commentaire_mouvement}</FormatDataDB>
      </div>
      {listeOeuvresMouvement}
    </div>
  );
}

export default PresentationMouvement;
