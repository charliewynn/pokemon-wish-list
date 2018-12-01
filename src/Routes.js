import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";

export default ({ auth }) => (
	<Switch>
		<AppliedRoute path="/" exact component={Home} props={auth} />
		<AppliedRoute path="/signup" exact component={Signup} props={auth} />
		<AppliedRoute path="/login" exact component={Login} props={auth} />

		<Route component={NotFound} />
	</Switch>
);
