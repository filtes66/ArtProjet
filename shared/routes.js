import AgendaExpositions from './components/AgendaExpositions/AgendaExpositions';
import CarteMuseesInit from './components/CarteMusees/CarteMuseesInit';
import ListeMouvements from './components/ListeMouvements/ListeMouvements';
import PresentationMouvement from './components/PresentationMouvement/PresentationMouvement';
import PresentationExposition from './components/PresentationExposition/PresentationExposition';
import Home from './components/Home/Home';
import PresentationPeinture from './components/PresentationPeinture/PresentationPeinture';

const Req1 = `SELECT id_oeuvre, nom_oeuvre, nom_peintre, prenom_peintre, date_oeuvre, image_oeuvre, width_oeuvre, height_oeuvre, nom_source, rights_source from oeuvre 
INNER JOIN peintre ON oeuvre.Peintre_id = peintre.id_peintre
INNER JOIN source ON oeuvre.Source_id = source.id_source`;

const Req2 = `SELECT nom_peintre, prenom_peintre, id_oeuvre, nom_oeuvre, image_oeuvre, commentaire_oeuvre, date_oeuvre, nom_source, rights_source from oeuvre INNER JOIN source ON oeuvre.Source_id = source.id_source INNER JOIN peintre ON 
oeuvre.Peintre_id = peintre.id_peintre WHERE oeuvre.id_oeuvre =`;

const Req3 = `SELECT id_exposition, nom_exposition, date_format(date_debut, '%Y-%m-%d') as date_debut, date_format(date_fin, '%Y-%m-%d') 
as date_fin, image_exposition, commentaire_exposition, nom_musee, adresse 
from exposition INNER JOIN musee ON exposition.musee_id = musee.id_musee 
WHERE exposition.top_exposition = 1`;

const Req4 = `SELECT id_exposition, nom_exposition, rights_source, rights_source_link, auteur_source, date_format(date_debut, '%Y-%m-%d') as date_debut, date_format(date_fin, '%Y-%m-%d') 
as date_fin, image_exposition, commentaire_exposition, nom_musee, adresse
             from exposition INNER JOIN source ON exposition.SourceExpo_id = source.id_source 
             INNER JOIN musee ON exposition.musee_id = musee.id_musee
             WHERE exposition.id_exposition =`;

const Req5 =
  'SELECT * from musee INNER JOIN source ON musee.SourceMusee_id = source.id_source';

const Req6 =
  'SELECT id_mouvement, nom_mouvement, image_mouvement from mouvement';

const Req7 = `SELECT nom_peintre, id_oeuvre, nom_oeuvre, nom_mouvement, image_mouvement, image_oeuvre, commentaire_mouvement,
  SUBSTRING(commentaire_oeuvre, 1, 200) AS commentaire from oeuvre INNER JOIN peintre ON oeuvre.Peintre_id = peintre.id_peintre 
  INNER JOIN mouvement ON oeuvre.Mouvement_id = mouvement.id_mouvement where oeuvre.Mouvement_id =`;

const routes = [
  {
    path: '/',
    exact: true,
    id: false,
    fetch: false,
    requestInitialData: Req1,
    component: Home,
  },
  {
    path: '/oeuvre',
    exact: true,
    id: false,
    fetch: true,
    requestInitialData: Req1,
  },
  {
    path: '/oeuvre/:id',
    exact: true,
    id: true,
    fetch: true,
    requestInitialData: Req2,
  },
  {
    path: '/presentation-de-l-oeuvre/:id',
    exact: true,
    id: true,
    fetch: false,
    requestInitialData: Req2,
    component: PresentationPeinture,
  },
  {
    path: '/diaporamaExposition',
    exact: true,
    id: false,
    fetch: true,
    requestInitialData: Req3,
  },
  {
    path: '/agenda',
    exact: true,
    id: false,
    fetch: false,
    requestInitialData: Req3,
    component: AgendaExpositions,
  },
  {
    path: '/diaporamaExposition/nom_exposition',
    exact: true,
    id: false,
    fetch: true,
    requestInitialData: 'SELECT id_exposition, nom_exposition from exposition',
  },
  {
    path: '/diaporamaExposition/:dateExposition',
    exact: true,
    id: false,
    fetch: true,
    requestInitialData: `SELECT id_exposition, nom_exposition, date_format(date_debut, '%Y-%m-%d') as date_debut, date_format(date_fin, '%Y-%m-%d') as date_fin, image_exposition, commentaire_exposition, nom_musee
    from exposition INNER JOIN musee ON exposition.musee_id = musee.id_musee
    WHERE`,
  },
  {
    path: '/presentation-de-l-exposition/:id',
    exact: true,
    id: true,
    fetch: false,
    requestInitialData: Req4,
    component: PresentationExposition,
  },
  {
    path: '/exposition/presentation/:id',
    exact: true,
    id: true,
    fetch: true,
    requestInitialData: Req4,
  },
  {
    path: '/exposition/:dateExposition',
    exact: true,
    id: true,
    fetch: true,
    requestInitialData: `SELECT id_exposition, nom_exposition, date_format(date_debut, '%Y-%m-%d') as date_debut, date_format(date_fin, '%Y-%m-%d') as date_fin, image_exposition, commentaire_exposition, nom_musee
                  from exposition INNER JOIN musee ON exposition.musee_id = musee.id_musee
                  WHERE`,
  },
  {
    path: '/musee',
    exact: true,
    id: false,
    fetch: true,
    requestInitialData: Req5,
  },
  {
    path: '/carte-des-musees',
    exact: true,
    id: false,
    fetch: false,
    requestInitialData: Req5,
    component: CarteMuseesInit,
  },
  {
    path: '/carte-des-musees/:id',
    exact: true,
    id: false,
    fetch: false,
    requestInitialData: Req5,
    component: CarteMuseesInit,
  },
  {
    path: '/musee/nom_musee',
    exact: true,
    id: false,
    fetch: true,
    requestInitialData: 'SELECT id_musee, nom_musee from musee',
  },
  {
    path: '/mouvement',
    exact: true,
    id: false,
    fetch: true,
    requestInitialData: Req6,
  },
  {
    path: '/liste-des-mouvements-artistiques',
    exact: true,
    id: false,
    fetch: false,
    requestInitialData: Req6,
    component: ListeMouvements,
  },
  {
    path: '/mouvement/nom_mouvement',
    exact: true,
    id: false,
    fetch: true,
    requestInitialData: 'SELECT id_mouvement, nom_mouvement from mouvement',
  },
  {
    path: '/mouvement/:id',
    exact: true,
    id: true,
    fetch: true,
    requestInitialData: Req7,
  },
  {
    path: '/presentation-du-mouvement/:id',
    exact: true,
    id: true,
    fetch: false,
    requestInitialData: Req7,
    component: PresentationMouvement,
  },
];

export default routes;
