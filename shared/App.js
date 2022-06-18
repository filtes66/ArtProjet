import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import AuthProvider from './context/AuthContext';
import { Layout } from './components/Layout/Layout';
import LoginRoute from './components/Layout/LoginRoute';
import './App.css';
import routes from './routes';
import LoginPage from './components/Login/LoginPage';

if (__isBrowser__) {
  window.nom_de_domaine = 'http//localhost:4000';
}

function LayoutComponent({ component: Component, layout: Layout, SSRData }) {
  return (
    <Layout>
      <Component SSRData={SSRData} />
    </Layout>
  );
}

function AppRoutes(props) {
  console.log('approutes');
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {routes.map((route, index) => (
        <Route
          key={index}
          exact
          path={route.path}
          element={
            <LoginRoute>
              <LayoutComponent
                component={route.component}
                layout={Layout}
                SSRData={props.SSRData}
              />
            </LoginRoute>
          }
        />
      ))}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

function App(props) {
  return props.location ? (
    <AuthProvider>
      <StaticRouter location={props.location} context={{}}>
        <AppRoutes SSRData={props.SSRData} />
      </StaticRouter>
    </AuthProvider>
  ) : (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
