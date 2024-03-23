import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/getallvideos");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-800 w-[100vw]">
      <Sidebar />
      <div className="pl-[0.0em] mt-4 md:pl-[16.5em]">
        {data.length > 0 && data.map((videoData) => (
          <VideoCard key={videoData._id} data={videoData} />
        ))}
      </div>
    </div>
  );
};

export default Home;
