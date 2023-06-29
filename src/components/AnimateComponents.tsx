import { XyzTransition } from '@animxyz/react';
import { useRef } from 'react';

export function ToggleButton({ click }) {
  return (
    <XyzTransition appear mode="out-in">
      {!click
          && (
          <svg
            xyz="fade right-100%"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
          )}
      {click && (
        <svg
          xyz="fade left-100%"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      )}
    </XyzTransition>
  );
}

export function TogglePlay({ audio }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const handleAduio = async () => {
    audioRef.current.play();
  };
  return (
    <>
      <button type="button" dir="ltr" className="bg-purple-300 rounded-full w-16 h-16 relative hover:animate-pulsing" onClick={handleAduio}>
        <svg
          className="w-6 h-6 col-start-2 row-span-2 text-end absolute start-5 top-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
      </button>
      <audio id="audio_player" ref={audioRef} src={audio} />
    </>
  );
}
