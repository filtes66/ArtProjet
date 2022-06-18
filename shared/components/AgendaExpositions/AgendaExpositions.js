import React, { useState, useEffect } from 'react';
import Calendrier from '../Calendrier/Calendrier';
import ListeExpositions from '../ListeExpositions/ListeExpositions';
import DiaporamaExpositions from '../DiaporamaExpositions/DiaporamaExpositions';
import fetchData from '../../hooks/fetchData';
import { REACT_APP_BASE_URL } from '../../../constants/environment';
import './AgendaExpositions.css';

function AgendaExpositions(props) {
  let [exposition, setExposition] = useState([]);
  let dateExposition = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    fetchData(
      `${REACT_APP_BASE_URL}/exposition/${dateExposition}`,
      setExposition,
    );
  }, []);

  function fetchDataOnDayClick(day) {
    fetchData(`${REACT_APP_BASE_URL}/exposition/${day}`, setExposition);
  }

  return (
    <>
      <div className="liste-expositions__diaporama-wrapper">
        <DiaporamaExpositions
          height="375px"
          width="auto"
          oeuvreData={props.SSRData}
        />
      </div>
      <div className="liste-expositions__mainWrapper-flex">
        <div className="liste-expositions__flex-column">
          <ListeExpositions exposition={exposition} />
        </div>
        <div className="liste-expositions__calendrier-wrapper">
          <div className="liste-expositions__calendrier">
            <Calendrier onDayClick={fetchDataOnDayClick} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AgendaExpositions;
