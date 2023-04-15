import React from 'react';
import BarChart from './components/BarChart/BarChart';
import LineChart from './components/LineChart/LineChart';

function App() {
  return (
    <div style={{display : "flex", flexDirection : "column", width : "100%"}}>
      <LineChart />
      <BarChart />
    </div>
  );
}

export default App;
