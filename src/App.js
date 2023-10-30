import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayOut from "./Main/MainLayOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayOut />} />
      </Routes>
    </BrowserRouter >

  );
}

export default App;
