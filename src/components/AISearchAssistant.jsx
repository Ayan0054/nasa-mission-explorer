import React, { useState } from 'react';

const AISearchAssistant = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sampleQueries = [
    "Show me all Mars missions after 2000",
    "Compare Mars vs Moon missions",
    "What missions are planned for Jupiter?",
    "Show me missions with budget over $10B"
  ];

  const handleSearch = async (searchQuery) => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    setQuery(searchQuery);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      if (onSearch) {
        onSearch(searchQuery);
      }
    }, 1000);
  };

  const handleSuggestionClick = (suggestion) => {
    handleSearch(suggestion);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <div className="ai-search-container">
      <div className="ai-search-header">
        <h3>AI Mission Assistant</h3>
        <p>Ask me anything about NASA missions</p>
      </div>
      
      <form onSubmit={handleSubmit} className="ai-search-form">
        <div className="ai-search-input-container">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Show me all Mars missions after 2000..."
            className="ai-search-input"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="ai-search-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading-spinner"></span>
            ) : (
              'Search'
            )}
          </button>
        </div>
      </form>
      
      <div className="ai-suggestions">
        <h4>Try asking:</h4>
        <div className="suggestions-container">
          {sampleQueries.map((suggestion, index) => (
            <button
              key={index}
              className="suggestion-chip"
              onClick={() => handleSuggestionClick(suggestion)}
              disabled={isLoading}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AISearchAssistant;