import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Gallery() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen">

        <div className="max-w-6xl mx-auto px-8 pt-16">

          <img
            src="/cover.jpg"
            className="
            w-full
            h-[600px]
            object-cover
            rounded-3xl
            opacity-90
            "
          />

          <div className="text-center mt-12">

            <h1 className="text-7xl">
              Azka × Neylan
            </h1>

            <p className="text-gray-500 mt-6 text-xl">

              Some moments deserve
              more than memory.

            </p>

          </div>


          <div className="flex justify-center gap-8 mt-16">

            <Link
              href="/photos"
              className="
              border border-zinc-700
              px-10 py-5
              rounded-xl
              hover:bg-white
              hover:text-black
              transition
              "
            >

              📸 Photos

            </Link>


            <Link
              href="/videos"
              className="
              border border-zinc-700
              px-10 py-5
              rounded-xl
              hover:bg-white
              hover:text-black
              transition
              "
            >

              🎥 Videos

            </Link>

          </div>

        </div>

      </main>
    </>
  );
}