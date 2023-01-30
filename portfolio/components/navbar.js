import Link from "next/link";
const Navbar = () => {
return(
    <nav className="navbar">
        <div>
            <h1>Portfolio</h1>
        </div>
       <Link href="/about">about</Link>
        <Link href="/projects">projects</Link>
       <Link href="/">home</Link> 
    </nav>
)
};
export default Navbar;
