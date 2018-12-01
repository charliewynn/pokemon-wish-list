import { Auth } from "aws-amplify";
import React, { Component } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authed: false,
			isAuthing: true
		};
	}
	authChange = newAuth => {
		this.setState({ authed: newAuth });
	};

	async componentDidMount() {
		try {
			await Auth.currentSession();
			this.authChange(true);
		} catch (e) {
			if (e !== "No current user") {
				alert(e);
			}
		}
		this.setState({ isAuthing: false });
	}
	logout = async () => {
		await Auth.signOut();
		this.authChange(false);
	};
	renderLoadingAuth() {
		return <div>Loading</div>;
	}
	render() {
		if (this.state.isAuthing) return this.renderLoadingAuth();
		const { authed } = this.state;
		const { authChange } = this;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<Link to="/">Home</Link>
					{authed ? (
						<div className="right">
							<button onClick={this.logout}>Logout</button>
						</div>
					) : (
						<div className="right">
							<Link to="/signup">Signup</Link>
							<Link to="/login">Login</Link>
						</div>
					)}
				</header>
				<Routes auth={{ authed, authChange }} />
			</div>
		);
	}
}

export default App;
