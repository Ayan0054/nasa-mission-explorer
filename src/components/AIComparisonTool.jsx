import React, { useState } from 'react';

const AIComparisonTool = () => {
  const [missionA, setMissionA] = useState('');
  const [missionB, setMissionB] = useState('');
  const [comparisonResult, setComparisonResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Sample mission data for demonstration
  const missions = [
    { id: 'apollo11', name: 'Apollo 11', planet: 'Moon', year: 1969, duration: '8 days', crew: 3, budget: '$25.4B (adj.)' },
    { id: 'perseverance', name: 'Mars Perseverance', planet: 'Mars', year: 2021, duration: 'Ongoing', crew: 0, budget: '$2.7B' },
    { id: 'voyager1', name: 'Voyager 1', planet: 'Deep Space', year: 1977, duration: '45+ years', crew: 0, budget: '$444M' },
    { id: 'artemis', name: 'Artemis Program', planet: 'Moon', year: 2025, duration: 'Planned', crew: 4, budget: '$93B (proj.)' }
  ];

  const handleCompare = () => {
    if (!missionA || !missionB) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const missionDataA = missions.find(m => m.id === missionA);
      const missionDataB = missions.find(m => m.id === missionB);
      
      if (missionDataA && missionDataB) {
        const result = {
          missionA: missionDataA,
          missionB: missionDataB,
          comparison: {
            title: `Comparison: ${missionDataA.name} vs ${missionDataB.name}`,
            insights: [
              `Launch years differ by ${Math.abs(missionDataA.year - missionDataB.year)} years`,
              `${missionDataA.planet} missions vs ${missionDataB.planet} missions`,
              missionDataA.crew > missionDataB.crew 
                ? `${missionDataA.name} had ${missionDataA.crew - missionDataB.crew} more crew members`
                : (missionDataB.crew > missionDataA.crew 
                    ? `${missionDataB.name} has ${missionDataB.crew - missionDataA.crew} more crew members`
                    : 'Both missions had the same crew size')
            ]
          }
        };
        setComparisonResult(result);
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const containerStyle = {
    background: 'rgba(30, 30, 70, 0.6)',
    borderRadius: '15px',
    padding: '25px',
    border: '1px solid rgba(106, 106, 169, 0.3)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    marginBottom: '30px'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    color: '#ffffff',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const selectContainerStyle = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  };

  const selectStyle = {
    flex: 1,
    padding: '12px 20px',
    borderRadius: '10px',
    border: '1px solid rgba(106, 106, 169, 0.3)',
    background: 'rgba(20, 20, 50, 0.8)',
    color: '#ffffff',
    fontSize: '1rem'
  };

  const buttonStyle = {
    background: 'linear-gradient(90deg, #4a4a8c, #6a6aa9)',
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    alignSelf: 'center'
  };

  const buttonHoverStyle = {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(106, 106, 169, 0.5)'
  };

  const buttonDisabledStyle = {
    opacity: 0.7,
    cursor: 'not-allowed'
  };

  const resultContainerStyle = {
    background: 'rgba(20, 20, 50, 0.8)',
    borderRadius: '10px',
    padding: '20px',
    marginTop: '20px'
  };

  const resultTitleStyle = {
    fontSize: '1.3rem',
    color: '#a0a0d0',
    marginBottom: '15px',
    textAlign: 'center'
  };

  const insightStyle = {
    padding: '10px 15px',
    marginBottom: '10px',
    background: 'rgba(106, 106, 169, 0.2)',
    borderRadius: '8px',
    color: '#c0c0e0'
  };

  const missionComparisonStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginTop: '20px'
  };

  const missionCardStyle = {
    background: 'rgba(10, 10, 30, 0.6)',
    borderRadius: '10px',
    padding: '15px',
    border: '1px solid rgba(106, 106, 169, 0.2)'
  };

  const missionTitleStyle = {
    fontSize: '1.2rem',
    color: '#ffffff',
    marginBottom: '10px',
    textAlign: 'center'
  };

  const missionDetailStyle = {
    fontSize: '0.9rem',
    color: '#a0a0d0',
    margin: '5px 0'
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>AI Mission Comparison Tool</h3>
      
      <form style={formStyle}>
        <div style={selectContainerStyle}>
          <select 
            value={missionA} 
            onChange={(e) => setMissionA(e.target.value)}
            style={selectStyle}
          >
            <option value="">Select Mission A</option>
            {missions.map(mission => (
              <option key={mission.id} value={mission.id}>
                {mission.name} ({mission.planet})
              </option>
            ))}
          </select>
          
          <select 
            value={missionB} 
            onChange={(e) => setMissionB(e.target.value)}
            style={selectStyle}
          >
            <option value="">Select Mission B</option>
            {missions.map(mission => (
              <option key={mission.id} value={mission.id}>
                {mission.name} ({mission.planet})
              </option>
            ))}
          </select>
        </div>
        
        <button
          type="button"
          onClick={handleCompare}
          disabled={!missionA || !missionB || isLoading}
          style={{
            ...buttonStyle,
            ...(isLoading ? buttonDisabledStyle : {})
          }}
          onMouseEnter={(e) => {
            if (!isLoading && missionA && missionB) {
              Object.assign(e.target.style, buttonHoverStyle);
            }
          }}
          onMouseLeave={(e) => {
            Object.keys(buttonHoverStyle).forEach(prop => e.target.style[prop] = '');
          }}
        >
          {isLoading ? 'Comparing...' : 'Compare Missions'}
        </button>
      </form>
      
      {comparisonResult && (
        <div style={resultContainerStyle}>
          <h4 style={resultTitleStyle}>{comparisonResult.comparison.title}</h4>
          
          <div>
            {comparisonResult.comparison.insights.map((insight, index) => (
              <div key={index} style={insightStyle}>
                {insight}
              </div>
            ))}
          </div>
          
          <div style={missionComparisonStyle}>
            <div style={missionCardStyle}>
              <h5 style={missionTitleStyle}>{comparisonResult.missionA.name}</h5>
              <p style={missionDetailStyle}>Planet: {comparisonResult.missionA.planet}</p>
              <p style={missionDetailStyle}>Year: {comparisonResult.missionA.year}</p>
              <p style={missionDetailStyle}>Duration: {comparisonResult.missionA.duration}</p>
              <p style={missionDetailStyle}>Crew: {comparisonResult.missionA.crew}</p>
              <p style={missionDetailStyle}>Budget: {comparisonResult.missionA.budget}</p>
            </div>
            
            <div style={missionCardStyle}>
              <h5 style={missionTitleStyle}>{comparisonResult.missionB.name}</h5>
              <p style={missionDetailStyle}>Planet: {comparisonResult.missionB.planet}</p>
              <p style={missionDetailStyle}>Year: {comparisonResult.missionB.year}</p>
              <p style={missionDetailStyle}>Duration: {comparisonResult.missionB.duration}</p>
              <p style={missionDetailStyle}>Crew: {comparisonResult.missionB.crew}</p>
              <p style={missionDetailStyle}>Budget: {comparisonResult.missionB.budget}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIComparisonTool;