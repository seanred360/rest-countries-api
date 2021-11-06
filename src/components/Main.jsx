import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleCountryPage from "./pages/SingleCountryPage";
import NotFound from "./pages/NotFound";

const Main = () => {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/not-found" component={NotFound}></Route>
      <Route
        path="/:id"
        render={(props) => <SingleCountryPage {...props} />}
      ></Route>
      <Route exact path="/" component={HomePage}></Route>
    </Switch>
  );
};

export default Main;
