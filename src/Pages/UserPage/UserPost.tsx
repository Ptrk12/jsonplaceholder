import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import Post from "../HomePage/Post";
import PostProps from "../../components/Types/PostProps";
import '../HomePage/homePage.css';
import PostOfSpecificUser from "../HomePage/PostOfSpecificUser";

const UserPost = ({ userId }: { userId: number }) => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 4;

  const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onDelete = async (id: number) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setPosts(
            posts.filter((post) => {
              return post.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div>
      <div className="postList">
        {currentPosts.map((post) => (
          <div key={post.id}>
            <PostOfSpecificUser
              id={post.id}
              body={post.body}
              title={post.title}
              userId={post.userId}
              onDelete={onDelete}
            />
          </div>
        ))}
      </div>
      <div></div>
      <Pagination
        currentPage={currentPage}
        total={posts.length}
        limit={postsPerPage}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
};

export default UserPost;
