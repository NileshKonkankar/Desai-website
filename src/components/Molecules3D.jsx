import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Generate static atoms once to avoid purity issues in render
const STATIC_ATOMS = Array.from({ length: 40 }).map(() => ({
  position: [
    (Math.random() - 0.5) * 15,
    (Math.random() - 0.5) * 15,
    (Math.random() - 0.5) * 10
  ],
  scale: Math.random() * 0.5 + 0.2,
  color: Math.random() > 0.85 ? '#eb5a00' : Math.random() > 0.3 ? '#2d2c2f' : '#dbd2c3'
}));

const Molecules3D = () => {
  const groupRef = useRef();

  // Atoms and bonds are derived from the static baseline
  const atoms = useMemo(() => STATIC_ATOMS, []);

  // Generate bonds (lines) between close atoms
  const bonds = useMemo(() => {
    const lines = [];
    for (let i = 0; i < atoms.length; i++) {
      for (let j = i + 1; j < atoms.length; j++) {
        const dx = atoms[i].position[0] - atoms[j].position[0];
        const dy = atoms[i].position[1] - atoms[j].position[1];
        const dz = atoms[i].position[2] - atoms[j].position[2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        // Only connect atoms that are close to each other
        if (distance < 5) {
          lines.push([atoms[i].position, atoms[j].position]);
        }
      }
    }
    return lines;
  }, [atoms]);

  useFrame((state) => {
    // Smoothly interpolate mouse movement for interactive rotation
    if (groupRef.current) {
      // Base rotation from time
      const timeRotationY = state.clock.elapsedTime * 0.05;
      const timeRotationX = state.clock.elapsedTime * 0.02;
      
      // Target rotation based on mouse position (-1 to 1)
      const targetMouseRotationY = state.mouse.x * 0.5;
      const targetMouseRotationX = -state.mouse.y * 0.5;

      // Lerp (Linear Interpolation) for smooth movement
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, timeRotationY + targetMouseRotationY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, timeRotationX + targetMouseRotationX, 0.05);
    }
  });

  return (
    <>
      {/* Lighting setup matching Industrial Brutalist */}
      {/* Intense directional light to cast harsh highlights */}
      <directionalLight position={[10, 10, 5]} intensity={5} color="#dbd2c3" />
      {/* Fill light */}
      <ambientLight intensity={0.8} />
      {/* Rim light simulating the Signal orange */}
      <spotLight position={[-10, -10, -5]} intensity={8} color="#eb5a00" />
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <group ref={groupRef}>
          
          {/* Render Atoms */}
          {atoms.map((atom, index) => (
            <Sphere key={`atom-${index}`} position={atom.position} scale={atom.scale} args={[1, 32, 32]}>
              <meshStandardMaterial 
                color={atom.color} 
                roughness={0.2} 
                metalness={0.8} 
              />
            </Sphere>
          ))}

          {/* Render Bonds */}
          {bonds.map((bond, index) => (
            <Line 
              key={`bond-${index}`}
              points={bond}
              color="#2d2c2f"
              lineWidth={2}
              transparent
              opacity={0.5}
            />
          ))}

        </group>
      </Float>
    </>
  );
};

export default Molecules3D;
