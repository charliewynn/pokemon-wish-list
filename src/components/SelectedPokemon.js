import React, { Component } from "react";
import Pokedex from "../pokemondata";
import "../pokemon.css";

export default class SelectedPokemon extends Component {
	render() {
		const pokemon = Pokedex[this.props.pokemon.pokemonid - 1];
		const wanted = this.props.pokemon.wanted;
		return (
			<div className="pokemon">
				<img alt={pokemon.name + " image"} src={pokemon.img} />
				<div>{pokemon.name}</div>

				{wanted > 1 ? <div>{wanted} wanted</div> : null}
			</div>
		);
	}
}
