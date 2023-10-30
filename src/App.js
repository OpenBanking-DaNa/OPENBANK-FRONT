import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayOut from "./Main/MainLayOut";
import Login from "./Login/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<MainLayOut />}>

<Route path="login">
  <Route index element={<Login />} />


</Route>
         </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
