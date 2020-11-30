import React, { useState } from 'react';
import * as Chance from 'chance';

const chance = new Chance();

const Home = ({ history }) => {
  const [roomId, setRoomId] = useState('');
  const [device, setDevice] = useState('screen');
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type='text'
        value={roomId}
        onChange={e => setRoomId(e.target.value)}
      ></input>
      <button
        type='button'
        onClick={() => {
          if (!roomId) {
            alert('RoomId is required');
            return;
          }
          history.push(`/room/${roomId}?device=${device}&name=${name}`);
        }}
      >
        Join Room
      </button>
      <button
        type='button'
        onClick={() => {
          const id = chance.guid();
          history.push(`/room/${id}?device=${device}&name=${name}`);
        }}
      >
        Create Room
      </button>
      <br />
      <button
        onClick={() => setDevice(device === 'screen' ? 'video' : 'screen')}
      >
        {device === 'screen' ? 'turn video' : 'turn screen'}
      </button>
      <br />
      <label>Name</label>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
};

export default Home;
