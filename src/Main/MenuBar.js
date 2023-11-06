import MenuBarCss from "./MenuBar.module.css"
import Login from "../Login/Login"
import { NavLink } from "react-router-dom";
import { useState } from "react";

function MenuBar() {

    const [selectedDiv, setSelectedDiv] = useState(0);

    const handleDivClick = (index) => {
        setSelectedDiv(index);
    };

    return (
        <>
            <div className={MenuBarCss.menu}>
                <div
                    className={`${MenuBarCss.title} ${selectedDiv === 0 ? MenuBarCss.active : ''}`}
                    onClick={() => handleDivClick(0)}
                >
                    <NavLink to="/" exact className={MenuBarCss.navLink}>
                        MAIN
                    </NavLink>
                </div>
                <div
                    className={`${MenuBarCss.title} ${selectedDiv === 1 ? MenuBarCss.active : ''}`}
                    onClick={() => handleDivClick(1)}
                >
                    <NavLink to="/open" className={MenuBarCss.navLink}>
                        오픈뱅킹
                    </NavLink>
                </div>
                <div
                    className={`${MenuBarCss.title} ${selectedDiv === 2 ? MenuBarCss.active : ''}`}
                    onClick={() => handleDivClick(2)}
                >
                    <NavLink to="/excel" className={MenuBarCss.navLink}>
                        엑셀 업로드
                    </NavLink>
                </div>
                <Login />
            </div>
        </>
    )

}

export default MenuBar;
