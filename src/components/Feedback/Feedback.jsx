import React from 'react';
import { Btn } from './Feedback.styled';
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let goodResult = Math.round((good / (good + neutral + bad)) * 100);
    return goodResult;
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <Btn type="button" name="good" onClick={this.handleIncrement}>
            Good
          </Btn>
          <Btn type="button" name="neutral" onClick={this.handleIncrement}>
            Neutral
          </Btn>
          <Btn type="button" name="bad" onClick={this.handleIncrement}>
            Bad
          </Btn>
        </div>

        <h2>Statistics</h2>
        <div>
          <p>
            {' '}
            Good:
            <span>{this.state.good}</span>
          </p>
          <p>
            Neutral:
            <span>{this.state.neutral}</span>
          </p>
          <p>
            {' '}
            Bad:
            <span>{this.state.bad}</span>
          </p>
          <p>
            Total :<span>{this.countTotalFeedback()}</span>
          </p>
          <p>
            Positive feedback :
            <span>{this.countPositiveFeedbackPercentage()}%</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Feedback;
