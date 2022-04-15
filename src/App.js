import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage";

export const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </>
  );
};

export default App;
