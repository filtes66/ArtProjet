/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { screen, render, act } from '@testing-library/react';
import DiaporamaExpositions from './DiaporamaExpositions';
import { StaticRouter } from 'react-router-dom/server';
let mockData = [
  {
    adresse: 'Rue De Rivoli, Paris 75001',
    commentaire_exposition:
      'Le Musée Jacquemart-André présente une grande rétrospective de Joseph Turner.',
    date_debut: '2020-03-13',
    id_exposition: 1,
    image_exposition: 'Turner.jpg',
    nom_exposition: 'Turner',
    nom_musee: 'Musée du Louvre',
  },
  {
    adresse: 'Rue De Rivoli, Paris 75001',
    commentaire_exposition:
      "À partir des années 1880, la Méditerranée séduit les artistes. Ils délaissent Paris ou le Nord et se réunissent le long du littoral, de Collioure à Saint-Tropez. Ils y élaborent une nouvelle conception de la lumière et de la couleur. Le parcours d'exposition, de l’impressionnisme à la modernité, révèle le lien entre la création artistique et ces rives méditerranéennes. Une invitation à plonger dans les chefs-d’œuvre d’une vingtaine d’artistes dont Renoir, Monet, Pissarro, Matisse, Signac, Derain, Vlaminck, Dufy et Chagall./ /Le cycle de projection accueille également une immersion dans L'infini bleu de Klein.",
    date_debut: '2020-02-28',
    date_fin: '2021-01-03',
    id_exposition: 2,
    image_exposition: 'Monet-Renoir-Chagall-expo.jpg',
    nom_exposition: 'Monet, Renoir... Chagall — Voyages en Méditerranée',
    nom_musee: 'Musée du Louvre',
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

describe('DiaporamaExposition', () => {
  render(
    <StaticRouter>
      <DiaporamaExpositions
        height="375px"
        oeuvreData={mockData}
        width="auto"
        isBrowser={false}
      />
    </StaticRouter>,
  );

  expect(screen.getByText(/Turner/gi).textContent).toBe('Turner');
});
