import React, {Component} from 'react';


class ImmutableCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            history: []
        };
      }

      handleIncrement = () => {
        this.setState((prevState) => {
            const newHistory = [...prevState.history, prevState.count];
            return {
                history: newHistory,
                count: prevState.count + 1
            };
        })
    }

    render() {
        return (
            <div>
                <h3>Increment: {this.state.count}</h3>
                <button onClick={this.handleIncrement}>Increment</button>
                <h3>History: </h3>
                <ul>
                    {this.state.history.map((value, index) => (
                        <li key={index}>{value}</li>
                       ))
                    }
                </ul>
            </div>
        )
    }
}

export default ImmutableCounter;