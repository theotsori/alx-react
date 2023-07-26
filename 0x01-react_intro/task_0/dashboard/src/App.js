import logo from './holberton_logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <img src={logo} alt='Holberton Logo' />
        <h1>School dashboard</h1>
      </div>
      <hr />
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <hr />
        <p>Copyright 2023 - Holberton School</p>
      </div>
    </div>
  );
}

export default App;
