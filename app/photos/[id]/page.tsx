export default async function DetailPhoto({
params
}:{
params: Promise<{id:string}>
}){

const p = await params;

const daftar:any={

1:"/photos/IMG1.jpg",
2:"/photos/IMG2.jpg",
3:"/photos/IMG3.jpg"

}

return(

<main className="bg-black min-h-screen flex justify-center items-center p-10">

<img
src={daftar[p.id]}
className="rounded-3xl max-h-[80vh]"
/>

</main>

)

}