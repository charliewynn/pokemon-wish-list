import React, { Component } from "react";
import Pokedex from "../pokemondata";
import "../pokemon.css";

export default class Pokemon extends Component {
	handleClick(id) {
		this.props.pokemonPicked(id);
	}
	handleKey(event, id) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			this.handleClick(id);
		}
	}
	render() {
		const pokemon = Pokedex[this.props.pokemon.pokemonid - 1];
		const wanted = this.props.pokemon.wanted;
		return (
			<div
				tabIndex="1"
				className="pokemon"
				onKeyUp={event => this.handleKey(event, pokemon.id)}
				onClick={() => this.handleClick(pokemon.id)}
			>
				<img alt={pokemon.name + " image"} src={pokemon.img} />
				<div>{pokemon.name}</div>

				{wanted > 1 ? <div>{wanted} wanted</div> : null}
			</div>
		);
	}
}
