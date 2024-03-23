import React, { useState } from "react";
import { createContext } from "react";

export const showhidesidebar = createContext();

const GlobalContext = ({children} ) => {
  const [open, setOpen] = useState(true);
  const [videoId, setVideoId] = useState("");
  return <showhidesidebar.Provider value={{open,setOpen,videoId,setVideoId}}>
    {children}
  </showhidesidebar.Provider>;
};

export default GlobalContext;
