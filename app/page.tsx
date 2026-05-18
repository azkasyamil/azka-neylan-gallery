import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-black text-white flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-6xl font-serif tracking-widest">
          Azka × Neylan
        </h1>

        <p className="text-gray-400 mt-5">
          A private collection of photos,
          videos, and moments.
        </p>

        <Link
          href="/login"
          className="mt-10 inline-block border border-gray-600 px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          Enter
        </Link>

      </div>

    </main>
  );
}