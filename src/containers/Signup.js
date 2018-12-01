import { Auth } from "aws-amplify";
import React, { Component } from "react";

export default class Signup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			confirm: "",
			confirmCode: "",
			isLoading: false,
			newGuy: null
		};
	}

	validateForm() {
		return (
			this.state.email.length > 0 &&
			this.state.password.length > 0 &&
			this.state.password === this.state.confirm
		);
	}

	validateConfirmationForm() {
		return this.state.confirmCode.length > 0;
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	handleSubmit = async event => {
		event.preventDefault();

		this.setState({ isLoading: true });
		try {
			const newGuy = await Auth.signUp({
				username: this.state.email,
				password: this.state.password
			});
			this.setState({
				newGuy
			});
		} catch (e) {
			if (e.code === "UsernameExistsException") {
				try {
					const newGuy = await Auth.resendSignUp(this.state.email);
					alert(
						"That username already exists - resending confirmation code (but the you need the original password to login)"
					);

					this.setState({
						newGuy
					});
				} catch (e) {
					alert(e.message);
				}
			} else {
				alert(e.message);
			}
		}

		this.setState({ isLoading: false });
	};

	handleConfirmationSubmit = async event => {
		event.preventDefault();
		this.setState({ isLoading: true });

		try {
			await Auth.confirmSignUp(this.state.email, this.state.confirmCode);
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
	renderSignUp() {
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
							id="email"
						/>
					</div>
					<div>
						<label>Password</label>
						<input
							value={this.state.password}
							onChange={this.handleChange}
							type="password"
							id="password"
						/>
					</div>
					<div>
						<label>Confirm Password</label>
						<input
							value={this.state.confirm}
							onChange={this.handleChange}
							type="password"
							id="confirm"
						/>
					</div>
					<button disabled={!this.validateForm()} type="submit">
						Login
					</button>
				</form>
			</div>
		);
	}
	renderConfirmCode() {
		return (
			<div className="Login">
				<form onSubmit={this.handleConfirmationSubmit}>
					<label>Confirmation Code</label>
					<input
						value={this.state.confirmCode}
						onChange={this.handleChange}
						type="password"
						id="confirmCode"
					/>
					<button disabled={!this.validateConfirmationForm()} type="submit">
						Login
					</button>
				</form>
			</div>
		);
	}
	render() {
		if (this.state.isLoading) return this.renderLoading();
		return this.state.newGuy === null
			? this.renderSignUp()
			: this.renderConfirmCode();
	}
}
