import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayOut from "./Main/MainLayOut";
import ExcelUpload from "./Upload/ExcelUpload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayOut />} />

        <Route path="excel" element={<ExcelUpload/>} />

      </Routes>
    </BrowserRouter >

  );
}

export default App;
