import { Link } from 'react-router-dom';
import PostProps from '../../components/Types/PostProps';
import CommentsPage from '../CommentsPage/CommentsPage';
import './post.css'
import { useState } from 'react';


const Post = ({id,title,body,userId}:PostProps) => {
    
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

    const comment = (id: number) => {
        setSelectedPostId(id);
      }

    return(
        <div className='post'>
            <div className='postTitle'>
                <span>{title}</span>
            </div>
            <div className='postBody'>
                <span>{body}</span>
            </div>
            <div className='postButtons'>
                    <button className='postEditButton'>Edit</button>
                    <Link  to={"users"}>
                        <i className="gg-trash"></i>
                    </Link>             
                    <Link  to={`comments/${id}`} onClick={() => comment(id)}>
                        <i className="gg-comment"></i>
                    </Link>
            </div>
            {selectedPostId !== null && (
        <CommentsPage postId={selectedPostId} />
      )}
        </div>
    );
}

export default Post;