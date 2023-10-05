import { useEffect, useState } from "react";

function useOptimizeVideo() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const URL_MP4 =
    "https://res.cloudinary.com/dn72zz8r5/video/upload/v1693592799/pexels-altaf-shah-9487183_2160p_c47eht.mp4";

  useEffect(() => {
    let isMounted = true;

    const fetchVideo = async () => {
      try {
        const response = await fetch(URL_MP4);
        if (response.ok && isMounted) {
          const blob = await response.blob();
          const videoObjectURL = URL.createObjectURL(blob);
          setVideoUrl(videoObjectURL);
          setIsVideoLoaded(true);
        } else {
          console.error("Error al cargar el video.");
        }
      } catch (error) {
        console.error("Error al cargar el video:", error);
      }
    };

    fetchVideo();

    return () => {
      isMounted = false;
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, []);

  return { isVideoLoaded, videoUrl };
}

export default useOptimizeVideo;
