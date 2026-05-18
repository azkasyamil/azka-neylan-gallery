import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Photos(){

const photos=[

{id:1,src:"/photos/IMG1.jpg"},
{id:2,src:"/photos/IMG2.jpg"},
{id:3,src:"/photos/IMG3.jpg"}

]

return(

<>

<Navbar/>

<main className="bg-black text-white min-h-screen p-10">

<h1 className="text-5xl text-center mb-16">

Our Photos

</h1>


<div className="grid md:grid-cols-3 gap-8">

{photos.map((f)=>(

<Link
href={`/photos/${f.id}`}
key={f.id}
>

<img
src={f.src}
className="rounded-2xl hover:scale-105 transition"
/>

</Link>

))}

</div>

</main>

</>

)

}