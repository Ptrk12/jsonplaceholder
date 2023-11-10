import React, { useEffect, useState } from 'react';
import PostProps from '../../components/Types/PostProps';
import Post from './Post';

import './homePage.css';
import Pagination from '../../components/Pagination';
import Header from '../Header/Header';

interface Props {}

const HomePage = (props: Props) => {
  const [posts, setPosts] = useState<PostProps[]>([]);

const[currentPage, setCurrentPage] = useState<number>(1)
const postsPerPage = 4;
  
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



  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div>
      <Header />
      <div className='postList'>
        {currentPosts.map((post) => (
          <div key={post.id}>
            <Post id={post.id} body={post.body} title={post.title} userId={post.userId} />
          </div>
        ))}
      </div>
      <div>
        
      </div>
      <Pagination
        currentPage={currentPage}
        total={posts.length}
        limit={postsPerPage}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
}

export default HomePage;
