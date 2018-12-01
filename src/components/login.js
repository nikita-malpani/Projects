import React, { Component } from 'react';
import { Router } from 'react-router';
import './login.css'
class LoginComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				username: '',
				password: ''
			},
			errors: {}
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.state.errors = {};
		this.setState({ user: { ...this.state.user, [event.target.name]: event.target.value } });
	}

	handleSubmit(event) {
		//validate the data first
		// console.log('start');
		// console.log(this.state.user);
		// const errors = this.validate(this.state.user);
		// this.setState({ errors });
		// if (Object(this.state.errors).length == 0) {
		// 	console.log('no erros');
		// }
		if (this.state.user.username == 'admin' && this.state.user.password == 'admin') {
			console.log('authorised and show dashbord');
			// this.props.history.push('/');
			fetch('http://127.0.0.1:8080/auth', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					firstParam: 'admin',
					secondParam: 'admin',
				})
			})
				.then((result) => {
					// Get the result
					// If we want text, call result.text()
					return result.json();
				}).then((jsonResult) => {
					// Do something with the result
					console.log(jsonResult);
				})

		} else {
			console.log('invalid credentials');
		}
		// console.log(this.state);
		event.preventDefault();
	}

	validate(user) {
		const errors = {};
		console.log(user.password);
		if (!user.password) {
			errors.password = 'cant be blank';
		}
		//  if(!fields["name"]){
		//      formIsValid = false;
		//      errors["name"] = "Cannot be empty";
		//   }

		//   if(typeof fields["name"] !== "undefined"){
		//      if(!fields["name"].match(/^[a-zA-Z]+$/)){
		//         formIsValid = false;
		//         errors["name"] = "Only letters";
		//      }
		//   }

		//   //Email
		//   if(!fields["email"]){
		//      formIsValid = false;
		//      errors["email"] = "Cannot be empty";
		//   }

		//   if(typeof fields["email"] !== "undefined"){
		//      let lastAtPos = fields["email"].lastIndexOf('@');
		//      let lastDotPos = fields["email"].lastIndexOf('.');

		//      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
		//         formIsValid = false;
		//         errors["email"] = "Email is not valid";
		//       }
		//  }

		return errors;
	}

	render() {
		return (
			<div className="row" id="login">
				<div className="columns <small-12></small-12> large-centered" id="loginform">
					<span id="header">W E L C O M E</span>

					<form onSubmit={this.handleSubmit}>
						<label forname="username">UserName:</label>
						<input type="text" name="username" value={this.state.value} onChange={this.handleChange} />
						<label forname="password">Password:</label>
						<input type="password" name="password" value={this.state.value} onChange={this.handleChange} />
						{this.state.errors.password && <span>error</span>}
						{/*<button type="button" className="success button">Save</button>*/}
						<input type="submit" className="success button" value="Login" />
					</form>
				</div>
			</div>
		);
	}
}

export default LoginComponent;
