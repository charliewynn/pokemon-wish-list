import React from "react";
import { Route } from "react-router-dom";

export default ({ component: C, props: cProps, ...rest }) => {
	const props = { ...rest };
	const baseURL = process.env.PUBLIC_URL;
	props.path = `${baseURL}${props.path}`;
	return <Route {...props} render={props => <C {...props} {...cProps} />} />;
};
