import React, { Component } from "react";
import { API } from "aws-amplify";

export default class Home extends Component {
	constructor(props) {
		super(props);
		console.log("pr", props);
	}
	componentWillReceiveProps(newProps) {
		console.log("new", newProps);
		if (newProps && newProps.authed) {
			this.getPokemon();
		}
	}
	componentDidMount() {
		if (this.props.authed) {
			this.getPokemon();
		}
	}
	getPokemon() {
		console.log("should get pokemon");
		API.get("wish-list-api", "query/");
	}
	renderAuth() {
		return <div>auth</div>;
	}
	render() {
		return (
			<div className="Home">
				<div className="lander">
					<h1>Pokemon Wish List</h1>
					{this.props.authed ? (
						this.renderAuth()
					) : (
						<p>Simple tracker for pokemon you want to catch</p>
					)}
				</div>
			</div>
		);
	}
}
