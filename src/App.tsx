import React, { useState } from 'react';
import './App.css';
// import MindARViewer from './mindar-viewer';
import MindARThreeViewer from './mindar-three-viewer';

function App() {
  const [started, setStarted] = useState(null);

  return (
    <div className="App">
      <h1>Example React component with <a href="https://github.com/hiukim/mind-ar-js" target="_blank">MindAR</a></h1>

        <div className="container">
          <MindARThreeViewer />
        </div>
      
    </div>
  );
}

export default App;
