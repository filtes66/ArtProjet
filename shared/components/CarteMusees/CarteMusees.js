import React, { useState, useEffect } from 'react';
import FormatDataDB from '../../services/FormatDataDB';
import CreditsWikipedia from '../Credits/CreditsWikipedia';
import { REACT_APP_BASE_URL } from '../../../constants/environment';
import './CarteMusees.css';

function CarteMusees(props) {
  const [index, setIndex] = useState(1);
  const [museum, setMusee] = useState({
    lat: 48.8566,
    lng: 2.3522,
    zoom: 13,
    musee: props.site,
    components: undefined,
    leaflet: undefined,
  });

  useEffect(() => {
    require('leaflet/dist/leaflet.css');
    let {
      MapContainer: LeafletMap,
      LayersControl,
      Marker,
      TileLayer,
      Popup,
    } = require('react-leaflet');

    var L = require('leaflet');

    setMusee({
      ...museum,
      leaflet: {
        L,
      },
      components: {
        LeafletMap,
        LayersControl,
        Marker,
        TileLayer,
        Popup,
      },
    });
  }, []);

  const { components, leaflet, lat, lng, zoom, musee } = museum;

  if (!components) {
    return null;
  }

  const { LeafletMap, LayersControl, Marker, TileLayer, Popup } = components;
  const { L } = leaflet;
  const position = [lat, lng];
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

  const presentationMusee = (i) => {
    setIndex(i);
  };

  const markerMusee = musee.map(
    ({ id_musee, lat, lng, nom_musee, image_musee }) => (
      <div key={id_musee}>
        <LayersControl.Overlay name={nom_musee} checked={id_musee === 1}>
          <Marker
            position={[lat, lng]}
            opacity="1"
            eventHandlers={{ click: () => presentationMusee(id_musee) }}
          >
            <Popup className="carte-musees__pop-up">
              <button className="carte-musees__button" type="button" value="">
                <img
                  src={`${REACT_APP_BASE_URL}/image/${image_musee}`}
                  alt="musee"
                />
              </button>
            </Popup>
          </Marker>
        </LayersControl.Overlay>
      </div>
    ),
  );

  return (
    <div className="carte-musees">
      <div className="carte-musees__wrapper">
        <LeafletMap
          className="carte-musees__carte"
          center={position}
          zoom={zoom}
        >
          <LayersControl collapsed={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markerMusee}
          </LayersControl>
        </LeafletMap>
        <div className="carte-musees__info-pratiques">
          <h2 className="carte-musees__nom-musee">
            {musee[index - 1].nom_musee}
          </h2>
          <br />
          <p>{musee[index - 1].commentaire_musee}</p>
          <br />
          <CreditsWikipedia
            rightsSourceLink={musee[index - 1].rights_source_link}
            rightsSource={musee[index - 1].rights_source}
            nomSourceLink={musee[index - 1].nom_source_link}
            nomSource={musee[index - 1].nom_source}
            auteurSource={musee[index - 1].auteur_source}
          />
          <br />
          <h3>Horaires</h3>
          <br />
          <FormatDataDB>{musee[index - 1].horaires}</FormatDataDB>
          <br />
          <h3>Accès</h3>
          <br />
          <FormatDataDB>{musee[index - 1].acces}</FormatDataDB>
        </div>
      </div>
    </div>
  );
}

export default CarteMusees;
