import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Audio from './components/views/Audio/Audio';
import Home from './components/views/Home/Home';
import Photoshop from './components/views/Photoshop/Photoshop';
import Calculator from './components/views/Calculator/CalculatorContainer';
import OrganizerClock from './components/views/Organizer/OrganizerClockContainer';
import OrganizerAdd from './components/views/Organizer/OrganizerContainer';
import {AnimatedSwitch} from 'react-router-transition';
import './index.css';
import Projects from './components/views/Projects/ProjectsContainer';


function App() {

  return (
   <Router>
    <MainLayout>

    <Home>
      <AnimatedSwitch atEnter={{opacity: 1 ,translateY:500 }}
      atLeave={{opacity: 0 ,translateY:-500}}
      atActive={{ opacity: 1 ,translateY:0, }}
      className='switch-wrapper'
      mapStyles={styles => ({
              transform: `translateY(${styles.translateY}px)`,
              opacity: styles.opacity,
            })}>
      
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Projects} />     
      <Route exact path={`${process.env.PUBLIC_URL}/projects/audio`} component={Audio} />
      <Route exact path={`${process.env.PUBLIC_URL}/projects/photoshop`} component={Photoshop} />      
      <Route exact path={`${process.env.PUBLIC_URL}/projects/calculator`} component={Calculator} />
      <Route exact path={`${process.env.PUBLIC_URL}/projects/organizer`} component={OrganizerClock} />
      <Route exact path={`${process.env.PUBLIC_URL}/projects/organizer/add`} component={OrganizerAdd} />

      </AnimatedSwitch>
   </Home>
    </MainLayout>

  </Router>

    
  );
}

export default App;
