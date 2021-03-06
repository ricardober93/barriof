import React from 'react';
import './App.css';
import { Route, Switch } from "wouter";
import Navbar from 'components/Navbar'
import { routes } from 'routes'
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        {
          routes.map(route => (
            <Route key={route.path} path={route.path} component={route.component} />
          ))
        }
      </Switch>
    </>
  );
}

export default App;
