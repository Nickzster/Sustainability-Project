import React, { useState } from 'react';
import GuideSelectors from './GuideSelectors';

interface ContentSelector {
  Selector: string;
  Feedback: string;
}

interface Props {
  Question: string;
  Options: Array<ContentSelector>;
}

const GuideCard: React.FunctionComponent<Props> = props => {
  const [feedback, updateFeedback] = useState({
    value: 'Select an option to see what you can do to be more sustainable!'
  });

  const updateCurrentFeedback = (newValue: string) => {
    updateFeedback({ ...feedback, value: newValue });
  };
  const { value } = feedback;
  const { Question, Options } = props;
  return (
    <div className='guide-question'>
      <h2 className='question'>{Question}</h2>
      <br />
      <div className='guide-responses'>
        <select
          value={value}
          className='selectors'
          onChange={e => updateCurrentFeedback(e.target.value)}
        >
          <option value='Select an option to see what you can do to be more sustainable!'>
            Select an Option
          </option>
          {Options.map(option => {
            return (
              <GuideSelectors
                Selector={option.Selector}
                Feedback={option.Feedback}
              />
            );
          })}
        </select>
        <br />
        <br />
        <p className='feedback'>{value}</p>
      </div>
    </div>
  );
};

export default GuideCard;
