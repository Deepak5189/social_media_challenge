import CreatePostForm from './CreatePostForm'
import AllPosts from './AllPosts'

const Home = () => {
  return (
  <div className="mx-auto">
    <CreatePostForm/>
    <AllPosts/>
  </div>
  )
}

export default Home