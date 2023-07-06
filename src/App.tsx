import React from 'react';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <Routes>
        <Route index element={<h1>Hello</h1>} />
      </Routes>
    );
  }
}

export default App;
