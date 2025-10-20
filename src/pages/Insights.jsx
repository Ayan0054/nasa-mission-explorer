import React, { useState } from 'react';
import TriviaCard from '../components/TriviaCard';
import './Insights.css';

const Insights = () => {
  const [triviaCards] = useState([
    {
      id: 1,
      fact: "The Hubble Space Telescope travels at 5 miles per second, fast enough to cross the United States in about 10 minutes.",
      category: "Speed",
      source: "NASA"
    },
    {
      id: 2,
      fact: "Voyager 1 is over 14 billion miles away from Earth, making it the most distant human-made object ever built.",
      category: "Distance",
      source: "NASA"
    },
    {
      id: 3,
      fact: "The International Space Station orbits Earth every 90 minutes, traveling at 17,500 mph.",
      category: "Orbit",
      source: "NASA"
    },
    {
      id: 4,
      fact: "Mars has the largest volcano in the solar system, Olympus Mons, which is about 3 times taller than Mount Everest.",
      category: "Geology",
      source: "NASA"
    },
    {
      id: 5,
      fact: "A day on Venus is longer than its year. It takes Venus 243 Earth days to rotate once, but only 225 Earth days to orbit the Sun.",
      category: "Astronomy",
      source: "NASA"
    },
    {
      id: 6,
      fact: "Jupiter's Great Red Spot is a storm that has been raging for at least 400 years and is larger than Earth.",
      category: "Weather",
      source: "NASA"
    }
  ]);

  const [infographics] = useState([
    {
      id: 1,
      title: "Mission Budgets Comparison",
      description: "Comparing budgets of major NASA missions over the decades",
      data: [
        { mission: "Apollo", budget: "$25.4B (adjusted)" },
        { mission: "Hubble", budget: "$15.8B (adjusted)" },
        { mission: "James Webb", budget: "$10.9B" },
        { mission: "Artemis", budget: "$93B (projected)" }
      ]
    },
    {
      id: 2,
      title: "Mission Duration Analysis",
      description: "How long missions typically last from launch to completion",
      data: [
        { mission: "Apollo 11", duration: "8 days" },
        { mission: "Voyager 1", duration: "45+ years (ongoing)" },
        { mission: "Hubble", duration: "33+ years (ongoing)" },
        { mission: "Perseverance", duration: "Ongoing" }
      ]
    }
  ]);

  const handleShare = (fact) => {
    // In a real app, this would connect to social media APIs
    alert(`Sharing: ${fact}\n\nThis feature would connect to social media in a production app.`);
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
    marginBottom: '40px',
    background: 'linear-gradient(90deg, #6a6aa9, #a0a0d0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    paddingTop: '20px'
  };

  const sectionTitleStyle = {
    fontSize: '2rem',
    textAlign: 'center',
    margin: '50px 0 30px',
    color: '#a0a0d0'
  };

  const triviaGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const infographicContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const infographicCardStyle = {
    background: 'rgba(30, 30, 70, 0.6)',
    borderRadius: '15px',
    padding: '25px',
    border: '1px solid rgba(106, 106, 169, 0.3)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
  };

  const infographicTitleStyle = {
    fontSize: '1.5rem',
    color: '#ffffff',
    marginBottom: '15px'
  };

  const infographicDescriptionStyle = {
    color: '#a0a0d0',
    marginBottom: '20px',
    lineHeight: '1.6'
  };

  const dataRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid rgba(106, 106, 169, 0.2)'
  };

  const dataLabelStyle = {
    color: '#c0c0e0'
  };

  const dataValueStyle = {
    color: '#6a6aa9',
    fontWeight: '600'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Educational Insights</h1>
      
      <h2 style={sectionTitleStyle}>Did You Know?</h2>
      <div style={triviaGridStyle}>
        {triviaCards.map((card) => (
          <TriviaCard
            key={card.id}
            fact={card.fact}
            category={card.category}
            onShare={() => handleShare(card.fact)}
          />
        ))}
      </div>
      
      <h2 style={sectionTitleStyle}>Mission Infographics</h2>
      <div style={infographicContainerStyle}>
        {infographics.map((graphic) => (
          <div key={graphic.id} style={infographicCardStyle}>
            <h3 style={infographicTitleStyle}>{graphic.title}</h3>
            <p style={infographicDescriptionStyle}>{graphic.description}</p>
            <div>
              {graphic.data.map((item, index) => (
                <div key={index} style={dataRowStyle}>
                  <span style={dataLabelStyle}>{item.mission}:</span>
                  <span style={dataValueStyle}>{item.budget || item.duration}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;