import Link from "next/link"
import styles from "../styles/Navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <Link href={"/"}>
            <h1 className={styles.logo}>Simple Blog</h1>
        </Link>
        <Link href={"/newpost"}>
            <button className={styles.button}>Add New Post</button>
        </Link>
    </nav>
  )
}

export default Navbar