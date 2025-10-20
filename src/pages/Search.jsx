import React, { useState } from 'react';
import AISearchAssistant from '../components/AISearchAssistant';
import './Search.css';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample mission data for demonstration
  const missions = [
    {
      id: 1,
      name: "Apollo 11",
      planet: "Moon",
      year: 1969,
      status: "completed",
      description: "First crewed mission to land on the Moon"
    },
    {
      id: 2,
      name: "Mars Rover Perseverance",
      planet: "Mars",
      year: 2021,
      status: "active",
      description: "Robotic Mars rover exploring the Jezero crater"
    },
    {
      id: 3,
      name: "Artemis Program",
      planet: "Moon",
      year: 2025,
      status: "planned",
      description: "Program to return humans to the Moon"
    },
    {
      id: 4,
      name: "Europa Clipper",
      planet: "Jupiter",
      year: 2024,
      status: "planned",
      description: "Mission to investigate Jupiter's moon Europa"
    },
    {
      id: 5,
      name: "Mars Sample Return",
      planet: "Mars",
      year: 2027,
      status: "planned",
      description: "Mission to return samples from Mars to Earth"
    }
  ];

  const handleAISearch = (query) => {
    setSearchTerm(query);
    
    // Simulate AI processing of the query
    // In a real app, this would connect to an AI API
    let results = [];
    
    if (query.toLowerCase().includes('mars') && query.includes('2000')) {
      results = missions.filter(mission => 
        mission.planet.toLowerCase() === 'mars' && mission.year > 2000
      );
    } else if (query.toLowerCase().includes('compare')) {
      results = missions.filter(mission => 
        mission.planet.toLowerCase() === 'mars' || mission.planet.toLowerCase() === 'moon'
      );
    } else if (query.toLowerCase().includes('jupiter')) {
      results = missions.filter(mission => 
        mission.planet.toLowerCase().includes('jupiter')
      );
    } else {
      // Default search behavior
      const term = query.toLowerCase();
      results = missions.filter(mission => 
        mission.name.toLowerCase().includes(term) ||
        mission.planet.toLowerCase().includes(term) ||
        mission.description.toLowerCase().includes(term)
      );
    }
    
    setSearchResults(results);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "completed":
        return { background: "rgba(46, 204, 113, 0.2)", color: "#2ecc71" };
      case "active":
        return { background: "rgba(52, 152, 219, 0.2)", color: "#3498db" };
      case "planned":
        return { background: "rgba(155, 89, 182, 0.2)", color: "#9b59b6" };
      default:
        return { background: "rgba(106, 106, 169, 0.2)", color: "#6a6aa9" };
    }
  };

  const containerStyle = {
    padding: '20px',
    minHeight: '100vh',
    color: '#ffffff',
    marginTop: '70px'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '30px',
    background: 'linear-gradient(90deg, #6a6aa9, #a0a0d0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    paddingTop: '20px'
  };

  const resultsContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const resultCardStyle = {
    background: 'rgba(30, 30, 70, 0.6)',
    borderRadius: '15px',
    padding: '20px',
    marginBottom: '20px',
    border: '1px solid rgba(106, 106, 169, 0.3)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
  };

  const resultTitleStyle = {
    fontSize: '1.5rem',
    color: '#ffffff',
    margin: '0 0 10px 0'
  };

  const resultMetaStyle = {
    display: 'flex',
    gap: '15px',
    marginBottom: '15px'
  };

  const metaItemStyle = {
    fontSize: '0.9rem',
    color: '#a0a0d0'
  };

  const statusStyle = {
    display: 'inline-block',
    padding: '3px 10px',
    borderRadius: '10px',
    fontSize: '0.8rem',
    fontWeight: '600'
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#c0c0e0',
    lineHeight: '1.6',
    marginBottom: '15px'
  };

  const exploreLinkStyle = {
    color: '#6a6aa9',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease'
  };

  const exploreLinkHoverStyle = {
    color: '#a0a0d0',
    textDecoration: 'underline'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Mission Search</h1>
      
      <AISearchAssistant onSearch={handleAISearch} />
      
      {searchTerm && (
        <div style={resultsContainerStyle}>
          <h2>
            {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchTerm}"
          </h2>
          
          {searchResults.length > 0 ? (
            searchResults.map((mission) => (
              <div key={mission.id} style={resultCardStyle}>
                <h3 style={resultTitleStyle}>{mission.name}</h3>
                <div style={resultMetaStyle}>
                  <span style={metaItemStyle}>{mission.planet}</span>
                  <span style={metaItemStyle}>{mission.year}</span>
                  <span style={{...statusStyle, ...getStatusStyle(mission.status)}}>
                    {mission.status}
                  </span>
                </div>
                <p style={descriptionStyle}>{mission.description}</p>
                <a 
                  href={`/mission/${mission.id}`} 
                  style={exploreLinkStyle}
                  onMouseEnter={(e) => Object.assign(e.target.style, exploreLinkHoverStyle)}
                  onMouseLeave={(e) => Object.keys(exploreLinkHoverStyle).forEach(prop => e.target.style[prop] = '')}
                >
                  Explore Mission →
                </a>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '40px', color: '#a0a0d0' }}>
              <p>No missions found matching your search.</p>
              <p>Try rephrasing your query or use one of the suggestions above.</p>
            </div>
          )}
        </div>
      )}
      
      {!searchTerm && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#a0a0d0' }}>
          <p>Use the AI assistant above to search for NASA missions</p>
          <p>or try one of the sample queries</p>
        </div>
      )}
    </div>
  );
};

export default Search;