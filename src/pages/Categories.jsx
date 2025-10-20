import React from 'react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Human Spaceflight",
      description: "Missions that carry humans beyond Earth's atmosphere, including Apollo, Artemis, and the International Space Station.",
      missions: 45
    },
    {
      id: 2,
      title: "Planetary Missions",
      description: "Exploration of our solar system's planets and moons, including Mars rovers, Jupiter probes, and Saturn missions.",
      missions: 78
    },
    {
      id: 3,
      title: "Space Telescopes",
      description: "Orbital observatories that study the universe from space, including Hubble, James Webb, and future telescopes.",
      missions: 12
    },
    {
      id: 4,
      title: "Deep Space",
      description: "Voyages to the far reaches of our solar system and beyond, including Voyager and New Horizons missions.",
      missions: 23
    }
  ];

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

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardStyle = {
    background: 'rgba(30, 30, 70, 0.6)',
    borderRadius: '20px',
    padding: '30px',
    textAlign: 'center',
    border: '1px solid rgba(106, 106, 169, 0.3)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
  };

  const titleStyle2 = {
    fontSize: '1.5rem',
    marginBottom: '15px',
    color: '#ffffff'
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#c0c0e0',
    lineHeight: '1.6',
    marginBottom: '20px'
  };

  const countStyle = {
    display: 'inline-block',
    padding: '5px 15px',
    background: 'rgba(106, 106, 169, 0.3)',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#a0a0d0'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Mission Categories</h1>
      <div style={gridStyle}>
        {categories.map((category) => (
          <div key={category.id} style={cardStyle}>
            <h3 style={titleStyle2}>{category.title}</h3>
            <p style={descriptionStyle}>{category.description}</p>
            <span style={countStyle}>{category.missions} missions</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;