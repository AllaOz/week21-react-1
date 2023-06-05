import React from 'react';
import Chart from 'react-google-charts';

const data = [
  ['Task', 'Hours per Day'],
  ['Work', 8],
  ['Eat', 2],
  ['Sleep', 7],
  ['Rest', 5]
];

const options = {
  title: 'My Daily Routine',
  pieHole: 0.4,
};

const App = () => {
  return (
    <div className="App">
      <h1>Pie Chart Example</h1>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default App;
