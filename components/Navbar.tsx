import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <Link href={"/"}>
            <h1>Simple Blog</h1>
        </Link>
        <button>Add New Post</button>
    </nav>
  )
}

export default Navbar