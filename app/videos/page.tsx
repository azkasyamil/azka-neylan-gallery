import Navbar from "@/components/Navbar";

export default function Videos() {

  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4"
  ];

  return (

    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen p-10">

        <h1 className="text-5xl text-center mb-16">
          Our Videos
        </h1>

        <div className="grid gap-10 max-w-4xl mx-auto">

          {videos.map((video, index) => (

            <video
              key={index}
              controls
              preload="metadata"
              className="w-full rounded-3xl border border-zinc-800"
            >

              <source
                src={video}
                type="video/mp4"
              />

              Browser tidak mendukung video.

            </video>

          ))}

        </div>

      </main>
    </>

  );
}