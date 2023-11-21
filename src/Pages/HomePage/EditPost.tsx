import React, { useEffect, useState } from "react";
import PostProps from "../../components/Types/PostProps";
import "./editPost.css";
import BackHome from "./BackHome";

const EditPost = ({ postId }: { postId: number }) => {
  const [postDetails, setPostDetails] = useState<PostProps | null>(null);
  const [editText, setEditText] = useState<string>("");

  const fetchPostDetails = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((json) => {
        setPostDetails(json);
        setEditText(json.body);
      });
  };

  useEffect(() => {
    fetchPostDetails();
  }, []);

  const onEdit = (body: string) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify({
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  };

  const handleOnEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const postBodyInput = form.elements.namedItem(
      "postBody"
    ) as HTMLInputElement;
    onEdit(postBodyInput.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleOnEdit}>
        <BackHome />
        <textarea
          name="postBody"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        ></textarea>

        <button>Save</button>
      </form>
    </div>
  );
};

export default EditPost;
