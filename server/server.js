import 'core-js';
import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import serialize from "serialize-javascript"
import routes from '../shared/routes';
import App from '../shared/App';
import { connection } from './bin/mysqlConnection';
import { requestData } from './bin/mysqlConnection';

if (typeof PhusionPassenger !== 'undefined') {
  PhusionPassenger.configure({ autoInstall: false });
}

const app = express();

app.use(cors());

app.use(express.static('public'));

app.get('/login-user/', (req, res) => {
  const { login_pwd } = req.query;
  if (login_pwd === 'fil@') {
    res.sendStatus(200);
  }
});

app.get('/*', (req, res) => {
  console.log('/* :', req.url);
  const handleRoute = (pathname) => {
    let matchRoute;
    let { requestInitialData, id, fetch } = routes.find(({ path, exact }) => {
      matchRoute = matchPath({ path: path, exact }, pathname);
      console.log('matchroute : ', matchRoute);
      return matchRoute ? matchRoute.pattern.exact : false;
    });
    return { matchRoute, requestInitialData, id, fetch };
  };

  let { matchRoute, requestInitialData, id, fetch } = handleRoute(req.url);
  let params = matchRoute.params;
  console.log('matchroute : ', matchRoute);
  let request;

  if (matchRoute) {
    console.log('if else fetch');
    if (id) {
      if (params.dateExposition) {
        requestInitialData =
          requestInitialData +
          connection.escape(params.dateExposition) +
          '<= date_fin AND' +
          connection.escape(params.dateExposition) +
          '>= date_debut';
      } else {
        requestInitialData = requestInitialData + connection.escape(params.id);
      }
    }
    if (fetch) {
      console.log('if fetch : ', requestInitialData);
      requestData(requestInitialData)
        .then((result) => {
          res.json(result);
        })
        .catch((err) => console.log('catch : ', err));
    }
    request = requestData(requestInitialData);
  } else if (!matchRoute) {
    request = () =>
      new Promise((resolve, reject) => {
        return resolve(1);
      });
  }
  console.log('request');
  if (!fetch) {
    request
      .then((initialData) => {
        res.write(`<!DOCTYPE html>
                        <html>
                        <head>
                            <meta charset="utf-8">
                            <title>React SSR</title>
                                <script>
                                    window.__INITIAL_DATA__ = ${serialize(
          initialData,
        )}
                                </script>
                                <script async src="http://localhost:4000/bundle-front.js"></script>
                            <link rel="stylesheet" type="text/css" href="http://localhost:4000/main.css" />
                        </head>
                        <body><div id="app">`);

        const reactDom = renderToNodeStream(
          <App SSRData={initialData} location={req.url} />,
        );
        reactDom.pipe(res, { end: false });
        reactDom.on('end', () => {
          res.write(`</div></body></html>`);
          res.end();
        });
      })
      .catch((err) => console.log('catch : ', err));
  }
});

if (typeof PhusionPassenger !== 'undefined') {
  app.listen('passenger');
} else {
  app.listen(4000);
  console.log('Paints server listening on port 4000');
}
