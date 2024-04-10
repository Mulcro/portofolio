import React from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import { Suspense } from 'react'
import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('../../public/planet/scene.gltf')

  return (
    <primitive 
      object={earth.scene}
      scale={1.7}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{position: [0,0,5], fov: 45,near:0.1,far:200}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default EarthCanvas