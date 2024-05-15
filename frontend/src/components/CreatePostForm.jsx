import { useContext, useState } from 'react';
import { PostContext } from '../context/PostContext';

function CreatePostForm() {
  const {allPosts, addPost}=useContext(PostContext);
  const [postContent, setPostContent] = useState('');

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const uploadTime=Date.now();
    addPost(postContent);
    alert("Post added successfully!")
    // Perform actions with postContent, such as sending it to a server or updating state
    console.log('Submitted post:', postContent);
    // Reset the form after submission
    console.log(allPosts);
    setPostContent('');
  };

  return (
    <div className='mx-auto w-fit p-10 rounded-lg shadow-lg bg-white border-gray-300 border-[1px] '>
      <div className="flex flex-col gap-5">
        <h2 className='text-xl font-semibold'>Create a Post</h2>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <textarea className='border-2 border-black rounded-lg p-2 mx-auto'
            value={postContent}
            onChange={handlePostContentChange}
            placeholder="Write your post here..."
            rows={4}
            cols={50}
          />
          <button className='bg-blue-500 text-white py-2 rounded-md mt-5 text-xl shadow-lg' type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePostForm;
