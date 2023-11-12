import { Link } from 'react-router-dom';
import PostProps from '../../components/Types/PostProps';
import CommentsPage from '../CommentsPage/CommentsPage';
import './post.css'
import { useState } from 'react';


const Post = ({id,title,body,userId, onDelete}:PostProps) => {
    
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

    const handleOnDelete = () =>{
        onDelete(id);
    }

    const comment = (id: number) => {
        setSelectedPostId(id);
      }

      const details = (id: number) => {
        setSelectedPostId(id);
      }
      console.log(selectedPostId)

    return(
        <div className='post'>
            <div className='postTitle'>
                <span>{title}</span>
            </div>
            <div className='postBody'>
                <span>{body}</span>
            </div>
            <div className='postButtons'>
                    <Link to={`post/${id}`} onClick={()=>details(id)}>
                        <i className="gg-edit-markup"></i>
                    </Link> 
                    <Link to={"#"} className='trshButton' onClick={handleOnDelete}>
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