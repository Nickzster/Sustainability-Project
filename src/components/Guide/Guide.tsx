import React from 'react';
import './styles/guide.css';
import GuideContent from '../../content/Guide.json';
import GuideCard from './GuideCard';

const Guide: React.FunctionComponent = () => {
  return (
    <div className='background-image'>
      <div className='guide-intro'>
        <h1>How can I be more sustainable?</h1>
        <h2>
          Below is an interactive guide to help you make more sustainable
          choices in your day to day life!
        </h2>
      </div>
      <div className='guide-container'>
        {GuideContent.ContentArr.map(guide => {
          return (
            <GuideCard Question={guide.Question} Options={guide.Options} />
          );
        })}
      </div>
    </div>
  );
};

export default Guide;
