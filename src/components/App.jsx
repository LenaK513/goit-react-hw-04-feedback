import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { SectionMain } from './SectionMain/SectionMain';
import { Notification } from './Notification';
class App extends React.Component {
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
    const { good, neutral, bad } = this.state;
    return (
      <>
        <SectionMain title={'Please leave feedback'}>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleIncrement}
          />
        </SectionMain>
        <SectionMain title={'Statistics'}>
          {this.state.true && this.handleIncrement ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification />
          )}
        </SectionMain>
      </>
    );
  }
}
export default App;
