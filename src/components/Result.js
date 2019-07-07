import React, { Component } from 'react';
class Result extends Component {
    render () {
        const { answeredCorrect, handleReset } = this.props;
        return (
            <div className="result">
                <p>You have answered {answeredCorrect} questions correctly</p>
                <button onClick={handleReset}>Reset</button>
            </div>
        )
    }
}
export default Result;