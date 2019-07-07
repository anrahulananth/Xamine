import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
class Result extends Component {
    render () {
        const { answeredCorrect, handleReset } = this.props;
        return (
            <Paper>
                <div className="reset">
                    <p>You have answered <span className="correctAnswer">{answeredCorrect}</span> questions correctly</p>
                    <Button variant="contained" color="primary" onClick={handleReset}>Reset</Button>
                </div>
            </Paper>
        )
    }
}
export default Result;