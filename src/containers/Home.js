import React, { Component } from "react";
import { API } from "aws-amplify";
import PokemonList from "../components/PokemonList";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { pokemon: [] };
	}
	componentWillReceiveProps(newProps) {
		if (newProps && newProps.authed && !this.props.authed) {
			this.getPokemon();
		}
	}
	componentDidMount() {
		if (this.props.authed) {
			this.getPokemon();
		}
	}

	async getPokemon() {
		const results = await API.get("wish-list-api", "query/");
		this.setState({ pokemon: results.Items });
	}
	renderAuth() {
		return (
			<div>
				<PokemonList pokemon={this.state.pokemon} />
			</div>
		);
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
