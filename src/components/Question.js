import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Checkbox from '@material-ui/core/Checkbox'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/styles';

const StyledCard = withStyles({
    root: {
        background: '#333333',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 'auto',
        padding: '30px 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        textAlign:'justify'
    }
})(Card);

class Question extends Component {
    render () {
        const { questionData, choice, handleChoice, number } = this.props;
        if (questionData) {
            return (
                <Container>
                    <h1>Question: {number + 1}</h1>
                    <h2>{questionData.question}</h2>
                    {
                        questionData.code && questionData.code.length ? (
                            <StyledCard>
                                {
                                    questionData.code.map((codeLine,id) => (
                                        <React.Fragment key={id}>
                                            <code>
                                                {codeLine}
                                            </code>
                                            <br/>
                                        </React.Fragment>
                                    ))
                                }
                            </StyledCard>
                        ) : false
                    }
                    <List className="choices">
                        {
                            questionData.choices.length ?
                                questionData.choices.map((choiceItem, key) => (
                                    <ListItem key={key} onClick={() => { handleChoice(key) }}>
                                        <ListItemIcon>
                                                <Checkbox
                                                    edge="start"
                                                    checked={choice === key ? true : false}
                                                    tabIndex={-1}
                                                />
                                        </ListItemIcon>
                                    {choiceItem}
                                    </ListItem>
                                ))
                                : false
                        }
                    </List>
                </Container>
            );
        } else {
            return false;
        }
    }

}
export default Question;