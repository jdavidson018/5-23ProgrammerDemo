import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "./history";
import DogCreate from "./pages/DogCreate";
import DogDelete from "./pages/DogDelete";
import DogInfo from "./pages/DogInfo";
import DogList from "./pages/DogList";
import DogUpdate from "./pages/DogUpdate";
import Header from "./components/Header/Header";
function App() {
  return (
    <div>
      <Router history={history}>
        <Header />
        <div style={{ marginTop: "70px" }} className="ui main container">
          <Switch>
            <Route path="/" exact component={DogList} />
            <Route path="/dogs/new" exact component={DogCreate} />
            <Route path="/dogs/edit/:id" exact component={DogUpdate} />
            <Route path="/dogs/delete/:id" exact component={DogDelete} />
            <Route path="/dogs/:id" exact component={DogInfo} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
