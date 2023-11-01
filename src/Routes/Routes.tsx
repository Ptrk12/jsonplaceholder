import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../Pages/HomePage/HomePage';
import UserPage from '../Pages/UserPage/UserPage';
import CommentsPage from '../Pages/CommentsPage/CommentsPage';
import { useParams } from 'react-router';

// Define DynamicCommentsPage before using it in the route configuration
const DynamicCommentsPage = () => {
  const { postId } = useParams(); 

  const postIdNumber = postId ? parseInt(postId, 10) : undefined;

  if (typeof postIdNumber !== 'number' || isNaN(postIdNumber)) {
    return <div>Error: Invalid postId</div>;
  }

  return <CommentsPage postId={postIdNumber} />;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'users', element: <UserPage /> },
      { path: 'comments/:postId', element: <DynamicCommentsPage /> }
    ],
  },
]);
