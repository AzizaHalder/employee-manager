import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './Card/Card';

function App() {
  return (
    <div className="App">
      <Card className="employee-card" title="Manage Employees" />
    </div>
  );
}

export default App;
