"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero(){

return(

<div className="relative">

<img
src="/cover.jpg"
className="
w-full
h-[100vh]
object-cover
brightness-50
"
/>


<div className="
absolute inset-0
flex flex-col
justify-center
items-center
text-center
text-white
">

<motion.h1

initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:1}}

className="
text-6xl
md:text-8xl
font-light
"
>

Azka × Neylan

</motion.h1>



<motion.p

initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:1}}

className="
mt-6
text-gray-300
text-xl
max-w-xl
"
>

Some moments deserve
more than memory.

</motion.p>



<motion.div

initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:1.5}}

className="mt-12 flex gap-5"
>

<Link

href="/photos"

className="
px-8 py-4
border
rounded-full
hover:bg-white
hover:text-black
transition
"

>

Photos

</Link>



<Link

href="/videos"

className="
px-8 py-4
border
rounded-full
hover:bg-white
hover:text-black
transition
"

>

Videos

</Link>

</motion.div>

</div>

</div>

)

}