import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import DOMPurify from 'dompurify';
import Quill from 'quill';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'quill/dist/quill.snow.css';

const ChatDetail = ({ roomId }) => {
  const [messages, setMessages] = useState([]);
  const webSocketRef = useRef(null);
  const { authTokens } = useContext(AuthContext);
  const quillRef = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    if (!quillInstance.current) {
      quillInstance.current = new Quill('.js-quill', {
        theme: 'snow',
        placeholder: 'Type your description...',
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike", "link", "image", "blockquote", "code", {"list": "bullet"}]
          ]
        }
      });
    }
    quillRef.current = quillInstance.current;

    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/chat/rooms/${roomId}/`, {
          headers: {
            Authorization: `Bearer ${authTokens?.access}`
          }
        });
        setMessages(response.data.messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();

    const token = authTokens?.access;
    const webSocketUrl = `ws://localhost:8130/ws/chat/rooms/${roomId}/?token=${token}`;
    webSocketRef.current = new WebSocket(webSocketUrl);

    webSocketRef.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    webSocketRef.current.onclose = (e) => {
      console.error('WebSocket closed unexpectedly:', e);
    };

    return () => {
      webSocketRef.current.close();
    };
  }, [roomId, authTokens]);

  const sendMessage = () => {
    if (webSocketRef.current && quillRef.current.root.innerHTML.trim() !== '') {
      webSocketRef.current.send(JSON.stringify({ message: quillRef.current.root.innerHTML }));
      quillRef.current.setContents([]);
    }
  };

  return (
    <div className="">
      <div className="row justify-content-lg-center">
        <div className="col-lg-12">
          <div className="d-grid gap-3 gap-lg-5">
            {/* Card */}
            <div className="card mb-3">
              {/* Header */}
              <div className="card-header card-header-content-between">
                <h4 className="card-header-title">Room {roomId}</h4>
                {/* Dropdown */}
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                    id="contentActivityStreamDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi-three-dots-vertical" />
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-end mt-1"
                    aria-labelledby="contentActivityStreamDropdown"
                  >
                    <span className="dropdown-header">Settings</span>
                    <a className="dropdown-item" href="#">
                      <i className="bi-share-fill dropdown-item-icon" /> Share connections
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="bi-info-circle dropdown-item-icon" /> Suggest edits
                    </a>
                    <div className="dropdown-divider" />
                    <span className="dropdown-header">Feedback</span>
                    <a className="dropdown-item" href="#">
                      <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                    </a>
                  </div>
                </div>
                {/* End Dropdown */}
              </div>
              {/* End Header */}
              {/* Body */}
              <div className="card-body card-body-height" id="chat-log" style={{ height: '45vh', overflowY: 'scroll' }}>
                <ul className="list-comment list-comment-divider mb-3 mt-3">
                  {messages.map((msg, index) => (
                    <li key={index}>
                      <div className="d-flex align-items-start mb-3">
                        <div className="flex-shrink-0">
                          <img
                            className="avatar avatar-sm avatar-circle"
                            src={msg.user.avatar_url || 'src/assets/img/160x160/img3.jpg'}
                            alt="User Avatar"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">{msg.user.username || 'User'}</h5>
                            <span className="d-block small text-muted">{new Date(msg.timestamp).toLocaleString()}</span>
                          </div>
                          <div className="mb-5 d-flex justify-content-between align-items-center">
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(msg.message) }} />
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Body */}
            </div>
            {/* End Card */}
          </div>
          {/* Quill */}
          <div className="quill-custom mb-3">
            <div className="js-quill" style={{ height: '5rem' }}></div>
          </div>
          <div className="d-flex justify-content-end gap-3 mb-3">
            <button id="submitMessage" className="btn btn-primary" onClick={sendMessage}>Send</button>
          </div>
          {/* End Quill */}
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
