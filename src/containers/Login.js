import { Auth } from "aws-amplify";
import React, { Component } from "react";
//import "./Login.css";

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			isLoading: false
		};
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	handleChange = event => {
		this.setState({
			[event.target.type]: event.target.value
		});
	};

	handleSubmit = async event => {
		event.preventDefault();

		try {
			this.setState({ isLoading: true });
			await Auth.signIn(this.state.email, this.state.password);
			this.props.authChange(true);
			this.props.history.push("/");
		} catch (e) {
			alert(e.message);
			this.setState({ isLoading: false });
		}
	};

	renderLoading() {
		return <div>Loading</div>;
	}
	render() {
		if (this.state.isLoading) return this.renderLoading();
		return (
			<div className="Login">
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Email</label>
						<input
							autoFocus
							type="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label>Password</label>
						<input
							value={this.state.password}
							onChange={this.handleChange}
							type="password"
						/>
					</div>
					<button disabled={!this.validateForm()} type="submit">
						Login
					</button>
				</form>
			</div>
		);
	}
}
