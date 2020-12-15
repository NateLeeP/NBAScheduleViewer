import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
const App = () => (
  <div>
    Hello There!
    <Search />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));