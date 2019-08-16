import React, {Component} from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: 0,
            error: ''
        }

        this.add = this.add.bind(this);
    }

    add(e) {
        e.preventDefault();
        let result;
        
        if (e.target.operation.value === '+')
            result = parseInt(e.target.first.value) + parseInt(e.target.second.value)
        else if (e.target.operation.value === '-')
            result = parseInt(e.target.first.value) - parseInt(e.target.second.value)
        else if (e.target.operation.value === '*')
            result = parseInt(e.target.first.value) * parseInt(e.target.second.value)
        else if (e.target.operation.value === '/')
            result = parseInt(e.target.first.value) / parseInt(e.target.second.value)
        else {
            this.setState({
                error: `You must enter one of four commands: '+', '-', '*', '/'`
            })
            return;
        }

        if (isNaN(e.target.first.value) || isNaN(e.target.second.value)) {
            this.setState({
                error: 'You must enter only numerical values!'
            })
        }
        else {
            this.setState ({
                result: result,
                error: ''
            });
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>
                <div className="add">
                    <form onSubmit={this.add}>
                        <input type="text" name="first" />
                        <input type="text" name="operation" />
                        <input type="text" name="second" />
                        <input type="submit" />
                    </form>
                    <h3>
                        {this.state.error.length > 0 ? this.state.error : this.state.result}
                    </h3>
                </div>
            </div>
        )
    }
}

export default Calculator;
