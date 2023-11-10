import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../Pages/HomePage/HomePage';
import UserPage from '../Pages/UserPage/UserPage';
import CommentsPage from '../Pages/CommentsPage/CommentsPage';
import { useParams } from 'react-router';
import EditPost from '../Pages/HomePage/EditPost';
import AlbumsPage from '../Pages/Albums/AlbumsPage';
import PhotosPage from '../Pages/Albums/PhotosPage';

const DynamicCommentsPage = () => {
  const { postId } = useParams(); 

  const postIdNumber = postId ? parseInt(postId, 10) : undefined;

  if (typeof postIdNumber !== 'number' || isNaN(postIdNumber)) {
    return <div>Error: Invalid postId</div>;
  }

  return <CommentsPage postId={postIdNumber} />;
};

const DynamicDetailsPost = () => {
  const { postId } = useParams(); 

  const postIdNumber = postId ? parseInt(postId, 10) : undefined;

  if (typeof postIdNumber !== 'number' || isNaN(postIdNumber)) {
    return <div>Error: Invalid postId</div>;
  }

  return <EditPost postId={postIdNumber} />;
};

const DynamicAlbumsPage = () => {
  const { userId } = useParams(); 

  const userIdNumber = userId ? parseInt(userId, 10) : undefined;

  if (typeof userIdNumber !== 'number' || isNaN(userIdNumber)) {
    return <div>Error: Invalid postId</div>;
  }

  return <AlbumsPage userId={userIdNumber} />;
};

const DynamicPhotoPage = () => {
  const { albumId } = useParams(); 

  const albumIdNumber = albumId ? parseInt(albumId, 10) : undefined;

  if (typeof albumIdNumber !== 'number' || isNaN(albumIdNumber)) {
    return <div>Error: Invalid albumId</div>;
  }

  return <PhotosPage albumId={albumIdNumber} />;
};


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'users', element: <UserPage /> },
      { path: 'comments/:postId', element: <DynamicCommentsPage /> },
      { path: '/albums/:userId', element: <DynamicAlbumsPage /> },
      { path: '/albums/:albumId/photos', element: <DynamicPhotoPage /> }
    ],
  },
]);
