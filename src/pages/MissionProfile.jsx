import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AIComparisonTool from '../components/AIComparisonTool';
import TriviaCard from '../components/TriviaCard';
import './MissionProfile.css';

const MissionProfile = () => {
  const { id } = useParams();
  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample mission data
  const missionData = {
    1: {
      id: 1,
      name: "Apollo 11",
      planet: "Moon",
      year: 1969,
      status: "completed",
      duration: "8 days",
      crew: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
      budget: "$25.4 billion (adjusted)",
      description: "Apollo 11 was the first crewed mission to successfully land humans on the Moon. Launched on July 16, 1969, the mission fulfilled President Kennedy's goal of landing astronauts on the Moon before the end of the 1960s.",
      achievements: [
        "First humans to walk on the Moon",
        "Collected 47.5 pounds of lunar material",
        "First humans to view Earth as a whole planet",
        "Demonstrated the feasibility of lunar landing"
      ],
      gallery: [
        "/images/apollo11-1.jpg",
        "/images/apollo11-2.jpg",
        "/images/apollo11-3.jpg"
      ]
    },
    2: {
      id: 2,
      name: "Mars Rover Perseverance",
      planet: "Mars",
      year: 2021,
      status: "active",
      duration: "Ongoing",
      crew: [],
      budget: "$2.7 billion",
      description: "Perseverance is NASA's most recent Mars rover, launched in July 2020 and landed in February 2021. Its mission is to seek signs of ancient life and collect samples of rock and regolith for possible return to Earth.",
      achievements: [
        "First helicopter flight on another planet (Ingenuity)",
        "Advanced drilling and sample collection system",
        "MOXIE oxygen generation experiment",
        "Most advanced scientific instruments ever sent to Mars"
      ],
      gallery: [
        "/images/perseverance-1.jpg",
        "/images/perseverance-2.jpg",
        "/images/perseverance-3.jpg"
      ]
    }
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const missionInfo = missionData[id] || missionData[1];
      setMission(missionInfo);
      setLoading(false);
    }, 500);
  }, [id]);

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

  const handleShare = (fact) => {
    alert(`Sharing: ${fact}\n\nThis feature would connect to social media in a production app.`);
  };

  if (loading) {
    return (
      <div style={{
        padding: '20px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff'
      }}>
        <div>Loading mission profile...</div>
      </div>
    );
  }

  const containerStyle = {
    padding: '20px',
    minHeight: '100vh',
    color: '#ffffff',
    marginTop: '70px'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '20px',
    background: 'linear-gradient(90deg, #6a6aa9, #a0a0d0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    paddingTop: '20px'
  };

  const missionHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    flexWrap: 'wrap',
    gap: '15px'
  };

  const missionTitleStyle = {
    fontSize: '2rem',
    margin: 0,
    color: '#ffffff'
  };

  const missionMetaStyle = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  };

  const metaItemStyle = {
    fontSize: '1.1rem',
    color: '#a0a0d0'
  };

  const statusStyle = {
    display: 'inline-block',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '1rem',
    fontWeight: '600'
  };

  const sectionStyle = {
    background: 'rgba(30, 30, 70, 0.6)',
    borderRadius: '15px',
    padding: '25px',
    marginBottom: '30px',
    border: '1px solid rgba(106, 106, 169, 0.3)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
  };

  const sectionTitleStyle = {
    fontSize: '1.5rem',
    color: '#a0a0d0',
    marginBottom: '20px'
  };

  const descriptionStyle = {
    fontSize: '1.1rem',
    color: '#c0c0e0',
    lineHeight: '1.7',
    marginBottom: '25px'
  };

  const listStyle = {
    paddingLeft: '20px',
    color: '#c0c0e0',
    lineHeight: '1.7'
  };

  const listItemStyle = {
    marginBottom: '10px'
  };

  const galleryContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  };

  const galleryItemStyle = {
    height: '200px',
    background: 'rgba(20, 20, 50, 0.8)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: '#6a6aa9'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Mission Profile</h1>
      
      <div style={missionHeaderStyle}>
        <h2 style={missionTitleStyle}>{mission.name}</h2>
        <div style={missionMetaStyle}>
          <span style={metaItemStyle}>{mission.planet}</span>
          <span style={metaItemStyle}>{mission.year}</span>
          <span style={{...statusStyle, ...getStatusStyle(mission.status)}}>
            {mission.status.charAt(0).toUpperCase() + mission.status.slice(1)}
          </span>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>Mission Overview</h3>
        <p style={descriptionStyle}>{mission.description}</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div>
            <h4 style={{ color: '#a0a0d0', marginBottom: '10px' }}>Duration</h4>
            <p style={{ color: '#ffffff', fontSize: '1.1rem' }}>{mission.duration}</p>
          </div>
          <div>
            <h4 style={{ color: '#a0a0d0', marginBottom: '10px' }}>Budget</h4>
            <p style={{ color: '#ffffff', fontSize: '1.1rem' }}>{mission.budget}</p>
          </div>
          <div>
            <h4 style={{ color: '#a0a0d0', marginBottom: '10px' }}>Crew Size</h4>
            <p style={{ color: '#ffffff', fontSize: '1.1rem' }}>{mission.crew.length > 0 ? mission.crew.length : 'Robotic'}</p>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>Key Achievements</h3>
        <ul style={listStyle}>
          {mission.achievements.map((achievement, index) => (
            <li key={index} style={listItemStyle}>{achievement}</li>
          ))}
        </ul>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>AI-Generated Trivia</h3>
        <div style={{ maxWidth: '800px' }}>
          <TriviaCard
            fact={`${mission.name} was a groundbreaking mission that changed our understanding of ${mission.planet}. Did you know that the technology developed for this mission is still used in modern space exploration?`}
            category="Mission Facts"
            onShare={() => handleShare(`${mission.name} mission facts`)}
          />
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>Mission Gallery</h3>
        <div style={galleryContainerStyle}>
          {mission.gallery.map((image, index) => (
            <div key={index} style={galleryItemStyle}>
              🚀
            </div>
          ))}
        </div>
      </div>
      
      <AIComparisonTool />
    </div>
  );
};

export default MissionProfile;