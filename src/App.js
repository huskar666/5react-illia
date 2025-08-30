import React from 'react';
import FriendList from './components/Friendlist';
import friends from './friends.json';

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>список друзів</h1>
      <FriendList friends={friends} />
    </div>
  );
}

