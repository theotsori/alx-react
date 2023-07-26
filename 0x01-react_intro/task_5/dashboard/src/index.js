import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return React.createElement('h1', null, 'Hello, React! by Theotsori');
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
