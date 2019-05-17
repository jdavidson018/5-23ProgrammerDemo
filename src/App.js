import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import history from "./history";
import DogCreate from "./pages/DogCreate";
import DogDelete from "./pages/DogDelete";
import DogInfo from "./pages/DogInfo";
import DogList from "./pages/DogList";
import DogUpdate from "./pages/DogUpdate";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu";
function App() {
  const items = [
    { id: 1, name: "List" },
    { id: 2, name: "Create" },
    { id: 3, name: "Retrieve" },
    { id: 4, name: "Update" },
    { id: 5, name: "Delete" }
  ];

  return (
    <div className="ui container">
      <HashRouter history={history}>
        <div>
          <Header items={items} />
          <SideMenu />
          <Switch>
            <Route path="/" exact component={DogList} />
            <Route path="/dogs/new" exact component={DogCreate} />
            <Route path="/dogs/edit/:id" exact component={DogUpdate} />
            <Route path="/dogs/delete/:id" exact component={DogDelete} />
            <Route path="/dogs/:id" exact component={DogInfo} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
