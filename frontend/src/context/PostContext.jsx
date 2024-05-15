
import { createContext, useState } from "react";

// Step 1: Create a Context
const PostContext = createContext();

// Step 2: Create a Provider component
function PostContextProvider({ children }) {
  const [allPosts, setAllPosts]=useState([
    {
      postedBy:"Rajeev Singh",
      postContent: "This is the first post.",
      isLiked:true,
      likeCount:20,
      uploadTime: Date.now() - 10000, // A time in the past
    },
    {
      postedBy:"Ms. Poonam",
      postContent: "This is the second post.",
      isLiked:false,
      likeCount:30,
      uploadTime: Date.now() - 5000, // A time in the past
    },
    {
      postedBy:"Deepak Singh",
      postContent: "This is the third post.",
      isLiked:false,
      likeCount:10,
      uploadTime: Date.now() - 2000, // A time in the past
    },
    {
      postedBy:"Mrs. Kavita",
      postContent: "This is the fourth post.",
      isLiked:true,
      likeCount:100,
      uploadTime: Date.now() - 1000, // A time in the past
    },
    {
      postedBy:"Ms. Preeti",
      postContent: "This is the fifth post.",
      isLiked:true,
      likeCount:50,
      uploadTime: Date.now() - 500, // A time in the past
    }
  ]);


  const addPost = (postContent) => {
    const newPost = {
      postedBy:"Deepak Singh",
      postContent,
      isLiked:false,
      likeCount:0,
      uploadTime: Date.now(),
    };
    // Find the index where the new post should be inserted based on uploadTime
    let insertIndex = 0;
    while (insertIndex < allPosts.length && allPosts[insertIndex].uploadTime > newPost.uploadTime) {
      insertIndex++;
    }
  
    // Insert the new post at the correct index
    const updatedPosts = [...allPosts];
    updatedPosts.splice(insertIndex, 0, newPost);
  
    setAllPosts(updatedPosts);
  };
  

  const deletePost = (uploadTime) => {
    setAllPosts(allPosts.filter(post => post.uploadTime !== uploadTime));
  };

  const toggleLike = (uploadTime) => {
    setAllPosts(prevPosts => {
      return prevPosts.map(post => {
        if (post.uploadTime === uploadTime) {
          // Toggle the isLiked property
          const isTrue=post.isLiked;
          return { ...post, isLiked: !post.isLiked, likeCount: isTrue?post.likeCount-1:post.likeCount+1 };

        } else {
          return post;
        }
      });
    });
  };
  

  return (
    <PostContext.Provider value={{ allPosts, addPost, deletePost, toggleLike }}>
      {children}
    </PostContext.Provider>
  );
}


export {PostContextProvider, PostContext}