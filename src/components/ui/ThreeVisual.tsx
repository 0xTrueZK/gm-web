"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Text, Box, Torus } from "@react-three/drei";
import * as THREE from "three";

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Box ref={meshRef} args={[0.5, 0.5, 0.5]}>
        <meshPhysicalMaterial 
          color="#00d2fd" 
          emissive="#00d2fd"
          emissiveIntensity={0.5}
          wireframe={true}
          transparent
          opacity={0.8}
        />
      </Box>
      <Box args={[0.4, 0.4, 0.4]}>
        <meshBasicMaterial color="#6dddff" transparent opacity={0.3} />
      </Box>
    </Float>
  );
}

const FIATS = [
  { name: "USD", color: "#b1ffce", angle: 0 },
  { name: "JPY", color: "#6dddff", angle: (Math.PI * 2) / 3 },
  { name: "EUR", color: "#d674ff", angle: ((Math.PI * 2) / 3) * 2 },
];

function ConcentricSystem() {
  const outerRingRef = useRef<THREE.Group>(null);
  const innerRingRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = -(state.clock.elapsedTime * 0.1);
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  const outerRadius = 3;
  const innerRadius = 1.8;

  return (
    <group rotation={[Math.PI / 4, 0, 0]}>
      
      <mesh position={[0,0,-0.1]}>
        <circleGeometry args={[1, 64]} />
        <meshBasicMaterial color="#0e0e0e" />
      </mesh>
      
      <mesh position={[0,0,-0.05]}>
        <circleGeometry args={[1.2, 64]} />
        <meshBasicMaterial color="#00d2fd" transparent opacity={0.1} />
      </mesh>

      <group ref={innerRingRef}>
        <Torus args={[innerRadius, 0.01, 16, 100]}>
          <meshBasicMaterial color="#6dddff" transparent opacity={0.3} />
        </Torus>
      </group>

      <group ref={outerRingRef}>
        <Torus args={[outerRadius, 0.01, 16, 100]}>
          <meshBasicMaterial color="#494847" />
        </Torus>
        
        {FIATS.map((fiat) => {
          const x = Math.cos(fiat.angle) * outerRadius;
          const y = Math.sin(fiat.angle) * outerRadius;
          return (
            <group key={fiat.name} position={[x, y, 0]}>
              <mesh>
                <circleGeometry args={[0.3, 32]} />
                <meshBasicMaterial color="#1a1919" />
              </mesh>
              <mesh position={[0,0,-0.01]}>
                <circleGeometry args={[0.32, 32]} />
                <meshBasicMaterial color="#262626" />
              </mesh>
              <Text
                position={[0, 0, 0.01]}
                fontSize={0.15}
                color={fiat.color}
                anchorX="center"
                anchorY="middle"
              >
                {fiat.name}
              </Text>
            </group>
          );
        })}
      </group>

      <RotatingCube />
    </group>
  );
}

import { Suspense } from "react";

export default function ThreeVisual() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none fade-in overflow-hidden">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ powerPreference: "high-performance", antialias: false }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={['#0e0e0e', 5, 20]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} intensity={1.5} color="#6dddff" />
          
          <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
          
          <group position={[0, -0.5, 0]}>
            <ConcentricSystem />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}
