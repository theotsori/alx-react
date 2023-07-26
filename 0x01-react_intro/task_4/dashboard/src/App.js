import logo from './holberton_logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
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
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' />
        <label> Password: </label>
        <input type='password' id='password'/>
        <button>OK</button>
      </div>
      <div className='App-footer'>
        <hr />
        <p>{getFooterCopy(true)} {getFullYear()}</p>
      </div>
    </div>
  );
}

export default App;
