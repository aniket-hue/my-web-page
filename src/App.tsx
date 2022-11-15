import React, { useEffect, useState } from "react";
import { Homepage } from "./pages/homepage";

export const ResizeContext = React.createContext({ windowSize: 0 });

export const App = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeHandler);

    () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <ResizeContext.Provider value={{ windowSize: windowWidth }}>
      <Homepage />
    </ResizeContext.Provider>
  );
};
