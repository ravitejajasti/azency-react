import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Timeline = () => {
    const comments = [
        {
            id: 1,
            author: { username: 'JohnDoe' },
            created_at: '2023-06-01 12:00:00',
            content: 'This is a comment content.'
        },
        {
            id: 2,
            author: { username: 'JaneSmith' },
            created_at: '2023-06-02 14:00:00',
            content: 'This is another comment content.'
        }
    ];
    const [showComments, setShowComments] = useState(true);
    const [newComment, setNewComment] = useState('');

    const handleCheckboxChange = () => {
        setShowComments(!showComments);
    };

    const handleQuillChange = (value) => {
        setNewComment(value);
    };

    return (
        <div className="mt-3 mb-3 mb-lg-5">
            <div className="card-header card-header-content-between">
                <h4 className="card-header-title">Timeline</h4>
                <div className="form-check">
                    <input 
                        id="showCommentsCheckbox" 
                        type="checkbox" 
                        className="form-check-input" 
                        checked={showComments} 
                        onChange={handleCheckboxChange} 
                    />
                    <label className="form-check-label" htmlFor="showCommentsCheckbox">Show comments</label>
                </div>
            </div>

            <div className="card-body">
                <ul className="step step-icon-sm">
                    {showComments && comments.map(comment => (
                        <li className="step-item" key={comment.id}>
                            <div className="step-content-wrapper">
                                <span className="step-icon step-icon-soft-primary">
                                    {comment.author.username.slice(0, 2).toUpperCase()}
                                </span>
                                <div className="step-content">
                                    <h5 className="mb-0">{comment.author.username}</h5>
                                    <p className="fs-5 mb-0">{comment.created_at}</p>
                                    <br />
                                    <p>{comment.content}</p>
                                </div>
                            </div>
                        </li>
                    ))}

                    <li className="step-item">
                        <div className="quill-custom">
                            <ReactQuill 
                                value={newComment}
                                onChange={handleQuillChange}
                                placeholder="Type your description..."
                                modules={{
                                    toolbar: [
                                        ["bold", "italic", "underline", "strike", "link", "image", "blockquote", "code", {"list": "bullet"}]
                                    ]
                                }}
                                style={{ height: '15rem' }}
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Timeline;
