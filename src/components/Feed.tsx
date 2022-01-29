import React from 'react';
import {auth} from '../firebase';
import TweetInput from './TweetInput';


function Feed() {
  return (
  <div>
    feed
    <TweetInput />
    <button onClick={() => auth.signOut()}>LogOut</button>
  </div>
  )
};

export default Feed;
