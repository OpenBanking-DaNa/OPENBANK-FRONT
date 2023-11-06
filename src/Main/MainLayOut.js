import MainLayOutCss from "./MainLayOut.module.css";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import { Outlet } from "react-router";

function MainLayOut() {

    return (
        <div className={MainLayOutCss.main}>
            <h2>메인페이지</h2>
        </div>
    );


}

export default MainLayOut;
