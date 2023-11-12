import React, { useEffect, useState } from 'react';
import PostProps from '../../components/Types/PostProps';
import Post from './Post';

import './homePage.css';
import Pagination from '../../components/Pagination';
import Header from '../Header/Header';
import Popup from '../../components/Popup';
import AddPost from './AddPost';

interface Props {}

const HomePage = (props: Props) => {
  const [posts, setPosts] = useState<PostProps[]>([]);

const[currentPage, setCurrentPage] = useState<number>(1)
const postsPerPage = 4;

const [isPopupVisible, setPopupVisible] = useState(false);

const openPopup = () => {
  setPopupVisible(true);
};

const closePopup = () => {
  setPopupVisible(false);
};
  
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

  const onAdd = async (body: string, title: string) => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        body: body,
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setPosts((prevPosts) => [data, ...prevPosts]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id:number) =>{
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
    method: 'DELETE'})
    .then((res)=>{
      if(res.status!==200){
        return;
      }else{
        setPosts(posts.filter((post)=>{
          return post.id !==id
        }))
      }
    }).catch((err)=>{
      console.log(err)
    })
}



  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div>
      <Header />
      {isPopupVisible && (
        <Popup onClose={closePopup}>
          <AddPost onAdd={onAdd}/>
        </Popup>
      )}
      <div className='postList'>
      <button className='addPostButton' onClick={openPopup}>Add post</button>
        {currentPosts.map((post) => (
          <div key={post.id}>
            <Post id={post.id} body={post.body} title={post.title} userId={post.userId} onDelete={onDelete} />
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
