import React, { useEffect, useState } from 'react';
import PostProps from '../../components/Types/PostProps';
import Post from './Post';

import './homePage.css';
import { Link } from 'react-router-dom';
import CommentsPage from '../CommentsPage/CommentsPage';

interface Props {}

const HomePage = (props: Props) => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err);
      });
  }



  return (
    <div>
      <button>
        <Link to='users'>USERS</Link>
      </button>
      <div className='postList'>
        {posts.map((post) => (
          <div key={post.id}>
            <Post id={post.id} body={post.body} title={post.title} userId={post.userId} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
