import React, { useEffect, useState } from 'react';
import CommentProps from '../../components/Types/CommentProps';
import BackHome from '../HomePage/BackHome';



const CommentsPage = ({ postId }: { postId: number }) => {
    const [comments, setComments] = useState<CommentProps[]>([]);

  const fetchComments = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((json) => {
        setComments(json);
      });
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  return (
    <div>
      <BackHome/>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsPage;
