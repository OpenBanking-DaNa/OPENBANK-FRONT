import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayOut from "./Main/MainLayOut";
import ExcelUpload from "./Upload/ExcelUpload";
import Openbanking from "./Open/Openbanking";
import Footer from "./Main/Footer";
import MenuBar from "./Main/MenuBar";
import Openbanking_bank from "./Open/Openbanking_bank";
import CardList from "./Card/CardList";

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path="/" element={<MainLayOut />} />
        <Route path="excel" element={<ExcelUpload />} />
        <Route path="open" element={<Openbanking />} />
        <Route path="open/bank" element={<Openbanking_bank />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;






