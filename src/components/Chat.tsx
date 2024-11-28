"use client";

import React, { useState } from 'react';
import { Reply } from '@/Context/BlogContext';
import ReplyComponent from './Reply';
import { useBlogContext } from '@/Context/BlogContext';

interface ChatProps {
  postId: string;
  replies: Reply[];
}

const Chat: React.FC<ChatProps> = ({ postId, replies }) => {
  const [message, setMessage] = useState('');
  const [replyToId, setReplyToId] = useState<string | null>(null);
  const { addReply } = useBlogContext();

  const handleSend = () => {
    if (!message.trim()) return;

    const newReply: Reply = {
      id: Math.random().toString(),
      user: 'farmyApp Test',
      content: message,
      timestamp: new Date(),
      replies: [],
    };

    addReply(postId, newReply, replyToId || undefined);
    setMessage('');
    setReplyToId(null);
  };

  return (
    <div className="mt-4">
      <div className="mb-2">
        {replies.map((reply) => (
          <ReplyComponent
            key={reply.id}
            reply={reply}
            onReplyClick={() => setReplyToId(reply.id)}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow border p-2 rounded-md text-black outline-blue-300"
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-md text-[14px]">
          Post
        </button>
      </div>
    </div>
  );
};

export default Chat;

