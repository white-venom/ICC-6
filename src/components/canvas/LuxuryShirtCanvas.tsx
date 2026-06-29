"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function LogoModel({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, "/assets/logo/logo.png");

  useFrame((state) => {
    if (!groupRef.current) return;
    const { x, y } = state.pointer;
    
    // Slow elegant constant rotation + mouse response
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2 + x * 0.35;
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.12) * 0.08 - y * 0.2;
    
    // Zoom away smoothly on scroll
    const targetScale = Math.max(0.5, 1 - scrollProgress * 0.5);
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
  });

  const goldMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color("#C5A880"),
      metalness: 0.95,
      roughness: 0.15,
      envMapIntensity: 2.0,
    });
  }, []);

  const darkObsidianMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#08080c"),
      roughness: 0.2,
      metalness: 0.3,
      clearcoat: 0.6,
      clearcoatRoughness: 0.1,
    });
  }, []);

  const logoFaceMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: texture,
      transparent: true,
      roughness: 0.2,
      metalness: 0.8,
    });
  }, [texture]);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.5}>
        {/* Main Metallic Gold Medallion Body */}
        <mesh material={darkObsidianMaterial} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.6, 1.6, 0.15, 64]} />
        </mesh>

        {/* Outer Gold Bezel Trim Ring */}
        <mesh material={goldMaterial} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.62, 0.04, 16, 64]} />
        </mesh>
        
        {/* Inner Gold Inlay Ring */}
        <mesh material={goldMaterial} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.45, 0.02, 16, 64]} />
        </mesh>

        {/* Front Logo Face */}
        <mesh material={logoFaceMaterial} position={[0, 0, 0.081]} rotation={[0, 0, 0]}>
          <planeGeometry args={[2.2, 2.2]} />
        </mesh>

        {/* Back Logo Face */}
        <mesh material={logoFaceMaterial} position={[0, 0, -0.081]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[2.2, 2.2]} />
        </mesh>
      </Float>
    </group>
  );
}

export default function LuxuryShirtCanvas({ scrollProgress = 0 }: { scrollProgress?: number }) {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        {/* Soft Ambient & Luxury Spotlights */}
        <ambientLight intensity={0.7} />
        <spotLight
          position={[5, 8, 5]}
          angle={0.4}
          penumbra={1}
          intensity={3.0}
          color="#F4F4F0"
          castShadow
        />
        <spotLight
          position={[-5, -4, -2]}
          angle={0.5}
          penumbra={0.8}
          intensity={2.2}
          color="#C5A880"
        />
        <pointLight position={[0, 0, 3]} intensity={1.0} color="#E5C99F" />

        {/* Ambient Floating Dust Particles */}
        <Sparkles
          count={85}
          scale={9}
          size={2.5}
          speed={0.4}
          opacity={0.35}
          color="#C5A880"
        />

        {/* Floating 3D Logo Medallion Model */}
        <React.Suspense fallback={null}>
          <LogoModel scrollProgress={scrollProgress} />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
