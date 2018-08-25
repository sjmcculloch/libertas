import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import NavBar from '../../features/nav/NavBar/NavBar';
import StudentDashboard from '../../features/student/StudentDashboard/StudentDashboard';
import LoadingComponent from '../../app/layout/LoadingComponent';

const AsyncModalManager = Loadable({
  loader: () => import('../../features/modals/ModalManager'),
  loading: LoadingComponent
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <AsyncModalManager />
        <Switch>
          <NavBar />
          <Route exact path="/" component={StudentDashboard} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/students" component={StudentDashboard} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
