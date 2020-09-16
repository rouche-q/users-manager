import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import { Container } from "shards-react"

import TopBar from "./components/TopBar"
import UsersPage from "./pages/UsersPage"
import OrganisationsPage from "./pages/OrganisationsPage"

const App = () => {

  const history = useHistory()

  let goTo = (path) => {
    history.push(path)
  }

  return (
    <Container fluid>
      <TopBar goTo={goTo} />
      <Switch>
        <Route path="/organisations">
          <OrganisationsPage />
        </Route>
        <Route exact path="/">
          <UsersPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
