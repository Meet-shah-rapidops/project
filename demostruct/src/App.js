import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing/Routing'
// import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import '@elastic/eui/dist/eui_theme_light.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavbarComponent /> */}
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
