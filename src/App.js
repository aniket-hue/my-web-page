import { Route, Routes } from "react-router";
import { Button } from "./components/button";
import { Header } from "./components/header";
import { Text } from "./components/text";
import { Homepage } from "./pages/homepage";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </>
  );
};

export default App;
