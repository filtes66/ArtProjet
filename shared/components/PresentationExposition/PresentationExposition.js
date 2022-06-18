import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchPresentation from '../../hooks/useFetchPresentation';
import FormatDataDB from '../../services/FormatDataDB';
import RenderImageRights from '../RenderImage/RenderImageRights';
import './PresentationExposition.css';
import { REACT_APP_BASE_URL } from '../../../constants/environment';

function PresentationExposition(props) {
  let presentationExpositionInitialData;
  let { id } = useParams();

  if (__isBrowser__) {
    presentationExpositionInitialData = window.__INITIAL_DATA__ || [];
  } else {
    presentationExpositionInitialData = props.SSRData;
  }

  const exposition = useFetchPresentation(
    `${REACT_APP_BASE_URL}/exposition/presentation/${id}`,
    presentationExpositionInitialData,
  );

  return (
    !!exposition.length && (
      <div className="exposition-presentation">
        <div className="exposition-presentation__wrapper">
          <div className="exposition-presentation__liste-flex">
            <div className="exposition-presentation__image">
              <RenderImageRights
                imageUrl={`${REACT_APP_BASE_URL}/image/${exposition[0].image_exposition}`}
                height="180"
                auteur={exposition[0].auteur_source}
                rightsSource={exposition[0].rights_source}
                rightsUrl={exposition[0].rights_source_link}
              />
            </div>
            <div>
              <h1 className="exposition-presentation__titre">
                {exposition[0].nom_exposition}
              </h1>

              <div className="exposition-presentation__ref">
                <div className="exposition-presentation__musee">
                  <p>{exposition[0].nom_musee}</p>
                  <p>{exposition[0].adresse}</p>
                </div>
                <div className="exposition-presentation__dates">
                  <p>
                    du {exposition[0].date_debut} au {exposition[0].date_fin}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="exposition-presentation__comment">
            <FormatDataDB>{exposition[0].commentaire_exposition}</FormatDataDB>
          </div>
        </div>
      </div>
    )
  );
}

export default PresentationExposition;
