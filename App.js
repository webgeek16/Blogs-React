import { useState, useContext, useEffect } from 'react';
import './App.css';
import Blog from './Blog';
import ViewBlog from './ViewBlog';
import CreateBlog from './CreateNewBlog';
import LandingPage from './LandingPage';

function App() {
  const [blogs, setBlogs] = useState("");
  const [showBlogContent, setShowBlogContent] = useState(false);
  const [blog, setBlog] = useState("");
  const [createBlog, setCreateBlog] = useState(false);
  
  
    const fetchBlogData = async() => {
      const data = await fetch("https://restedblog.herokuapp.com/poornima/api/")
      const jsonData = await data.json()
      setBlogs(jsonData)
    }
    useEffect(() => {
      fetchBlogData()
      
    }, [])

    const handleDelete = (blog) =>{
      let index = 0;
      for(let i = 0; i<blogs.length; i++){
          if(blogs[i].id == blog.id){
              index = i;
              break;
          }
      }
      blogs.splice(index,1)
      console.log(blogs)
      setBlogs(blogs)
      setShowBlogContent(false);
  }
    
  const handleBlogClick = (blog) =>{
      setBlog(blog)
      setCreateBlog(false)
      setShowBlogContent(true)
  }

  const createNewBlog = () => {
    // Must be handled with router
    setBlog("") 
    setCreateBlog(true)
  }

  const handleShowHome = () => {
    setShowBlogContent(false)
    setCreateBlog(false)
  }
  return(
      <>
    <h1 className="homepage-header">My Blog</h1>
    
    <article className="landingPage-container">
      <a className="create-blog" onClick={() => createNewBlog()}>Create New Blog</a>
      <Blog blogs={blogs}  handleBlogClick={handleBlogClick}/>
    </article>
    <article className="routing-contatiner">
      {showBlogContent && (<>
        {blog && (<>
        <h2 className="blog-details">Blog Details</h2>
        <button className="blog-delete" onClick={() => setShowBlogContent(false)} >Go Back to Home Page</button>
        <button className="blog-delete" onClick={() => handleDelete(blog)} >Delete Blog</button>  
        </>
        )}
        <ViewBlog blog={blog} setBlogs={setBlogs} blogs={blogs}/> 
          
        </>)
        } 
        {createBlog && <>
            <h2 className="blog-details">Create Blog</h2>
            
            <CreateBlog blogs={blogs} setBlogs={setBlogs} handleShowHome={handleShowHome}/> 
            </>
        }
        {
          !showBlogContent && !createBlog &&(
            <LandingPage />
          )
        }
    </article>
    </>
  )
}

export default App;
