import { useState, useEffect} from "react"
import { collection, getDocs, doc, deleteDoc} from "firebase/firestore"
import db from "../backend/firebase"
import styles from "../styles/Home.module.scss"


interface Document {
  id: string,
  content: string,
  title: string
}

const Home = () => {

  const [documents, setDocuments] = useState<Document[]>([])
  
  // The useEffect hook gets all posts every time the page is reloaded
  useEffect(() => {

    // This function gets all posts from the database
    const getPosts = async () => {
      
      // This is an empty array to store that posts coming from the database
      const fetchDocuments: Document[] = [];
      
      // This functions gets data from the database and stores it in a variable
      const data = await getDocs(collection(db, "posts"))
      
      // The data is then  mapped to extract the blog posts and insert them in to an array
      data.docs.map(doc => {
        fetchDocuments.push({id: doc.id, content: doc.data().content, title: doc.data().title} as Document)  
      })
      
      // This sets the fetchDocuments as the new value for the document state
      setDocuments(fetchDocuments)
    }
    
    // The getPost function is called
    getPosts()
    
  }, [])

  const deletePost = async (id: string) => {
      await deleteDoc(doc(db, "posts", id))
      window.location.reload()
  }


  return(
    <ul className={styles.blogFeed}>
      
      {documents.map((doc, id) => {
        
        return <li key={id} className={styles.post}>
                  <button onClick={()=> deletePost(doc.id)}>Delete</button>
                  <h4>{doc.title}</h4>
                  <p>{doc.content}</p>
                </li>
      })}
    </ul>
  )
}
export default Home;