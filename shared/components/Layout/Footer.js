import React, { useState, useEffect } from 'react';

import { REACT_APP_BASE_URL } from '../../../constants/environment';
import './Footer.css';
//import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import 'core-js';

function Footer(props) {
  // example of list
  /* let liste = [{ nomItems: [{ id: "", nom: "Agenda expositions", nomListe: "Expositions", pathLink: "/agenda" }] },
   {
     nomItems: [{ nom: 'Impressionnisme', id: 1 }, { nom: 'Gothique', id: 5 }, { nom: 'Art nouveau', id: 6 },
     { nom: 'Baroque', id: 7 }, { nom: 'Classicisme', id: 8 }, { nom: 'Expressionisme', id: 9 },
     { nom: 'Néo-classicisme', id: 11 }, { nom: 'Post-impressionisme', id: 12 },
     { nom: 'Réalisme', id: 13 }, { nom: 'Renaissance', id: 14 }, { nom: 'Rococo', id: 15 },
     { nom: 'Romantisme', id: 16 }, { nom: 'Ukiyo', id: 18 }, { nom: 'Symbolisme', id: 19 }]
   },
   {
     nomItems: [{ nom: 'Musée du Louvre', id: 1 }, { nom: "Musée d'Orsay", id: 2 },
     { nom: 'Le Grand Palais', id: 3 }]
   }]*/

  console.log('footer');
  let [selectedList, setSelectedList] = useState({
    selected: [false, false, false],
  });
  let [listes, setListes] = useState([]);
  let lists = [];
  const listesData = [
    {
      nomColonne: 'nom_exposition',
      nomListe: 'Expositions',
      pathFetch: '/diaporamaExposition/nom_exposition',
    },
    {
      nomColonne: 'nom_mouvement',
      nomListe: 'Mouvements picturaux',
      pathFetch: '/mouvement/nom_mouvement',
    },
    {
      nomColonne: 'nom_musee',
      nomListe: 'Musées de Paris',
      pathFetch: '/musee/nom_musee',
    },
  ];

  useEffect(() => {
    console.log('useeffect footer');
    async function createListe(response, nomColonne) {
      let nomItems = [];
      //    let {id_mouvement, id_musee} = response;
      switch (nomColonne) {
        case 'nom_exposition':
          lists = [
            ...lists,
            {
              nomListe: 'Expositions',
              nomItems: [{ nom: 'Agenda expositions', id: '' }],
              pathLink: '/agenda'
            },
          ];
          break;
        case 'nom_mouvement':
          response.map(({ nom_mouvement, id_mouvement }) => {
            nomItems = [...nomItems, { nom: nom_mouvement, id: id_mouvement }];
            return nomItems;
          });
          lists = [
            ...lists,
            {
              nomListe: 'Mouvements picturaux',
              nomItems: nomItems,
              pathLink: '/presentation-du-mouvement/'
            },
          ];
          break;
        case 'nom_musee':
          response.map(({ nom_musee, id_musee }) => {
            nomItems = [...nomItems, { nom: nom_musee, id: id_musee }];
            return nomItems;
          });
          lists = [
            ...lists,
            {
              nomListe: 'Musée de Paris',
              nomItems: nomItems,
              pathLink: '/carte-des-musees/'
            },
          ];
          break;
        default:
          console.log('default nomColonne');
      }
    }

    async function createListes(listesData) {
      try {
        for (let i = 0; i < listesData.length; i++) {
          let response = await fetch(
            `${REACT_APP_BASE_URL}${listesData[i].pathFetch}`,
          );
          response = await response.json();
          await createListe(response, listesData[i].nomColonne);
          console.log('list', lists);
        }
        setListes(lists);
      } catch (err) {
        alert(err);
      }
    }
    createListes(listesData);
  }, []);

  function setClassName(i) {
    const { selected } = selectedList;
    selected[i] = !selected[i];
    setSelectedList({ ...selectedList, selected: selected });
  }

  function RenderListItems({ pathLink, nomItems, nbDebut, nbItems }) {
    console.log('renderlistes footer');
    let items = [];
    console.log(parseInt(nomItems[0].id));
    for (let i = 0; i < nbItems; i++) {
      items.push(
        <li key={i} className="layout-footer__list__item">
          <Link
            className="layout-footer__image"
            to={pathLink + nomItems[nbDebut + i].id}
          >
            {nomItems[nbDebut + i].nom}
          </Link>
        </li>,
      );
    }
    return <ul className="layout-footer__list">{items}</ul>;
  }

  if (listes.length === 0) return null;
  const { selected } = selectedList;

  return (
    <div className="layout-footer">
      <div
        className={`${!selected[0] ? 'layout-footer__separator plus' : 'minus'
          }`}
      >
        <div
          className={`${!selected[0]
            ? 'layout-footer__title layout-footer__plus'
            : 'layout-footer__title layout-footer__minus'
            }`}
          onClick={() => setClassName(0)}
        >
          {listes[0].nomListe}
        </div>
        <div
          className={`${!selected[0]
            ? 'layout-footer__list--closed'
            : 'layout-footer__list--open'
            }`}
        >
          <RenderListItems
            pathLink={listes[0].pathLink}
            nomItems={listes[0].nomItems}
            nbDebut={0}
            nbItems={1}
          />
        </div>
      </div>

      <div
        className={`${!selected[1] ? 'layout-footer__separator plus' : 'minus'
          }`}
      >
        <div
          className={`${!selected[1]
            ? 'layout-footer__title layout-footer__plus'
            : 'layout-footer__title layout-footer__minus'
            }`}
          onClick={() => setClassName(1)}
        >
          {listes[1].nomListe}
        </div>
        <div
          className={`${!selected[1]
            ? 'layout-footer__list--closed'
            : 'layout-footer__list--open'
            }`}
        >
          <RenderListItems
            pathLink={listes[1].pathLink}
            nomItems={listes[1].nomItems}
            nbDebut={0}
            nbItems={4}
          />
        </div>
      </div>

      <div
        className={`${!selected[1]
          ? 'layout-footer__list--closed'
          : 'layout-footer__list--open'
          }`}
      >
        <RenderListItems
          pathLink={listes[1].pathLink}
          nomItems={listes[1].nomItems}
          nbDebut={4}
          nbItems={5}
        />
      </div>

      <div
        className={`${!selected[1]
          ? 'layout-footer__separator layout-footer__list--closed'
          : 'layout-footer__separator layout-footer__list--open'
          }`}
      >
        <RenderListItems
          pathLink={listes[1].pathLink}
          nomItems={listes[1].nomItems}
          nbDebut={9}
          nbItems={4}
        />
      </div>
    </div>
  );
}

export default Footer;
