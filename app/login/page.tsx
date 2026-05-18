"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login(){

const [password,setPassword]=useState("");

const router=useRouter();

function masuk(){

if(password==="azkaneylan"){

localStorage.setItem("akses","true");

router.push("/gallery");

}else{

alert("Password salah");

}

}

return(

<main className="h-screen bg-black text-white flex justify-center items-center">

<div className="bg-zinc-900 p-10 rounded-2xl w-96">

<h1 className="text-4xl text-center">
Azka × Neylan
</h1>

<input
type="password"
placeholder="Password"
className="w-full mt-8 p-3 bg-black rounded"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={masuk}
className="w-full mt-5 bg-white text-black p-3 rounded">

Enter

</button>

</div>

</main>

)

}