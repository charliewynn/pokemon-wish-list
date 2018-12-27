import React, { Component } from "react";
import Pokedex from "../pokemondata";
import PokemonSearchList from "../components/PokemonSearchList";
import "../pokemon.css";

export default class Add extends Component {
	constructor(props) {
		super(props);
		this.state = { search: "" };
	}
	handleSearch(event) {
		this.setState({
			[event.target.id]: event.target.value
		});
	}
	render() {
		let foundPokemon = [];
		if (this.state.search.length >= 2) {
			foundPokemon = Pokedex.filter(
				p => p.name.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0
			);
		}
		return (
			<div>
				<div>Add a pokemon</div>
				<input
					tabIndex="1"
					autoFocus
					type="text"
					id="search"
					onChange={this.handleSearch.bind(this)}
				/>
				{foundPokemon.length ? (
					<PokemonSearchList
						history={this.props.history}
						pokemonPicked={id => this.pokemonPicked(id)}
						pokemon={foundPokemon}
					/>
				) : null}
			</div>
		);
	}
}
