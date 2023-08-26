import { Component } from 'react';
import { FeedbackBtns } from './Feedback/FeedbackBtns';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { GlobalStyles } from './GlobalStyles.styled';

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

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad, feedbackReceived } = this.state;
    const handlerClicks = {
      onGood: this.onGoodClickBtn,
      onNeutral: this.onNeutralClickBtn,
      onBad: this.onBadClickBtn,
    };

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackBtns onLeaveFeedback={handlerClicks} />
        </Section>
        <Section title="Statistics">
          {feedbackReceived ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        <GlobalStyles />
      </>
    );
  }
}
