import express from 'express';
import { requestData } from '../bin/mysqlConnection';

var diaporamaExposition = express.Router();

diaporamaExposition.get('/', (req, res) => {
    requestData(`SELECT id_exposition, nom_exposition, date_format(date_debut, '%Y-%m-%d') as date_debut, date_format(date_fin, '%Y-%m-%d') 
      as date_fin, image_exposition, commentaire_exposition, nom_musee, adresse 
      from exposition INNER JOIN musee ON exposition.musee_id = musee.id_musee 
      WHERE exposition.top_exposition = 1`)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log('catch  : ', err));
  });

  diaporamaExposition.get('/nom_exposition', (req, res) => {
    requestData(
        'SELECT id_exposition, nom_exposition from exposition',
    )
    .then((result) => {
        res.json(result);
    })
    .catch((err) => console.log('catch : ', err));
});
  export { diaporamaExposition };