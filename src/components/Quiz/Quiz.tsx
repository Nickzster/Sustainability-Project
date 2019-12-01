import React from 'react';
import './styles/quiz.css';

const Quiz: React.FunctionComponent = () => {
  return (
    <div className='quiz-container'>
      <div className='quiz-question'>
        <h2>This is a question</h2>
        <div className='question-responses'>
          <input className='pretty-radio' type='radio' id='radio-one' /> Answer
          # 1
          <br />
          <input type='radio' /> Answer # 2
          <br />
          <input type='radio' /> Answer # 3
          <br />
          <input type='radio' /> Answer # 4
        </div>
      </div>
    </div>
  );
};

export default Quiz;
