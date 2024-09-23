"use client";
import React, { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Instructions() {
  const t = useTranslations('Results')
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    if (videoElement) {
      videoElement.addEventListener("play", onPlay);
      videoElement.addEventListener("pause", onPause);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", onPlay);
        videoElement.removeEventListener("pause", onPause);
      }
    };
  }, []);

  return (
    <div className="w-full px-2 bg-white py-14">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className=" flex flex-col gap-5">
          <h1 className="text-3xl font-bold ">{t('instruction')}</h1>

          <div className="relative bg-red-200 w-full rounded-lg overflow-hidden shadow-lg">
            <video
              ref={videoRef}
              className="w-full max-mdx:h-[400px] h-[700px]"
              controls
              poster="/images/about-banner.png"
            >
              <source src="/vide-huck.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlay}
              >
                <button className="bg-red-500 p-3 rounded-full">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <a
            href="#!"
            className="text-red-400 text-xl font-semibold underline block"
          >
            {t('how-get-online')}
          </a>
        </div>
      </div>
    </div>
  );
}
