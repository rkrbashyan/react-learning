import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ id: '111', name: 'Ru', age: 29 },
			{ id: '222', name: 'Ra', age: 34 },
			{ id: '333', name: 'Ma', age: 59 },
		],
		showPersons: false,
	};

	switchNameHandler = newName => {
		// THIS DOES NOT WORK!
		// this.state.persons[0].name = 'Ruben';

		this.setState({
			persons: [{ name: newName, age: 29 }, { name: 'Ra', age: 34 }, { name: 'Ma', age: 55 }],
		});
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => p.id === id);

		const person = { ...this.state.persons[personIndex] };

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({
			persons: persons,
		});
	};

	togglePersonHandler = () => {
		this.setState({
			showPersons: !this.state.showPersons,
		});
	};

	deletePersonHandler = index => {
		const persons = [...this.state.persons];
		persons.splice(index, 1);
		this.setState({
			persons: persons,
		});
	};

	render() {
		const style = {
			backgroundColor: 'white',
			border: '1px solid blue',
			padding: '16px',
			cursor: 'pointer',
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								key={person.id}
								name={person.name}
								age={person.age}
								click={() => this.deletePersonHandler(index)}
								changed={event => this.nameChangedHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);
		}

		return (
			<div className="App">
				<h1> Hi, I'm a React App</h1>
				<button
					style={style}
					/* onClick={this.switchNameHandler.bind(this, 'Ruben')} */
					onClick={this.togglePersonHandler}
				>
					Switch Name
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
