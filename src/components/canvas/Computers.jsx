import React, {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';



const Computers = ({isMobile}) => {
 
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
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [-1,-2.3,-2] : [0, -2.7, -1.7]}
        rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
    const [isMobile, setIsMobile] = useState();
    useEffect(() => {
      const mediaQuery = window;
      
      const handleResize = () => {
        const mediaWidthTrigger = mediaQuery.innerWidth;
        if((mediaWidthTrigger <= 700) && (mediaWidthTrigger > 600) ){
          console.log("hit1");
          setIsMobile(true);
        }
        else{
          console.log("hit2");
          setIsMobile(false);
        }
        // console.log(isMobile);
      }

      mediaQuery.addEventListener('resize', handleResize);

      return () => {  
        mediaQuery.removeEventListener('resize', handleResize);
      }
    }, []);

    // useEffect(() => {
    //   console.log(window.matchMedia('(max-width: 1200px)').matches);
    //   const mediaQuery = window.matchMedia('(max-width: 1200px)');
    //   setIsMobile(mediaQuery.matches);

    //   const handleResize = (e) => {
    //     console.log(isMobile);
    //     setIsMobile(e.matches);  
    //   };

    //   mediaQuery.addEventListener('resize', handleResize);
    //   mediaQuery.addEventListener('resize', () => console.log('resize'));

    //   return () => {
    //     mediaQuery.removeEventListener('resize', handleResize);
    //   }
    // }, []);

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
          <Computers isMobile={isMobile}/>
        </Suspense>

        <Preload all/>
      </Canvas>
    )
}
export default ComputerCanvas;