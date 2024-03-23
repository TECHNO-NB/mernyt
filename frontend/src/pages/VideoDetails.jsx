import React, { useEffect, useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import VideoPlay from "../videoplay/VideoPlay";
import Comments from "../videoplay/Comments";
import { showhidesidebar } from "../context/GlobalContext";
import axios from "axios";

const VideoDetails = () => {
  const { videoId, setVideoId } = useContext(showhidesidebar);
  const [video, setVideo] = useState();

  if(videoId==null){
    alert("nothings")
  }else{
    useEffect(() => {
     (async()=>{
       const data=await axios.get(`/getvideobyid/${videoId}`);
       setVideo(data.data)
     })()
    }, [])
    
  }

  return (
    <div className="bg-gray-800 w-[100vw]">
      <Sidebar />
      <div className="pl-[0.0em] px-0 mt-4 md:pl-[16.8em]">
        <VideoPlay data={video} />
      </div>
      <div className="pl-[0.5em] px-2 mt-0 md:pl-[16.8em]">
        <Comments />
      </div>
    </div>
  );
};

export default VideoDetails;
