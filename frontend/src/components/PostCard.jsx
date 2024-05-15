import PropTypes from 'prop-types'
import { useContext } from 'react'
import { FaComment, FaHeart, FaShare } from 'react-icons/fa'
import { PostContext } from '../context/PostContext'

const PostCard = ({post}) => {
  const{deletePost, toggleLike}=useContext(PostContext);

  const handleDelete=(uploadTime)=>{
    deletePost(uploadTime);
    alert("Post deleted successfully!")
  }

  const handleLiked=(uploadTime)=>{
    toggleLike(uploadTime);
    // alert("Post liked successfully!")
  }

  return (
    <div className='bg-white border-gray-300 border-[1px] m-5 p-3 rounded-lg shadow-lg'>
      <div className="flex justify-between">
      <div>Posted By: {post.postedBy}</div>
      <button onClick={()=>handleDelete(post.uploadTime)}>Delete</button>
      </div>
      <div className="m-2 p-2 ">
        <p className='break-words'>{post.postContent}</p>
      </div>
      <div className="flex justify-around">
        <button onClick={()=>handleLiked(post.uploadTime)} className='flex justify-center items-center gap-1'><FaHeart fontWeight={700} fill={`${post.isLiked?'red':'none'}`} stroke='red' strokeWidth={40}/>{post.likeCount}</button>
        <button><FaComment/></button>
        <button><FaShare/></button>
      </div>
    </div>
  )
}
PostCard.propTypes = {
  post: PropTypes.shape({
    uploadTime: PropTypes.number.isRequired,
    postContent: PropTypes.string.isRequired,
    isLiked: PropTypes.bool.isRequired,
    postedBy: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostCard