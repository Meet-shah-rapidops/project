import React from 'react';
import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing/Routing'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
