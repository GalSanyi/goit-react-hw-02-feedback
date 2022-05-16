import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import { FEEDBACK_OPTIONS } from 'data/constants';
import s from './Feedback.module.css';
export default class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: true,
  };

  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  feedbackTotal = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };
  positiveFeedback = () => {
    const { good } = this.state;
    return !this.feedbackTotal()
      ? '0'
      : Math.round((good / this.feedbackTotal()) * 100);
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.feedbackTotal();
    const positivePercentage = this.positiveFeedback();

    return (
      <div className={s.container}>
        <h1>Pleas leave feedback</h1>
        <FeedbackOptions
          options={FEEDBACK_OPTIONS}
          onLeaveFeedback={this.handleFeedback}
        />
        <div>
          {this.state.visible ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
