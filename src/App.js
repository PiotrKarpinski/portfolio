import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Audio from './components/views/Audio/Audio';
import Home from './components/views/Home/Home';
import Photoshop from './components/views/Photoshop/Photoshop';
import Calculator from './components/views/Calculator/Calculator';
import Organizer from './components/views/Organizer/Organizer';
import OrganizerAdd from './components/views/Organizer/OrganizerAdd';
import Projects from './components/views/Projects/Projects';

function App() {
  return (
   <BrowserRouter>
    <MainLayout>
    <Home>
      <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/projects/`} component={Projects} />
      <Route exact path={`${process.env.PUBLIC_URL}/projects/audio`} component={Audio} />
      <Route exact path={`${process.env.PUBLIC_URL}/projects/photoshop`} component={Photoshop} />      
      <Route exact path={`${process.env.PUBLIC_URL}/projects/calculator`} component={Calculator} />
      <Route exact path={`${process.env.PUBLIC_URL}/projects/organizer`} component={Organizer} />
      <Route exact path={`${process.env.PUBLIC_URL}/projects/organizer/add`} component={OrganizerAdd} />
     
      </Switch>
    </Home>
    </MainLayout>

  </BrowserRouter>
    
  );
}

export default App;
