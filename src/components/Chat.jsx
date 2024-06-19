import React, { useState, useEffect, useContext } from 'react';
import LeftSideCol from './LeftSideCol';
import MainCol from './MainCol';
import ChatDetail from './ChatDetail';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

const Chat = () => {
  const [roomId, setRoomId] = useState(null);
  const { authTokens } = useContext(AuthContext);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        console.log('Fetching rooms...');
        const response = await axios.get('http://localhost:8000/chat/rooms', {
          headers: {
            Authorization: `Bearer ${authTokens?.access}`
          }
        });
        console.log(response);
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching Rooms:', error);
      }
    };

    if (authTokens?.access) {
      fetchRooms();
    }
  }, [authTokens]);

  return (
    <div className="splitted-content-main">
      <LeftSideCol>
      <div className="card mb-3">
        <div className='card-header card-header-content-between'>
        <h3 className="card-header-title">Chat</h3>
        {/* Nav */}
        <ul className="nav nav-light">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <i className="bi-house nav-icon" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi-person nav-icon" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi-sliders nav-icon" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">
              <i className="bi-image nav-icon" />
            </a>
          </li>
        </ul>
        {/* End Nav */}
        </div>
      </div>
        {rooms.map((room, idx) => (
          <div key={room.id} onClick={() => setRoomId(room.id)}>{room.name}</div>
        ))}
      </LeftSideCol>
      <MainCol>
        {roomId && <ChatDetail roomId={roomId} />}
      </MainCol>
    </div>
  );
};

export default Chat;
