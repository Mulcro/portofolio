import { BrowserRouter } from 'react-router-dom';
import {useRef, useEffect} from 'react';
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

function App() {
  const heroRef = useRef(null);

  useEffect(() => {
    if(!heroRef.current) return;
    const updateMousePosition = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      heroRef.current.style.setProperty('--x', `${x}px`);
      heroRef.current.style.setProperty('--y', `${y}px`);
    }

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <BrowserRouter>
      <div ref={heroRef} className="hero relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
