import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
	state = {
		persons: [
			{ id: '111', name: 'Ru', age: 29 },
			{ id: '222', name: 'Ra', age: 34 },
			{ id: '333', name: 'Ma', age: 59 }
		],
		showPersons: false
	};

	switchNameHandler = (newName) => {
		// THIS DOES NOT WORK!
		// this.state.persons[0].name = 'Ruben';

		this.setState({
			persons: [
				{ name: newName, age: 29 },
				{ name: 'Ra', age: 34 },
				{ name: 'Ma', age: 55 }
			]
		});
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => p.id === id);

		const person = { ...this.state.persons[personIndex] };

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({ persons });
	};

	togglePersonHandler = () => {
		this.setState({
			showPersons: !this.state.showPersons
		});
	};

	deletePersonHandler = (index) => {
		const persons = [...this.state.persons];
		persons.splice(index, 1);
		this.setState({
			persons
		});
	};

	render() {
		const style = {
			backgroundColor: 'green',
			color: 'white',
			border: '1px solid blue',
			padding: '16px',
			cursor: 'pointer',
			':hover': {
				backgroundColor: 'lightgreen',
				color: 'black'
			}
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => (
						<Person
							key={person.id}
							name={person.name}
							age={person.age}
							click={() => this.deletePersonHandler(index)}
							changed={(event) =>
								this.nameChangedHandler(event, person.id)
							}
						/>
					))}
				</div>
			);

			style.backgroundColor = 'red';
			style[':hover'] = {
				backgroundColor: 'salmon',
				color: 'black'
			};
		}

		const classes = [];

		if (this.state.persons.length <= 2) {
			classes.push('red');
		}

		if (this.state.persons.length <= 1) {
			classes.push('bold');
		}

		return (
			<StyleRoot>
				<div className="App">
					<h1> Hi, I'm a React App</h1>
					<p className={classes.join(' ')}>This is really working!</p>
					<button
						style={style}
						/* onClick={this.switchNameHandler.bind(this, 'Ruben')} */
						onClick={this.togglePersonHandler}
					>
						Switch Name
					</button>
					{persons}
				</div>
			</StyleRoot>
		);
	}
}

export default Radium(App);
