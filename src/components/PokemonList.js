import ReactDOM from "react-dom";
import { API } from "aws-amplify";
import React, { Component } from "react";
import Pokemon from "./Pokemon";
import SelectedPokemon from "./SelectedPokemon";

export default class PokemonList extends Component {
	constructor(props) {
		super(props);
		this.focus = this.focus.bind(this);
		this.state = { selectedPokemon: undefined };
	}
	componentWillReceiveProps(newProps) {
		this.setState({ pokemon: newProps.pokemon });
	}
	pokemonPicked(id) {
		const foundPokemon = this.props.pokemon.filter(p => p.pokemonid === id);
		if (foundPokemon.length) {
			this.setState({ selectedPokemon: foundPokemon[0] }, () => this.focus());
		}
	}

	focus() {
		ReactDOM.findDOMNode(this.refs.caughtButton).focus();
	}
	async wantAnother() {
		const pokemonid = this.state.selectedPokemon.pokemonid;
		const results = await API.post("wish-list-api", "want/", {
			body: pokemonid
		});
		const currPokemon = this.state.pokemon.filter(
			p => p.pokemonid === results.pokemonid
		);
		if (currPokemon && currPokemon.length) {
			currPokemon[0].wanted = results.wanted;
		} else {
			//they should be sorted on the server, but since we may have manually added one we should resort
			this.state.pokemon.push(results);
			this.state.pokemon = this.state.pokemon.sort(
				(a, b) => a.pokemonid - b.pokemonid
			);
		}
		this.setState({ pokemon: this.state.pokemon });
	}
	async caughtOne() {
		const pokemonid = this.state.selectedPokemon.pokemonid;
		const results = await API.post("wish-list-api", "got/", {
			body: pokemonid
		});
		const updateState = {};
		if (results.pokemon) {
			const foundPokemon = this.state.pokemon.filter(
				p => p.pokemonid === results.pokemon.pokemonid
			);
			if (foundPokemon.length) {
				foundPokemon[0].wanted = results.pokemon.wanted;
			}
		} else {
			this.state.pokemon = this.state.pokemon.filter(
				p => p.pokemonid !== pokemonid
			);
			updateState.selectedPokemon = undefined;
		}
		updateState.pokemon = this.state.pokemon;

		this.setState(updateState);
	}
	render() {
		if (this.props.pokemon.length === 0) {
			return <div>You don't have any wanted Pokemon</div>;
		}
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
								tabIndex="1"
								ref="caughtButton"
								onClick={() => this.caughtOne()}
							>
								I caught one
							</button>
							<button tabIndex="1" onClick={() => this.wantAnother()}>
								I want another one
							</button>
						</div>
					</div>
				) : null}
				<div className="pokemon-holder">
					{this.state.pokemon.map(p => (
						<Pokemon
							pokemonPicked={id => this.pokemonPicked(id)}
							key={p.pokemonid}
							pokemon={p}
						/>
					))}
				</div>
			</div>
		);
	}
}
