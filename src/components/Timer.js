import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTime, stopTime } from '../actions';
class Timer extends Component {
    state = {
        timerInterval: false
    }
    componentDidMount () {
        let timerInterval = setInterval(() => {
            let { time } = this.props;
            if (time === 600) {
                this.props.handleCompleted();
            } else {
                this.props.setTime(time + 1);
            }
        }, 1000);
        this.setState({
            timerInterval: timerInterval
        });
    }

    componentWillUnmount(){
        clearInterval(this.state.timerInterval);
        this.props.stopTime();
    }

    convertSecondsToMinutes = () => {
        let { time } = this.props;
        time = Math.floor(time)
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time - (hours * 3600)) / 60);
        let seconds = time - (hours * 3600) - (minutes * 60);

        // round seconds
        seconds = Math.floor(seconds * 100) / 100

        let result = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        return result;
    }
    render () {
        return (
            <div className="timer">{this.convertSecondsToMinutes()}</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        time: state.time
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTime: (time) => {
            dispatch(setTime(time));
        },
        stopTime: () => {
            dispatch(stopTime());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Timer);