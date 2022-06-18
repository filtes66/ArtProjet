import express from 'express';
import { connection, requestData } from '../bin/mysqlConnection';

var mouvement = express.Router();

mouvement.get('/', (req, res) => {
    requestData(
      'SELECT id_mouvement, image_mouvement, nom_mouvement from mouvement',
    )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log('catch : ', err));
  });

mouvement.get('/nom_mouvement', (req, res) => {
    requestData(
        'SELECT id_mouvement, nom_mouvement from mouvement',
    )
    .then((result) => {
        res.json(result);
    })
    .catch((err) => console.log('catch : ', err));
});
  
  mouvement.get('/:id_mouvement', (req, res) => {
    requestData(
      `SELECT nom_peintre, id_oeuvre, nom_oeuvre, nom_mouvement, image_mouvement, image_oeuvre, commentaire_mouvement,
       SUBSTRING(commentaire_oeuvre, 1, 200) AS commentaire from oeuvre INNER JOIN peintre ON oeuvre.Peintre_id = peintre.id_peintre 
       INNER JOIN mouvement ON oeuvre.Mouvement_id = mouvement.id_mouvement where oeuvre.Mouvement_id =` +
        connection.escape(req.params.id_mouvement),
    )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log('catch : ', err));
  });

  export { mouvement };  