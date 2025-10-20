import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

// Planet data with accurate colors and relative sizes
const planetData = [
  {
    name: "Mercury",
    color: "#A9A9A9", // Gray
    size: 0.38, // Relative to Earth (0.38)
    position: [-8, 0, 0],
    details: "Smallest planet, heavily cratered"
  },
  {
    name: "Venus",
    color: "#E6BC73", // Pale yellow
    size: 0.95, // Relative to Earth (0.95)
    position: [-6, 0, 0],
    details: "Hottest planet with thick atmosphere"
  },
  {
    name: "Earth",
    color: "#6B93D6", // Blue
    size: 1, // Reference size
    position: [-4, 0, 0],
    details: "Our home planet with liquid water"
  },
  {
    name: "Mars",
    color: "#C1440E", // Red
    size: 0.53, // Relative to Earth (0.53)
    position: [-2, 0, 0],
    details: "The Red Planet with polar ice caps"
  },
  {
    name: "Jupiter",
    color: "#D8CA9D", // Orange and white bands
    size: 11.2, // Relative to Earth (11.2)
    position: [2, 0, 0],
    details: "Largest planet with Great Red Spot"
  },
  {
    name: "Saturn",
    color: "#E3E0C0", // Pale gold
    size: 9.45, // Relative to Earth (9.45)
    position: [6, 0, 0],
    details: "Known for its prominent ring system"
  },
  {
    name: "Uranus",
    color: "#D1E7E7", // Pale blue
    size: 4.01, // Relative to Earth (4.01)
    position: [10, 0, 0],
    details: "Ice giant tilted on its side"
  },
  {
    name: "Neptune",
    color: "#5B5DDF", // Deep blue
    size: 3.88, // Relative to Earth (3.88)
    position: [14, 0, 0],
    details: "Windiest planet with dark storms"
  },
  {
    name: "Moon",
    color: "#D3D3D3", // Light gray
    size: 0.27, // Relative to Earth (0.27)
    position: [0, 1.5, 0],
    details: "Earth's natural satellite"
  }
];

// Custom shader material for more realistic planets
const PlanetMaterial = ({ color, planetName }) => {
  const materialRef = useRef();
  
  // Create a subtle noise pattern for texture effect
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    // Create a gradient based on planet color
    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, color);
    
    // Adjust color for highlight/shadow effect
    const colorObj = new THREE.Color(color);
    const highlight = colorObj.clone().multiplyScalar(1.2);
    const shadow = colorObj.clone().multiplyScalar(0.8);
    
    gradient.addColorStop(0.7, `#${highlight.getHexString()}`);
    gradient.addColorStop(1, `#${shadow.getHexString()}`);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
    
    // Add some noise for texture
    const imageData = ctx.getImageData(0, 0, 256, 256);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      // Add subtle noise
      const noise = (Math.random() - 0.5) * 30;
      data[i] = Math.min(255, Math.max(0, data[i] + noise)); // R
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise)); // G
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise)); // B
    }
    
    ctx.putImageData(imageData, 0, 0);
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, [color]);
  
  return (
    <meshStandardMaterial 
      ref={materialRef}
      map={texture}
      metalness={0.1}
      roughness={0.7}
    />
  );
};

const Planet = ({ planetName, color, size, position, onClick, details }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      if (hovered) {
        meshRef.current.scale.setScalar(1.1);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  const handleClick = () => {
    if (onClick) onClick(planetName);
  };

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size * 0.1, 64, 64]} />
        <PlanetMaterial color={color} planetName={planetName} />
      </mesh>
      <Text
        position={[0, size * 0.1 + 0.5, 0]}
        color="white"
        fontSize={hovered ? 0.3 : 0.2}
        maxWidth={10}
        textAlign="center"
        outlineWidth={0.01}
        outlineColor="#000000"
      >
        {planetName}
      </Text>
      {hovered && (
        <Text
          position={[0, size * 0.1 + 0.9, 0]}
          color="#a0a0d0"
          fontSize={0.15}
          maxWidth={15}
          textAlign="center"
          outlineWidth={0.01}
          outlineColor="#000000"
        >
          {details}
        </Text>
      )}
    </group>
  );
};

const PlanetScene = ({ onPlanetClick }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        castShadow
      />
      {planetData.map((planet) => (
        <Planet 
          key={planet.name}
          planetName={planet.name}
          color={planet.color}
          size={planet.size}
          position={planet.position}
          onClick={onPlanetClick}
          details={planet.details}
        />
      ))}
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const PlanetGlobe = ({ onPlanetClick }) => {
  return (
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 25], fov: 50 }} shadows>
        <PlanetScene onPlanetClick={onPlanetClick} />
      </Canvas>
    </div>
  );
};

export default PlanetGlobe;