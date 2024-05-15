import { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import PostCard from './PostCard';

const AllPosts = () => {

  const{allPosts}=useContext(PostContext);
  return (
      <div className="w-fit mx-auto my-5 bg-white border-gray-300 border-[1px] rounded-lg">
        <h2 className="text-xl font-semibold p-5">All Posts</h2>
        <div className="w-[550px]">
          {allPosts.map((post, index)=>
            <div key={index} className=""><PostCard post={post}/></div>
          )}
        </div>
    </div>
  )
}

export default AllPosts

