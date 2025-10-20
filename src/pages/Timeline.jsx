import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Timeline.css';

const Timeline = () => {
  // Sample mission data
  const missions = [
    {
      id: 1,
      title: "Apollo 11",
      date: "1969",
      status: "completed",
      description: "First crewed mission to land on the Moon.",
      category: "Moon"
    },
    {
      id: 2,
      title: "Voyager 1",
      date: "1977",
      status: "active",
      description: "Space probe launched to study outer Solar System.",
      category: "Deep Space"
    },
    {
      id: 3,
      title: "Hubble Space Telescope",
      date: "1990",
      status: "active",
      description: "Space telescope launched into low Earth orbit.",
      category: "Space Telescopes"
    },
    {
      id: 4,
      title: "Mars Rover Perseverance",
      date: "2021",
      status: "active",
      description: "Robotic Mars rover designed to explore the Jezero crater.",
      category: "Mars"
    },
    {
      id: 5,
      title: "James Webb Space Telescope",
      date: "2021",
      status: "active",
      description: "Large infrared telescope launched to study the early universe.",
      category: "Space Telescopes"
    },
    {
      id: 6,
      title: "Artemis Program",
      date: "2025-2030",
      status: "planned",
      description: "Program to return humans to the Moon and establish a permanent presence.",
      category: "Moon"
    },
    {
      id: 7,
      title: "Europa Clipper",
      date: "2024",
      status: "planned",
      description: "Mission to investigate Jupiter's moon Europa for signs of habitability.",
      category: "Jupiter"
    },
    {
      id: 8,
      title: "Mars Sample Return",
      date: "2027-2030",
      status: "planned",
      description: "Mission to return samples from Mars to Earth.",
      category: "Mars"
    }
  ];

  const [filter, setFilter] = useState('all');
  const [decadeFilter, setDecadeFilter] = useState('all');

  const getStatusStyle = (status) => {
    switch (status) {
      case "completed":
        return { 
          background: "rgba(46, 204, 113, 0.2)", 
          color: "#2ecc71",
          boxShadow: "0 0 15px rgba(46, 204, 113, 0.5)"
        };
      case "active":
        return { 
          background: "rgba(52, 152, 219, 0.2)", 
          color: "#3498db",
          boxShadow: "0 0 15px rgba(52, 152, 219, 0.5)"
        };
      case "planned":
        return { 
          background: "rgba(155, 89, 182, 0.2)", 
          color: "#9b59b6",
          boxShadow: "0 0 15px rgba(155, 89, 182, 0.5)"
        };
      default:
        return { 
          background: "rgba(106, 106, 169, 0.2)", 
          color: "#6a6aa9",
          boxShadow: "0 0 15px rgba(106, 106, 169, 0.5)"
        };
    }
  };

  const filteredMissions = missions.filter(mission => {
    if (filter === 'all') return true;
    if (filter === 'planned') return mission.status === 'planned';
    if (filter === 'active') return mission.status === 'active';
    if (filter === 'completed') return mission.status === 'completed';
    return mission.category.toLowerCase().includes(filter.toLowerCase());
  });

  const decadeFilteredMissions = filteredMissions.filter(mission => {
    if (decadeFilter === 'all') return true;
    const year = parseInt(mission.date);
    if (isNaN(year)) return true; // For date ranges like "2025-2030"
    
    switch (decadeFilter) {
      case '1960s':
        return year >= 1960 && year < 1970;
      case '1970s':
        return year >= 1970 && year < 1980;
      case '1980s':
        return year >= 1980 && year < 1990;
      case '1990s':
        return year >= 1990 && year < 2000;
      case '2000s':
        return year >= 2000 && year < 2010;
      case '2010s':
        return year >= 2010 && year < 2020;
      case '2020s':
        return year >= 2020 && year < 2030;
      default:
        return true;
    }
  });

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

  const filterContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '30px',
    flexWrap: 'wrap'
  };

  const filterButtonStyle = {
    background: 'rgba(106, 106, 169, 0.3)',
    color: '#a0a0d0',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease'
  };

  const activeFilterStyle = {
    ...filterButtonStyle,
    background: 'rgba(106, 106, 169, 0.7)',
    color: '#ffffff'
  };

  const timelineStyle = {
    position: 'relative',
    maxWidth: '100%',
    margin: '0 auto',
    padding: '20px 0',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    paddingBottom: '30px'
  };

  const timelineItemStyle = {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
    marginRight: '30px',
    width: '280px',
    padding: '20px',
    boxSizing: 'border-box'
  };

  const cardStyle = {
    background: 'rgba(30, 30, 70, 0.6)',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(106, 106, 169, 0.3)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  const titleStyle2 = {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#ffffff'
  };

  const dateStyle = {
    fontSize: '1rem',
    color: '#a0a0d0',
    marginBottom: '15px'
  };

  const statusStyle = {
    display: 'inline-block',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '15px'
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#c0c0e0',
    lineHeight: '1.6',
    flexGrow: 1
  };

  const categoryStyle = {
    display: 'inline-block',
    padding: '3px 10px',
    background: 'rgba(106, 106, 169, 0.2)',
    borderRadius: '10px',
    fontSize: '0.8rem',
    color: '#a0a0d0',
    marginTop: '10px'
  };

  return (
    <motion.div 
      style={containerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        style={titleStyle}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Mission Timeline Explorer
      </motion.h1>
      
      <motion.div 
        style={filterContainerStyle}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <button 
          style={filter === 'all' ? activeFilterStyle : filterButtonStyle}
          onClick={() => setFilter('all')}
        >
          All Missions
        </button>
        <button 
          style={filter === 'planned' ? activeFilterStyle : filterButtonStyle}
          onClick={() => setFilter('planned')}
        >
          Planned
        </button>
        <button 
          style={filter === 'active' ? activeFilterStyle : filterButtonStyle}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button 
          style={filter === 'completed' ? activeFilterStyle : filterButtonStyle}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button 
          style={filter === 'Moon' ? activeFilterStyle : filterButtonStyle}
          onClick={() => setFilter('Moon')}
        >
          Moon
        </button>
        <button 
          style={filter === 'Mars' ? activeFilterStyle : filterButtonStyle}
          onClick={() => setFilter('Mars')}
        >
          Mars
        </button>
      </motion.div>
      
      <motion.div 
        style={filterContainerStyle}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <select 
          className="filter-select"
          onChange={(e) => setDecadeFilter(e.target.value)}
          value={decadeFilter}
        >
          <option value="all">All Decades</option>
          <option value="1960s">1960s</option>
          <option value="1970s">1970s</option>
          <option value="1980s">1980s</option>
          <option value="1990s">1990s</option>
          <option value="2000s">2000s</option>
          <option value="2010s">2010s</option>
          <option value="2020s">2020s</option>
        </select>
      </motion.div>

      <motion.div 
        style={timelineStyle}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {decadeFilteredMissions.map((mission, index) => (
          <motion.div 
            key={mission.id} 
            style={timelineItemStyle}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
          >
            <div style={cardStyle}>
              <h3 style={titleStyle2}>{mission.title}</h3>
              <p style={dateStyle}>{mission.date}</p>
              <span style={{...statusStyle, ...getStatusStyle(mission.status)}}>
                {mission.status.charAt(0).toUpperCase() + mission.status.slice(1)}
              </span>
              <p style={descriptionStyle}>{mission.description}</p>
              <span style={categoryStyle}>{mission.category}</span>
              <Link to={`/mission/${mission.id}`} className="explore-link">
                Explore Mission
              </Link>
            </div>
          </motion.div>
        ))}
        
        {decadeFilteredMissions.length === 0 && (
          <div style={{ textAlign: 'center', width: '100%', color: '#a0a0d0' }}>
            <p>No missions found matching your filters.</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Timeline;