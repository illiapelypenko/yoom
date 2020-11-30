import React, { useState } from 'react';
import * as Chance from 'chance';

const chance = new Chance();

const Home = ({ history }) => {
  const [roomId, setRoomId] = useState('');

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
          history.push(`/room/${roomId}`);
        }}
      >
        Join Room
      </button>
      <button
        type='button'
        onClick={() => {
          const id = chance.guid();
          history.push(`/room/${id}`);
        }}
      >
        Create Room
      </button>
    </div>
  );
};

export default Home;
