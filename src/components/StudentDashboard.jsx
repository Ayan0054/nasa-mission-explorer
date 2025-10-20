import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [userProgress, setUserProgress] = useState({
    missionsExplored: 0,
    categoriesCompleted: 0,
    triviaLearned: 0,
    badges: []
  });

  // Sample badges data
  const badges = [
    { id: 1, name: 'Explorer', description: 'Explored 5 missions', icon: '🚀', earned: false },
    { id: 2, name: 'Astronaut', description: 'Completed Moon category', icon: '👨‍🚀', earned: false },
    { id: 3, name: 'Scientist', description: 'Learned 10 space facts', icon: '🔬', earned: false },
    { id: 4, name: 'Historian', description: 'Explored missions from 3 decades', icon: '📚', earned: false },
    { id: 5, name: 'Visionary', description: 'Explored future missions', icon: '🔮', earned: false },
    { id: 6, name: 'Pioneer', description: 'First mission explored', icon: '🌟', earned: true }
  ];

  // Sample progress data
  const progressData = [
    { id: 1, name: 'Solar System Exploration', progress: 75, color: '#6a6aa9' },
    { id: 2, name: 'Mission History', progress: 45, color: '#3498db' },
    { id: 3, name: 'Space Technology', progress: 30, color: '#9b59b6' },
    { id: 4, name: 'Future Missions', progress: 60, color: '#2ecc71' }
  ];

  // Initialize with some progress
  useEffect(() => {
    setUserProgress({
      missionsExplored: 3,
      categoriesCompleted: 1,
      triviaLearned: 7,
      badges: badges.filter(badge => badge.earned)
    });
  }, []);

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

  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '40px'
  };

  const statCardStyle = {
    background: 'rgba(30, 30, 70, 0.6)',
    borderRadius: '15px',
    padding: '25px',
    textAlign: 'center',
    border: '1px solid rgba(106, 106, 169, 0.3)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
  };

  const statNumberStyle = {
    fontSize: '2.5rem',
    color: '#6a6aa9',
    margin: '0 0 10px 0'
  };

  const statLabelStyle = {
    fontSize: '1.1rem',
    color: '#a0a0d0',
    margin: 0
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
    fontSize: '1.8rem',
    color: '#a0a0d0',
    marginBottom: '25px',
    textAlign: 'center'
  };

  const progressContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px'
  };

  const progressCardStyle = {
    background: 'rgba(20, 20, 50, 0.8)',
    borderRadius: '10px',
    padding: '20px',
    border: '1px solid rgba(106, 106, 169, 0.2)'
  };

  const progressHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px'
  };

  const progressTitleStyle = {
    fontSize: '1.2rem',
    color: '#ffffff',
    margin: 0
  };

  const progressPercentageStyle = {
    fontSize: '1.2rem',
    color: '#6a6aa9',
    fontWeight: '600'
  };

  const progressBarBackgroundStyle = {
    height: '10px',
    background: 'rgba(106, 106, 169, 0.2)',
    borderRadius: '5px',
    overflow: 'hidden'
  };

  const progressBarStyle = (color, percentage) => ({
    height: '100%',
    background: color,
    width: `${percentage}%`,
    borderRadius: '5px',
    transition: 'width 0.5s ease'
  });

  const badgesContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '20px'
  };

  const badgeStyle = (earned) => ({
    background: earned ? 'rgba(30, 30, 70, 0.6)' : 'rgba(20, 20, 50, 0.8)',
    borderRadius: '15px',
    padding: '20px',
    textAlign: 'center',
    border: `1px solid ${earned ? 'rgba(106, 106, 169, 0.5)' : 'rgba(106, 106, 169, 0.2)'}`,
    boxShadow: earned ? '0 5px 15px rgba(106, 106, 169, 0.3)' : 'none',
    opacity: earned ? 1 : 0.6
  });

  const badgeIconStyle = {
    fontSize: '2.5rem',
    marginBottom: '10px'
  };

  const badgeNameStyle = {
    fontSize: '1.1rem',
    color: '#ffffff',
    margin: '0 0 5px 0'
  };

  const badgeDescriptionStyle = {
    fontSize: '0.9rem',
    color: '#a0a0d0',
    margin: 0
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Student Dashboard</h1>
      
      <div style={statsContainerStyle}>
        <div style={statCardStyle}>
          <div style={statNumberStyle}>{userProgress.missionsExplored}</div>
          <p style={statLabelStyle}>Missions Explored</p>
        </div>
        
        <div style={statCardStyle}>
          <div style={statNumberStyle}>{userProgress.categoriesCompleted}</div>
          <p style={statLabelStyle}>Categories Completed</p>
        </div>
        
        <div style={statCardStyle}>
          <div style={statNumberStyle}>{userProgress.triviaLearned}</div>
          <p style={statLabelStyle}>Space Facts Learned</p>
        </div>
        
        <div style={statCardStyle}>
          <div style={statNumberStyle}>{userProgress.badges.length}</div>
          <p style={statLabelStyle}>Badges Earned</p>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Learning Progress</h2>
        <div style={progressContainerStyle}>
          {progressData.map((item) => (
            <div key={item.id} style={progressCardStyle}>
              <div style={progressHeaderStyle}>
                <h3 style={progressTitleStyle}>{item.name}</h3>
                <div style={progressPercentageStyle}>{item.progress}%</div>
              </div>
              <div style={progressBarBackgroundStyle}>
                <div style={progressBarStyle(item.color, item.progress)}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Achievements & Badges</h2>
        <div style={badgesContainerStyle}>
          {badges.map((badge) => (
            <div 
              key={badge.id} 
              style={badgeStyle(badge.earned)}
            >
              <div style={badgeIconStyle}>{badge.icon}</div>
              <h3 style={badgeNameStyle}>{badge.name}</h3>
              <p style={badgeDescriptionStyle}>{badge.description}</p>
              {!badge.earned && (
                <div style={{ marginTop: '10px', fontSize: '0.8rem', color: '#6a6aa9' }}>
                  Locked
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;