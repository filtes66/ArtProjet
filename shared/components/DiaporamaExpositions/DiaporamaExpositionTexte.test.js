/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import DiaporamaExpositionTexte from './DiaporamaExpositionTexte';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('text checked', () => {
  // Teste le premier affichage

  const { getByText } = render(
    <DiaporamaExpositionTexte
      adresse="Rue De Rivoli, Paris 75001"
      commentaire_exposition="Le Musée Jacquemart-André présente une grande rétrospective de Joseph Mallord William Turner (1775-1851)./Le plus grand représentant de l'âge d’or de l'aquarelle anglaise exploita les effets de lumière et de transparence sur les paysages anglais et les lagunes vénitiennes./La Tate Britain de Londres, qui abrite la plus grande collection de Turner au monde, prête pour l'occasion 60 aquarelles et environ 10 peintures à l'huile, dont certaines jamais présentées en France."
      date_debut="2020-03-13"
      date_fin="2021-01-11"
      image_exposition="Turner-expo.jpg"
      nom_exposition="Turner"
      nom_musee="Musée du Louvre"
    />,
    container,
  );
  //const label = container.querySelector('p');
  //expect(label.textContent).toBe('Turner');
  expect(getByText(/TOP/i).textContent).toBe('TOP 4 expositions');
});

test('text checked', () => {
  render(
    <DiaporamaExpositionTexte
      adresse="Rue De Rivoli, Paris 75001"
      commentaire_exposition="Le Musée Jacquemart-André présente une grande rétrospective de Joseph Mallord William Turner (1775-1851)./Le plus grand représentant de l'âge d’or de l'aquarelle anglaise exploita les effets de lumière et de transparence sur les paysages anglais et les lagunes vénitiennes./La Tate Britain de Londres, qui abrite la plus grande collection de Turner au monde, prête pour l'occasion 60 aquarelles et environ 10 peintures à l'huile, dont certaines jamais présentées en France."
      date_debut="2020-03-13"
      date_fin="2021-01-11"
      image_exposition="Turner-expo.jpg"
      nom_exposition="Turner"
      nom_musee="Musée du Louvre"
    />,
  );
  const input = screen.getByText(/TOP/i);
  // expect(input).toBeInTheDocument();
});
