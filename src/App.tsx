import React, { useState } from 'react';
import './App.css';
// import MindARViewer from './mindar-viewer';
import MindARThreeViewer from './mindar-three-viewer';

function App() {
  const [started, setStarted] = useState(null);

  return (
    <div className="App">
        <div className="container">
          <MindARThreeViewer />
        </div>
      
    </div>
  );
}

export default App;
