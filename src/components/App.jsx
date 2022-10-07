import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    const buttonName = event.target.name;
    switch (buttonName) {
      case 'good':
        return setGood(prevState => prevState + 1);      
    
      case 'neutral':
        return setNeutral(prevState => prevState + 1);      

    case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        return;
    }    
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const totalRates = countTotalFeedback();
    return good > 0 ? Math.round((good / totalRates) * 100) : 0;
  }

  const totalRates = countTotalFeedback();

  return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys( {good, neutral, bad})}
            onLeaveFeedback={handleClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {totalRates > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
}
