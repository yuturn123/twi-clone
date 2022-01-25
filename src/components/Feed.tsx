import React from 'react';
import {auth} from '../firebase';


function Feed() {
  return <div>feed
  <button onClick={() => auth.signOut()}>LogOut</button>

  </div>;
}

export default Feed;
