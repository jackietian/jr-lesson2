import React from 'react';
import Clock from './components/Clock'
import ClockV2 from './components/ClockV2';
import ClockV3 from './components/ClockV3';
import ClockV4 from './components/ClockV4'

function App() {
  return (
    <div className="App">
      {/* <ClockV3 /> */}
      <ClockV4 city={'sydney'}/>
    </div>
  );
}

export default App;
