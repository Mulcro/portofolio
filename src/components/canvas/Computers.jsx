import React, {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';



const Computers = () => {
 
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={1.75} groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight 
        position={[-3,5,1]}
        intensity={300}
        angle={2}
        penumbra={1}
        castShadow
        shadow-mapSize-width={1024}
      />

      <primitive
        object={computer.scene}
        scale={0.65}
        position={ [0, -2.7, -1.7]}
        rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
    return (
      <Canvas
        frameloop='demand'
        shadows
        camera={{position:[20,3,5], fov: 25}}
        gl={{preserveDrawingBuffer: true}}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls 
            enableZoom={false} 
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>

        <Preload all/>
      </Canvas>
    )
}
export default ComputerCanvas;