import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';

class Person extends Component {
	constructor(props) {
		super(props);
		console.log('[Person.js] inside constructor', props);
	}

	componentWillMount() {
		console.log('[Person.js] inside componentWillMount');
	}

	componentDidMount() {
		console.log('[Person.js] inside componentDidMount');
		if (this.props.position === 0) {
			this.inputElement.focus();
		}
	}

	render() {
		console.log('[Person.js] inside render');
		return (
			<div className={classes.Person}>
				<p onClick={this.props.click}>
					I'm {this.props.name} I am {this.props.age}!
				</p>
				<p>{this.props.children}</p>
				<input
					ref={(input) => {this.inputElement = input}}
					type="text"
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</div>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

export default Person;
