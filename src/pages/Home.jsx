import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PlanetGlobe from '../components/3d/PlanetGlobe';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  // Create twinkling stars for background
  const createStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
      };
      stars.push(<div key={i} className="star" style={style}></div>);
    }
    return stars;
  };

  const handlePlanetClick = (planetName) => {
    setSelectedPlanet(planetName);
    // Scroll to the mission section
    setTimeout(() => {
      const element = document.querySelector('.mission-preview');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const planetVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="stars-container">
          {createStars()}
        </div>
        {/* Replace the rocket with a satellite */}
        <div className="rotating-planet">
          <svg className="satellite-svg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            {/* Satellite body */}
            <rect x="70" y="40" width="60" height="20" rx="5" fill="#c0c0c0" />
            
            {/* Satellite solar panels */}
            <rect x="40" y="35" width="25" height="30" rx="3" fill="#a0d0ff" className="satellite-panel" />
            <rect x="135" y="35" width="25" height="30" rx="3" fill="#a0d0ff" className="satellite-panel" />
            
            {/* Satellite antenna */}
            <line x1="100" y1="30" x2="100" y2="15" stroke="#d0d0d0" strokeWidth="2" className="satellite-antenna" />
            <circle cx="100" cy="15" r="3" fill="#ff5555" />
            
            {/* Satellite details */}
            <circle cx="85" cy="50" r="5" fill="#e0e0e0" />
            <circle cx="115" cy="50" r="5" fill="#e0e0e0" />
            
            {/* Satellite dish */}
            <ellipse cx="150" cy="50" rx="15" ry="10" fill="#d0d0d0" />
            <ellipse cx="150" cy="50" rx="10" ry="7" fill="#a0a0a0" />
            
            {/* Satellite thrusters */}
            <rect x="75" y="65" width="8" height="5" rx="2" fill="#ff5500" />
            <rect x="117" y="65" width="8" height="5" rx="2" fill="#ff5500" />
          </svg>
        </div>
      
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            NASA MISSION EXPLORER
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Explore Past, Present & Future Missions
          </motion.p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Start Exploring
          </motion.button>
        </motion.div>
      </section>

      {/* Interactive 3D Planet Section */}
      <motion.section 
        className="planet-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          Explore Planetary Missions
        </motion.h2>
        <motion.div 
          className="planet-globe-container"
          variants={planetVariants}
        >
          <PlanetGlobe onPlanetClick={handlePlanetClick} />
          {selectedPlanet && (
            <motion.div 
              className="planet-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>Selected: {selectedPlanet}</h3>
              <p>Click on missions below to explore {selectedPlanet} missions</p>
            </motion.div>
          )}
        </motion.div>
      </motion.section>

      {/* Mission Timeline Teaser */}
      <motion.section 
        className="timeline-teaser"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          Travel through NASA's historic and future missions
        </motion.h2>
        
        <motion.div 
          className="timeline-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { year: '1969', title: 'Apollo 11', status: 'completed' },
            { year: '1977', title: 'Voyager', status: 'active' },
            { year: '1990', title: 'Hubble', status: 'active' },
            { year: '2011', title: 'Juno', status: 'active' },
            { year: '2021', title: 'James Webb', status: 'active' },
            { year: '2025', title: 'Artemis', status: 'planned' },
          ].map((mission, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${mission.status}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="timeline-year">{mission.year}</div>
              <div className="timeline-card">
                <h3>{mission.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Mission Categories */}
      <motion.section 
        className="categories-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          Explore Mission Categories
        </motion.h2>
        
        <motion.div 
          className="categories-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { id: 1, title: 'Human Spaceflight', description: 'Missions with human astronauts' },
            { id: 2, title: 'Planetary Missions', description: 'Exploration of planets and moons' },
            { id: 3, title: 'Space Telescopes', description: 'Orbital observatories' },
            { id: 4, title: 'Deep Space', description: 'Voyages to the edge of our system' },
          ].map((category) => (
            <motion.div
              key={category.id}
              className="category-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 30px rgba(106, 106, 169, 0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Mission Profile Preview */}
      <motion.section 
        className="mission-preview"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          Mission Highlights
        </motion.h2>
        
        <motion.div 
          className="mission-preview-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { id: 1, name: 'Apollo 11', description: 'First crewed mission to land on the Moon' },
            { id: 2, name: 'Artemis', description: 'Program to return humans to the Moon' },
          ].map((mission) => (
            <motion.div
              key={mission.id}
              className="mission-preview-item"
              variants={itemVariants}
              whileHover={{ boxShadow: "0 20px 30px rgba(106, 106, 169, 0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mission-image-placeholder">
                🚀
              </div>
              <div className="mission-details">
                <h3>{mission.name}</h3>
                <p>{mission.description}</p>
                <Link to="/mission/1" className="mission-link">Explore Mission</Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Search & Filter */}
      <motion.section 
        className="search-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          Find Your Next Mission
        </motion.h2>
        
        <motion.div 
          className="search-container"
          variants={itemVariants}
        >
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by Mission Name or Planet"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-options">
            <select className="filter-select">
              <option>Status</option>
              <option>Active</option>
              <option>Completed</option>
              <option>Planned</option>
            </select>
            <select className="filter-select">
              <option>Planet Focus</option>
              <option>Mars</option>
              <option>Moon</option>
              <option>Jupiter</option>
            </select>
            <select className="filter-select">
              <option>Year Range</option>
              <option>1960s-1970s</option>
              <option>1980s-1990s</option>
              <option>2000s-2010s</option>
              <option>2020s-2030s</option>
            </select>
          </div>
        </motion.div>
        
        <motion.div 
          className="search-results"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="result-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="result-icon">
              🚀
            </div>
            <div className="result-content">
              <h4>Apollo 11</h4>
              <p>First crewed mission to land on the Moon</p>
            </div>
          </motion.div>
          
          <motion.div
            className="result-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="result-icon">
              🌍
            </div>
            <div className="result-content">
              <h4>Mars Rover Perseverance</h4>
              <p>Robotic Mars rover exploring the Jezero crater</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Educational Insights */}
      <motion.section 
        className="insights-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          Space Facts & Insights
        </motion.h2>
        
        <motion.div 
          className="insights-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { id: 1, fact: 'The Hubble Space Telescope travels at 5 miles per second', category: 'Speed' },
            { id: 2, fact: 'Voyager 1 is over 14 billion miles away from Earth', category: 'Distance' },
            { id: 3, fact: 'The ISS orbits Earth every 90 minutes', category: 'Orbit' },
          ].map((insight) => (
            <motion.div
              key={insight.id}
              className="insight-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="insight-category">{insight.category}</div>
              <p className="insight-fact">{insight.fact}</p>
              <button className="share-button">Share</button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Final CTA / Footer */}
      <motion.section 
        className="cta-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="cta-content">
          <motion.h2 
            className="cta-title"
            variants={itemVariants}
          >
            The Universe is waiting
          </motion.h2>
          <motion.p variants={itemVariants}>
            Start your journey with NASA Mission Explorer
          </motion.p>
          
          <motion.div 
            className="cta-buttons"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link to="/timeline" className="cta-secondary-button">
              Explore Timeline
            </Link>
            <Link to="/categories" className="cta-secondary-button">
              Browse Categories
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;