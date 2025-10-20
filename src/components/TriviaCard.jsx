import React from 'react';

const TriviaCard = ({ fact, category, onShare }) => {
  return (
    <div className="trivia-card">
      <div className="trivia-header">
        <span className="trivia-category">{category}</span>
        <button className="trivia-share" onClick={onShare}>
          Share
        </button>
      </div>
      <div className="trivia-content">
        <p className="trivia-fact">{fact}</p>
      </div>
      <div className="trivia-footer">
        <span className="trivia-source">NASA Mission Explorer</span>
      </div>
    </div>
  );
};

export default TriviaCard;