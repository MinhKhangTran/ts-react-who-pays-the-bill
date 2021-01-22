import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Result from "./pages/Result";
import { useGlobalContext } from "./context/context";

const PrivateRoute = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
  rest: string;
}) => {
  const { liste } = useGlobalContext();
  return (
    <Route
      {...rest}
      render={() => {
        return liste && liste.length >= 2 ? (
          children
        ) : (
          <Redirect to="/"></Redirect>
        );
      }}
    ></Route>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <PrivateRoute path="/result">
          <Result />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
