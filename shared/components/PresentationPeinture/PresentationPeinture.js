import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchPresentation from '../../hooks/useFetchPresentation';
import FormatDataDB from '../../services/FormatDataDB';
import DiaporamaPeintureTexte from '../DiaporamaPeintures/DiaporamaPeintureTexte';
import RenderImage from '../RenderImage/RenderImage';
import { REACT_APP_BASE_URL } from '../../../constants/environment';
import './PresentationPeinture.css';

function PresentationPeinture(props) {
  let oeuvreInitialData;
  let { id } = useParams();

  if (__isBrowser__) {
    oeuvreInitialData = window.__INITIAL_DATA__ || [];
  } else {
    oeuvreInitialData = props.SSRData;
  }

  const oeuvre = useFetchPresentation(
    `${REACT_APP_BASE_URL}/oeuvre/${id}`,
    oeuvreInitialData,
  );
  return (
    !!oeuvre.length && (
      <>
        <div
          className="panneau-diapo__wrapper"
          style={{ height: '375px', width: '1000px' }}
        >
          <DiaporamaPeintureTexte
            nomOeuvre={oeuvre[0].nom_oeuvre}
            nomPeintre={oeuvre[0].nom_peintre}
            prenomPeintre={oeuvre[0].prenom_peintre}
            dateOeuvre={oeuvre[0].date_oeuvre}
            nomSource={oeuvre[0].nom_source}
            rightsSource={oeuvre[0].rights_source}
          />
          <div className="presentation-peinture__image">
            <RenderImage
              imageUrl={`${REACT_APP_BASE_URL}/image/${oeuvre[0].image_oeuvre}`}
              height={props.height}
            />
          </div>
        </div>
        <div className="presentation-peinture__wrapper">
          <h1 className="presentation-peinture__titre">
            Description de l'oeuvre
          </h1>
          <div className="presentation-peinture__comment">
            <FormatDataDB>{oeuvre[0].commentaire_oeuvre}</FormatDataDB>
          </div>
        </div>
      </>
    )
  );
}

export default PresentationPeinture;
