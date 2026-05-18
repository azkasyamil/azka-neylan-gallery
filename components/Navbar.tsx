import Link from "next/link";

export default function Navbar(){

return(

<nav className="flex justify-center gap-10 py-8 border-b border-zinc-800">

<Link href="/gallery">
Home
</Link>

<Link href="/photos">
Photos
</Link>

<Link href="/videos">
Videos
</Link>

</nav>

)

}