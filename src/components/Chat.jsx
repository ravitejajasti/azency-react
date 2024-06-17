import React, { useState } from 'react';
import LeftSideCol from './LeftSideCol';
import MainCol from './MainCol';
import ChatDetail from './ChatDetail';

const Chat = () => {
  const [roomId, setRoomId] = useState(null);

  return (
    <div className="splitted-content-main">
      <LeftSideCol setRoomId={setRoomId} />
      <MainCol>
        {roomId && <ChatDetail roomId={roomId} />}
      </MainCol>
    </div>
  );
};

export default Chat;
