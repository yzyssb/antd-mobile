import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexP from './routes/IndexP';
import SecondP from './routes/SecondP';

import App from './routes/App';

function RouterConfig({ history }) {

  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={IndexP} />
          <Route path="/secondP" exact component={SecondP} />
          <Route path="*" render={() => <Redirect to="IndexP" />} />
        </Switch>
      </App>
    </Router>
  );
}

export default RouterConfig;
