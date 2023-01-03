import { FormEvent, useState } from "react"
import db from "../backend/firebase"
import { collection, addDoc } from "firebase/firestore";
import styles from "../styles/NewPost.module.scss"


const NewPost = () => {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [message, setMessage] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  // This function adds new blog posts the database
  const addNewPost = async (e:FormEvent) => {
    
    // This function prevents page reloads after forms have been submitted
    e.preventDefault()
    
    // This try block adds the new blog post title and content to the database
    try {
      const docRef = await addDoc(collection(db, "posts"), {
          title: title,
          content: content
      })
      setMessage("Blog post submittted successfully!!  ")
      setIsVisible(true)
    }
    catch (e) {
      console.error("Error adding document: ", e)
    }

    setTitle("")
    setContent("")
  }

  return (
    <main className={styles.container}>
    {/* The page title */}
    <h1>Add a new blog post</h1>  
    
    {/* This notifies the user that the blog post has been uploaded successfully */}
    {isVisible && <div>
      <span>{message}</span>
      <button onClick={() => setIsVisible(false)}>Close</button>
    </div> }

    {/* This form receives the user inputs */}
    <form onSubmit={addNewPost} className={styles.form}>
  
      {/* This section accepts blog post title */}
      <label htmlFor="title">Title</label><br />
      <input 
        type="text" 
        name="title" 
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
      /><br />

      {/* This section accepts blog post content */}
      <label htmlFor="content">Content</label><br />
      <textarea 
        name="content"
        cols={30}
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea><br />
      
      {/* The submit button */}
      <button type="submit">Submit</button>
    </form>
    </main>
  )
}

export default NewPost