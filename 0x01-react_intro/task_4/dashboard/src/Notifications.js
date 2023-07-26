import React from 'react';
import closeIcon from './close-icon.png';
import './Notifications.css';
import { getLatestNotofication } from './utils';

export default function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked')
  };

  return (
    <div className='Notifications'>
      <button
        style={{
          float: 'right',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
        }}
        aria-label='close'
        onClick={handleClick}
      >
        <img src={closeIcon} alt='close icon' style={{ height: '8px' }}/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: getLatestNotofication() }} 
        />
      </ul>
    </div>
  );
}
