import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <Link href={"/"}>
            <h1>Simple Blog</h1>
        </Link>
        <Link href={"/newpost"}>
            <button>Add New Post</button>
        </Link>
    </nav>
  )
}

export default Navbar