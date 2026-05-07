'use client';

import { Float, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function ThreeScene() {
    return (
        <div className="pointer-events-none absolute inset-0 opacity-70">
            <Canvas camera={{ position: [0, 0, 7], fov: 38 }}>
                <ambientLight intensity={0.55} />
                <directionalLight position={[3, 4, 5]} intensity={1.2} />
                <Float speed={1.2} rotationIntensity={0.45} floatIntensity={1.2}>
                    <mesh>
                        <icosahedronGeometry args={[2.4, 3]} />
                        <meshStandardMaterial color="#60a5fa" emissive="#1d4ed8" emissiveIntensity={0.75} metalness={0.5} roughness={0.18} />
                    </mesh>
                </Float>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.4, 0]}>
                    <ringGeometry args={[4.5, 5.5, 64]} />
                    <meshBasicMaterial color="#93c5fd" transparent opacity={0.18} side={2} />
                </mesh>
                <Environment preset="dawn" />
            </Canvas>
        </div>
    );
}
