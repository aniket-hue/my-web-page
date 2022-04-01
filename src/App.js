import { Route, Routes } from "react-router-dom";

// import { Button } from "./components/button";
// import { Header } from "./components/header";
// import { Text } from "./components/text";
import { Homepage } from "./pages/homepage";

export const App = () => {
  return (
    <div>
      {/* <Header ref={header} /> */}
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
