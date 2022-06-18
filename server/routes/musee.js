import express from 'express';
import { requestData } from '../bin/mysqlConnection';

var musee = express.Router();

musee.get('/', (req, res) => {
    requestData(
      'SELECT * from musee INNER JOIN source ON musee.SourceMusee_id = source.id_source',
    )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log('catch : ', err));
  });

  musee.get('/nom_musee', (req, res) => {
    requestData(
        'SELECT id_musee, nom_musee from musee',
    )
    .then((result) => {
        res.json(result);
    })
    .catch((err) => console.log('catch : ', err));
});

  export { musee };