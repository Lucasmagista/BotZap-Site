import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

// Propriedades para o modelo
interface BotModelProps {
  color: string;
  wireframe: boolean;
  scale?: number;
  position?: [number, number, number];
}

// Componente do modelo 3D
const BotModel: React.FC<BotModelProps> = ({ color, wireframe, scale = 5, position = [0, -1, 0] }) => {
  // Referência para o modelo
  const meshRef = useRef<THREE.Group>(null);
  
  // Estado para o hover
  const [hovered, setHovered] = useState(false);
  
  // Animação básica para o modelo
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Movimento suave de flutuação
    meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.15;
    
    // Rotação lenta quando não está sendo controlada pelo usuário
    if (!hovered) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  // Em uma implementação real, substituiríamos isso por um modelo real carregado
  // Como não temos um modelo GLTF real, vamos criar uma forma 3D simples
  const botColor = new THREE.Color(color);
  
  return (
    <group
      ref={meshRef}
      position={position}
      scale={[scale, scale, scale]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Corpo do bot */}
      <mesh castShadow>
        <boxGeometry args={[0.3, 0.5, 0.2]} />
        <meshStandardMaterial 
          color={botColor} 
          wireframe={wireframe}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Cabeça do bot */}
      <mesh castShadow position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.2, 32, 16]} />
        <meshStandardMaterial 
          color={botColor} 
          wireframe={wireframe}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Olhos */}
      <mesh position={[-0.08, 0.35, 0.15]}>
        <sphereGeometry args={[0.03, 16, 8]} />
        <meshStandardMaterial 
          color={wireframe ? botColor : new THREE.Color('white')} 
          wireframe={wireframe}
          emissive={new THREE.Color('white')}
          emissiveIntensity={0.5}
        />
      </mesh>
      
      <mesh position={[0.08, 0.35, 0.15]}>
        <sphereGeometry args={[0.03, 16, 8]} />
        <meshStandardMaterial 
          color={wireframe ? botColor : new THREE.Color('white')} 
          wireframe={wireframe}
          emissive={new THREE.Color('white')}
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Antena */}
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.15, 16]} />
        <meshStandardMaterial 
          color={botColor} 
          wireframe={wireframe}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      <mesh position={[0, 0.65, 0]}>
        <sphereGeometry args={[0.02, 16, 8]} />
        <meshStandardMaterial 
          color={new THREE.Color('#ff0000')} 
          wireframe={wireframe}
          emissive={new THREE.Color('#ff0000')}
          emissiveIntensity={0.8}
        />
      </mesh>
      
      {/* Braços */}
      <mesh position={[-0.2, 0.05, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <cylinderGeometry args={[0.03, 0.03, 0.3, 16]} />
        <meshStandardMaterial 
          color={botColor} 
          wireframe={wireframe}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      <mesh position={[0.2, 0.05, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.03, 0.03, 0.3, 16]} />
        <meshStandardMaterial 
          color={botColor} 
          wireframe={wireframe}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Pernas */}
      <mesh position={[-0.1, -0.3, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.2, 16]} />
        <meshStandardMaterial 
          color={botColor} 
          wireframe={wireframe}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      <mesh position={[0.1, -0.3, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.2, 16]} />
        <meshStandardMaterial 
          color={botColor} 
          wireframe={wireframe}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
};

// Componente principal para renderização 3D
interface BotModel3DProps {
  color: string;
  wireframe: boolean;
}

const BotModel3D: React.FC<BotModel3DProps> = ({ color = '#1976D2', wireframe = false }) => {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
      <color attach="background" args={['#000']} />
      
      {/* Ambiente e iluminação */}
      <ambientLight intensity={0.4} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={1} 
        castShadow 
      />
      <pointLight position={[-10, 0, -10]} intensity={0.5} />
      
      {/* Modelo 3D do bot */}
      <Float 
        speed={2} // Velocidade de animação
        rotationIntensity={0.5} // Intensidade da rotação XYZ
        floatIntensity={1} // Intensidade da flutuação para cima/baixo
      >
        <BotModel color={color} wireframe={wireframe} />
      </Float>
      
      {/* Sombras e reflexos */}
      <ContactShadows 
        position={[0, -1.5, 0]}
        opacity={0.6}
        scale={10}
        blur={1}
        far={1.5}
      />
      
      {/* Controles de câmera */}
      <OrbitControls 
        enablePan={false}
        minDistance={3}
        maxDistance={10}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
      />
      
      {/* Ambiente HDR para melhorar a iluminação e reflexos */}
      <Environment preset="city" />
    </Canvas>
  );
};

export default BotModel3D;