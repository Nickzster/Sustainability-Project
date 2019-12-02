import React from 'react';

interface Props {
  Selector: string;
  Feedback: string;
}

const GuideSelectors: React.FunctionComponent<Props> = props => {
  const { Selector, Feedback } = props;
  return (
    <React.Fragment>
      <option value={Feedback}>{Selector}</option>
    </React.Fragment>
  );
};

export default GuideSelectors;
