import MenuBarCss from "./MenuBar.module.css"
import Login from "../Login/Login"
import { Link } from "react-router-dom";

function MenuBar() {


    return (
        <>
            <div className={MenuBarCss.menu}>
                <div className={MenuBarCss.title}>
                    <Link to="/">MAIN</Link></div>
                <div className={MenuBarCss.title}>
                    <Link to="/excel"> 엑셀 업로드 </Link></div>

                <Login />
            </div>
        </>
    )

}

export default MenuBar;
