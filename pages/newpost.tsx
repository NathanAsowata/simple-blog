import { useState } from "react"

const NewPost = () => {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  return (
    <>
    <h1>Add a new blog</h1>
    <form>
      <label htmlFor="title">Title</label><br />
      <input 
        type="text" 
        name="title" 
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
      /><br />

      <label htmlFor="content">Content</label><br />
      <textarea 
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea><br />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default NewPost