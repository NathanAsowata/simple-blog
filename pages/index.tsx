import { useState, useEffect} from "react"
import { collection, getDocs} from "firebase/firestore"
import db from "../backend/firebase"
import styles from "../styles/Home.module.scss"


interface Document {
  content: String,
  title: String
}

const Home = () => {

  const [documents, setDocuments] = useState<Document[]>([])
  
  useEffect(() => {

    const getPosts = async () => {
      
      const fetchDocuments: Document[] = [];
      
      const data = await getDocs(collection(db, "posts"))
      
      data.docs.map(doc => {
        fetchDocuments.push(doc.data() as Document)
        
      })
      
      setDocuments(fetchDocuments)
    }
    
    getPosts()
    
  }, [])

  return(
    <ul className={styles.blogFeed}>
      {documents.map((doc, id) => {
        return <li key={id} className={styles.post}>
                  <button>Delete</button>
                  <h4>{doc.title}</h4>
                  <p>{doc.content}</p>
                </li>
      })}
    </ul>
  )
}
export default Home;