import Link from "next/link";
const Navbar = () => {
return(
    <nav>
        <div>
            <h1>portfolio</h1>
        </div>
       <Link href="/about">about</Link>
        <Link href="/projects">projects</Link>
       <Link href="/">home</Link> 
    </nav>
)
};
export default Navbar;
