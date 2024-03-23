import React, { useState, useEffect } from "react";
import LikeChannelDetails from "./LikeChannelDetails";

const VideoPlay = ({ data }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle data fetching using useEffect
  useEffect(() => {
    if (!data) return; // Early return if data is null

    const fetchData = async () => {
      setIsLoading(true); // Set loading state
      setError(null); // Clear any previous errors

      try {
        const videoFile = data.data.videoFile; // Assuming correct structure
        setVideoUrl(videoFile);
      } catch (error) {
        console.error("Error fetching video data:", error);
        setError("Failed to load video. Please try again later.");
      } finally {
        setIsLoading(false); // Set loading state to false after success or error
      }
    };

    fetchData();
  }, [data]); // Re-run useEffect when data changes

  // Render based on loading, error, or video URL
  return (
    <div className="w-full h-full flex items-center px-2 justify-center flex-col">
      {isLoading && <p>Loading video...</p>}
      {error && <p className="error-message">{error}</p>}
      {videoUrl && (
        <>
          <video
            className="w-[99.5%] md:w-[100%] "
            src={videoUrl}
            autoPlay
            controls
          />
          <LikeChannelDetails />
        </>
      )}
    </div>
  );
};

export default VideoPlay;
