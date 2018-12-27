import { API } from "aws-amplify";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pokemon from "./Pokemon";
import SelectedPokemon from "./SelectedPokemon";

export default class PokemonSearchList extends Component {
	constructor(props) {
		super(props);
		this.focus = this.focus.bind(this);
		this.state = { selectedPokemon: undefined };
	}

	focus() {
		ReactDOM.findDOMNode(this.refs.addButton).focus();
	}
	pokemonPicked(id) {
		const newPokemon = { pokemonid: id };

		this.setState({ selectedPokemon: newPokemon }, () => this.focus());
	}
	async addOne() {
		await API.post("wish-list-api", "want/", {
			body: this.state.selectedPokemon.pokemonid
		});
		this.props.history.push("/");
	}
	render() {
		return (
			<div className="pokemon-list">
				{this.state.selectedPokemon ? (
					<div className="selected-pokemon-holder">
						<SelectedPokemon
							className="selected-pokemon"
							pokemon={this.state.selectedPokemon}
						/>
						<div className="selected-pokemon-actions">
							<button
								ref="addButton"
								tabIndex="1"
								onClick={() => this.addOne()}
							>
								I want one
							</button>
						</div>
					</div>
				) : null}
				<div className="pokemon-holder">
					{this.props.pokemon.map(p => {
						const pokemon = { pokemonid: p.id };
						return (
							<Pokemon
								pokemonPicked={this.pokemonPicked.bind(this)}
								key={p.id}
								pokemon={pokemon}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
