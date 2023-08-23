import { Component } from 'react';
import { FeedbackBtns } from './Feedback/FeedbackBtns';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    feedbackReceived: false,
  };

  onGoodClickBtn = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      feedbackReceived: true,
    }));
  };

  onNeutralClickBtn = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
      feedbackReceived: true,
    }));
  };

  onBadClickBtn = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
      feedbackReceived: true,
    }));
  };

  render() {
    const { good, neutral, bad, feedbackReceived } = this.state;
    //const { total } = good + neutral + bad;

    return (
      <>
        <FeedbackBtns
          onGoodClickBtn={this.onGoodClickBtn}
          onNeutralClickBtn={this.onNeutralClickBtn}
          onBadClickBtn={this.onBadClickBtn}
        ></FeedbackBtns>
        {feedbackReceived ? (
          <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        ) : (
          //<Notification message="There is no feedback" />
          <p>There is no feedback</p>
        )}
      </>
    );
  }
}
