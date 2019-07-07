import React, { Component } from 'react';
class Question extends Component {
    render () {
        const { questionData, choice, handleChoice } = this.props;
        if (questionData) {
            return (
                <div className="question">
                    <h2>{questionData.question}</h2>
                    {
                        questionData.code ? (
                            <code>
                                {questionData.code}
                            </code>
                        ) : false
                    }
                    <ul className="choices">
                        {
                            questionData.choices.length ?
                                questionData.choices.map((choiceItem, key) => (
                                    <li key={key} className="" style={{ border: choice === key ? '2px solid blue' : 'none' }} onClick={() => { handleChoice(key) }}>{choiceItem}</li>
                                ))
                                : false
                        }
                    </ul>
                </div>
            );
        } else {
            return false;
        }
    }

}
export default Question;