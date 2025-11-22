import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';

export function HologramCard({ project, position }) {
  const mesh = useRef();
  const hologram = useRef();

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (hologram.current) {
      hologram.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        {/* Hologram Effect */}
        <mesh ref={hologram} position={[0, 0.5, 0]}>
          <planeGeometry args={[3, 2]} />
          <meshBasicMaterial
            color="#00F5FF"
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Card Base */}
        <mesh ref={mesh}>
          <boxGeometry args={[2.8, 1.8, 0.1]} />
          <meshPhysicalMaterial
            color="#0A0A0A"
            metalness={0.8}
            roughness={0.2}
            clearcoat={1}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Project Title */}
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.2}
          color="#00F5FF"
          anchorX="center"
          anchorY="center"
        >
          {project.title}
        </Text>
      </Float>
    </group>
  );
}