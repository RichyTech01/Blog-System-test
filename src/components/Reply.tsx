import React from 'react';
import { Reply } from '@/Context/BlogContext';

interface ReplyProps {
  reply: Reply;
  onReplyClick: () => void;
}

const ReplyComponent: React.FC<ReplyProps> = ({ reply, onReplyClick }) => {
  return (
    <div className="p-2 border-b ml-4">
      <p className="text-sm font-bold">{reply.user}</p>
      <p>{reply.content}</p>
      <span className="text-xs text-gray-500">{new Date(reply.timestamp).toLocaleString()}</span>
      <button onClick={onReplyClick} className="text-blue-500 text-xs mt-2 ml-4">
        Reply
      </button>
      <div className="ml-4">
        {reply.replies.map((subReply) => (
          <ReplyComponent key={subReply.id} reply={subReply} onReplyClick={onReplyClick} />
        ))}
      </div>
    </div>
  );
};

export default ReplyComponent;

