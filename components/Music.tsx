"use client";

import { useRef, useState } from "react";

export default function Music() {

  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);


  async function toggleMusic() {

    if (!audioRef.current) return;

    if (playing) {

      audioRef.current.pause();
      setPlaying(false);

    } else {

      try {

        await audioRef.current.play();
        setPlaying(true);

      } catch (err) {

        console.log(err);

      }

    }

  }


  return (

    <>

      <audio
        ref={audioRef}
        loop
      >

        <source
          src="/music.mp3"
          type="audio/mpeg"
        />

      </audio>



      <button

        onClick={toggleMusic}

        className="
        fixed
        bottom-6
        right-6
        bg-black/70
        border
        border-zinc-700
        px-5
        py-3
        rounded-full
        text-white
        z-50
        "

      >

        {playing ? "🔇 Pause" : "🎵 Play"}

      </button>

    </>

  );

}