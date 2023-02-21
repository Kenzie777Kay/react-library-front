import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {FirebaseAppProvider, AuthCheck} from 'reactfire';
import { Home, RestrictedSection, About, TheShelf, SignIn } from './components';
// import '../src/style.css';

import 'firebase/auth';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import { firebaseConfig } from './firebaseConfig';

let myTitle = "The Library"

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig = {firebaseConfig} suspense={true}>
  <Provider store={store}>

    <Router>
      <Switch>

          <Route exact path="/">
            <Home title = {myTitle} />
          </Route>
          <Route exact path="/RestrictedSection">
            <RestrictedSection> </RestrictedSection>
          </Route>
          <Route exact path="/TheShelf">
            <TheShelf> </TheShelf>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/signin">
            <SignIn></SignIn>
          </Route>
      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);