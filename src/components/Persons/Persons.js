import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
	constructor(props) {
		super(props);
		console.log('[Persons.js] inside constructor', props);
	}

	componentWillMount() {
		console.log('[Persons.js] inside componentWillMount');
	}

	componentDidMount() {
		console.log('[Persons.js] inside componentDidMount');
	}

	componentWillReceiveProps(nextProps) {
		console.log(
			'[Update Persons.js] inside componentWillReceiveProps',
			nextProps
		);
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log(
	// 		'[Update Persons.js] inside shouldComponentUpdate',
	// 		nextProps,
	// 		nextState
	// 	);
	// 	return true;
	// }

	componentWillUpdate(nextProps, nextState) {
		console.log(
			'[Update Persons.js] inside componentWillUpdate',
			nextProps,
			nextState
		);
	}

	componentDidUpdate() {
		console.log('[Update Persons.js] inside componentDidUpdate');
	}

	render() {
		console.log('[Persons.js] inside render');

		return this.props.persons.map((person, index) => (
			<Person
				key={person.id}
				name={person.name}
				position={index}
				age={person.age}
				click={() => this.props.clicked(index)}
				changed={(event) => this.props.changed(event, person.id)}
			/>
		));
	}
}

export default Persons;
