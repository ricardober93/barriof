import React from 'react';
import './App.css';
import { Route, Switch } from "wouter";
import Navbar from 'components/Navbar'
import { routes } from 'routes'
function App() {
  return (
    <div>

      <Navbar />
      <Switch>
        {
          routes.map(route => (
            <Route path={route.path} component={route.component} />
          ))
        }
      </Switch>
    </div>
  );
}

export default App;
