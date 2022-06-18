import React from 'react';

export default function CreditsWikipedia(props) {
  const linkStyle = { color: '#f35858' };
  return (
    <div>
      <a href={props.rightsSourceLink} style={linkStyle}>
        Contenu soumis à la licence {props.rightsSource}
      </a>
      . Source : Article
      <em>
        <a href={props.nomSourceLink} style={linkStyle}>
          {' '}
          {props.nomSource}{' '}
        </a>
      </em>
      de (
      <a href={props.auteurSource} style={linkStyle}>
        auteurs
      </a>
      ). Extrait de l'article.
    </div>
  );
}
