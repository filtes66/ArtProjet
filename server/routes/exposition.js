import express from 'express';
import { connection, requestData } from '../bin/mysqlConnection';

var exposition = express.Router();

exposition.get('/:dateExposition', (req, res) => {
    requestData(
      `SELECT id_exposition, nom_exposition, date_format(date_debut, '%Y-%m-%d') as date_debut, date_format(date_fin, '%Y-%m-%d') as date_fin, image_exposition, commentaire_exposition, nom_musee
                  from exposition INNER JOIN musee ON exposition.musee_id = musee.id_musee
                  WHERE` +
        connection.escape(req.params.dateExposition) +
        '<= date_fin AND' +
        connection.escape(req.params.dateExposition) +
        '>= date_debut',
    )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log('catch : ', err));
  });
  
  exposition.get('/presentation/:id_exposition', (req, res) => {
    requestData(
      `SELECT id_exposition, nom_exposition, rights_source, rights_source_link, auteur_source, date_format(date_debut, '%Y-%m-%d') as date_debut, date_format(date_fin, '%Y-%m-%d') 
      as date_fin, image_exposition, commentaire_exposition, nom_musee, adresse
                   from exposition 
                      INNER JOIN source ON exposition.SourceExpo_id = source.id_source 
                      INNER JOIN musee ON exposition.musee_id = musee.id_musee WHERE exposition.id_exposition =` +
        connection.escape(req.params.id_exposition),
    )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log('catch : ', err));
  });

  export { exposition };