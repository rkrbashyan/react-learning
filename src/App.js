import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Ru', age: 29 },
            { name: 'Ra', age: 34 },
            { name: 'Ma', age: 59 }
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

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Ru', age: 29 },
                { name: event.target.value, age: 34 },
                { name: 'Ma', age: 55 }
            ]
        });
    };

    togglePersonHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            border: '1px solid blue',
            padding: '16px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                    />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={() => this.switchNameHandler('Rubik')}
                        changed={this.nameChangedHandler}
                    >
                        My Hobbies: Racing
                    </Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                    />
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
