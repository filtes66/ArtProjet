import express from 'express';
import { connection, requestData } from '../bin/mysqlConnection';

var oeuvre = express.Router();

  oeuvre.get('/', (req, res) => {
    requestData(`SELECT id_oeuvre, nom_oeuvre, nom_peintre, prenom_peintre, date_oeuvre, image_oeuvre, width_oeuvre, height_oeuvre, nom_source, rights_source from oeuvre 
      INNER JOIN peintre ON oeuvre.Peintre_id = peintre.id_peintre
      INNER JOIN source ON oeuvre.Source_id = source.id_source`)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log('catch : ', err));
  });
  
  oeuvre.get('/:id_oeuvre', (req, res) => {
    requestData(
      `SELECT nom_peintre, prenom_peintre, id_oeuvre, nom_oeuvre, image_oeuvre, commentaire_oeuvre, date_oeuvre, nom_source, rights_source from oeuvre INNER JOIN source ON oeuvre.Source_id = source.id_source INNER JOIN peintre ON 
      oeuvre.Peintre_id = peintre.id_peintre WHERE oeuvre.id_oeuvre =` +
        connection.escape(req.params.id_oeuvre),
    )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log('catch : ', err));
  });

  export { oeuvre };