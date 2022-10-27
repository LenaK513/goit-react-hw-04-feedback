import React from 'react';
import { Btn } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <Btn type="button" name="good" onClick={onLeaveFeedback}>
        {options[0]}
      </Btn>
      <Btn type="button" name="neutral" onClick={onLeaveFeedback}>
        {options[1]}
      </Btn>
      <Btn type="button" name="bad" onClick={onLeaveFeedback}>
        {options[2]}
      </Btn>
    </div>
  );
};
