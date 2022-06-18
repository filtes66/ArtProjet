import React from 'react';
import 'core-js';

function FormatDataDB(props) {
  return props.children
    .split('/')
    .map((child, index) => <p key={index}>{child}</p>);
}

export function FormatData(props) {
  let tab1 = [];
  let tab = props.children.split(' ');
  let length_tab = tab.length - 1;
  for (let i = 0; i < length_tab; i++) {
    tab1 = [tab1 + tab[i] + ' '];
  }

  return <p>{tab1}...</p>;
}

export default FormatDataDB;
