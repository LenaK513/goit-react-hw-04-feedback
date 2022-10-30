import React from 'react';
// import { nanoid } from 'nanoid';
import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Btn key={option} type="button" name={option} onClick={onLeaveFeedback}>
          {option}
        </Btn>
      ))}
    </div>
  );
};
