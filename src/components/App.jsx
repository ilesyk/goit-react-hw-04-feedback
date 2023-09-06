import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Feedback } from './Feedback';
import { Message } from './Message';
import { Section } from './Section';
import { Statistics } from './Statistics';

export const App = () => {
  const [feedbacks, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const changeFeedback = key => {
    setFeedback(prevFeedbacks => ({
      ...prevFeedbacks,
      [key]: prevFeedbacks[key] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedbacks).reduce((acc, el) => acc + el);
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = countTotalFeedback();
    return Math.round((feedbacks.good / totalFeedbacks) * 100);
  };
  
  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback
          options={Object.keys(feedbacks)}
          changeFeedback={changeFeedback}
        />
      </Section>
      <Section title="Feedbacks">
        {countTotalFeedback() === 0 ? (
          <Message message="No feedback given" />
        ) : (
          <Statistics
            feedbacks={feedbacks}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
