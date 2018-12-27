import Amplify from "aws-amplify";
import awsconfig from "./awsconfig";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

Amplify.configure({
	Auth: {
		mandatorySignIn: true,
		region: awsconfig.cognito.REGION,
		userPoolId: awsconfig.cognito.USER_POOL_ID,
		identityPoolId: awsconfig.cognito.IDENTITY_POOL_ID,
		userPoolWebClientId: awsconfig.cognito.APP_CLIENT_ID
	},
	API: {
		endpoints: [
			{
				name: "wish-list-api",
				endpoint: awsconfig.apiGateway.URL,
				region: awsconfig.apiGateway.REGION
			}
		]
	}
});
ReactDOM.render(
	<Router basename={process.env.PUBLIC_URL}>
		<App />
	</Router>,
	document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
