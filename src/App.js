import React from "react";
import { Provider } from "react-redux";
import { Auth0Provider} from "@auth0/auth0-react";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  Characters,
  CharacterSingle,
  HousesGeral,
  Quotes,
  SortingHat,
  Spells,
  AddSpell,
  UpdateSpell,
  Error404,
  Forum,
  FavoritesInd,
} from "./pages";

function App() {
  return (
    <Auth0Provider
      domain="tdi-filipa.eu.auth0.com"
      clientId="0ZcD6CKBV30bkvvTrFw7V2lN6qnkuVkZ"
      redirectUri="http://localhost:3000/"
      audience="https://tdi-filipa.eu.auth0.com/api/v2/"
    >
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quotes" component={Quotes} />
            <Route exact path="/characters" component={Characters} />
            <Route path="/characters/:id" component={CharacterSingle} />
            <Route exact path="/houses" component={HousesGeral} />
            <Route exact path="/sortinghat" component={SortingHat} />
            <Route exact path="/spells" component={Spells} />
            <Route exact path="/addspell" component={AddSpell} />
            <Route exact path="/update/:id" component={UpdateSpell} />
            <Route exact path="/forum" component={Forum} />
            <Route exact path="/saved" component={FavoritesInd} />
            <Route component={Error404} />
          </Switch>
        </Router>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
