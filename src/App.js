import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayOut from "./Main/MainLayOut";
import ExcelUpload from "./Upload/ExcelUpload";
import Openbanking from "./Open/Openbanking";
import Footer from "./Main/Footer";
import MenuBar from "./Main/MenuBar";
import Openbanking_card from "./Open/Openbanking_card";

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path="/" element={<MainLayOut />} />
        <Route path="excel" element={<ExcelUpload />} />
        <Route path="open" element={<Openbanking />} />
        <Route path="open/card" element={<Openbanking_card />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;






