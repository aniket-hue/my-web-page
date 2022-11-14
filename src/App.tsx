import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage";

export const App = () => {
  return (
    <>
      <Homepage />
      {/* <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes> */}
    </>
  );
};
