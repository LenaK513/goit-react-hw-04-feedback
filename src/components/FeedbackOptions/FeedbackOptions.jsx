import React from 'react';
import { Btn } from './Feedback.styled';
export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <div>
        <Btn type="button" name="good" onClick={onLeaveFeedback}>
          Good
        </Btn>
        <Btn type="button" name="neutral" onClick={onLeaveFeedback}>
          Neutral
        </Btn>
        <Btn type="button" name="bad" onClick={onLeaveFeedback}>
          Bad
        </Btn>
      </div>

      <h2>Statistics</h2>
    </div>
  );
};
