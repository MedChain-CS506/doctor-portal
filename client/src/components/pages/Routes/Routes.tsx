import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

//* PAGES
import Landing from '../Landing';
import NewPatient from '../NewPatient';
import Profile from '../Profile';
import NotFound from '../NotFound';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    margin: 'auto',
    overflow: 'hidden',
    padding: '1rem 2rem',
  },
});

interface RoutesProps {
    signedIn: boolean
}

const Routes: React.FC<RoutesProps> = ({ signedIn }) => {
  const classes = useStyles();
  
  return (
    <Router>
      <div className={classes.container}>
        <Switch>
          <Route exact path="/">
            <Landing signedIn={signedIn} />
          </Route>
          <Route exact path="/patient-form">
            <NewPatient signedIn={signedIn} />
          </Route>
          <Route exact path="/profile/:id">
            <Profile signedIn={signedIn} />
          </Route>
          <Route>
            <NotFound />
          </Route>
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;