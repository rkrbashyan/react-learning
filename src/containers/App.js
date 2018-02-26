import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] inside constructor', props);
		this.state = {
			persons: [
				{ id: '111', name: 'Ru', age: 29 },
				{ id: '222', name: 'Ra', age: 34 },
				{ id: '333', name: 'Ma', age: 59 }
			],
			showPersons: false,
			toggleClicked: 0
		};
	}

	componentWillMount() {
		console.log('[App.js] inside componentWillMount');
	}

	componentDidMount() {
		console.log('[App.js] inside componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(
			'[Update App.js] inside shouldComponentUpdate',
			nextProps,
			nextState
		);
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log(
			'[Update App.js] inside componentWillUpdate',
			nextProps,
			nextState
		);
	}

	componentDidUpdate() {
		console.log('[App Persons.js] inside componentDidUpdate');
	}

	// state = {
	// 	persons: [
	// 		{ id: '111', name: 'Ru', age: 29 },
	// 		{ id: '222', name: 'Ra', age: 34 },
	// 		{ id: '333', name: 'Ma', age: 59 }
	// 	],
	// 	showPersons: false
	// };

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
		this.setState((prevState, props) => {
			return {
				showPersons: !prevState.showPersons,
				toggleClicked: prevState.toggleClicked + 1
			}
		})
	};

	deletePersonHandler = (index) => {
		const persons = [...this.state.persons];
		persons.splice(index, 1);
		this.setState({
			persons
		});
	};

	render() {
		console.log('[App.js] inside render');

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
				/>
			);
		}

		return (
			<Aux>
				<Cockpit
					appTitle={this.props.title}
					persons={this.state.persons}
					clicked={this.togglePersonHandler}
				/>
				{persons}
			</Aux>
		);
	}
}

export default withClass(App, classes.App);
