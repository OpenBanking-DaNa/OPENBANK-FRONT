import MainLayOutCss from "./MainLayOut.module.css";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import { Outlet } from "react-router";

function MainLayOut() {

    return (
        <div className={MainLayOutCss.main}>
            메인입니다.
        </div>
    );


}

export default MainLayOut;
