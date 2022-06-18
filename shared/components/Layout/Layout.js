import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

function Layout(props) {
  console.log('layout');
  return (
    <div className="layout">
      <Header />
      <div className="layout_body">{props.children}</div>
      <Footer />
    </div>
  );
}

export { Layout };
