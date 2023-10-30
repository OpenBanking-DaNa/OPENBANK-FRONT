import MenuBarCss from "./MenuBar.module.css"
import Login from "../Login/Login"

function MenuBar() {


    return (
        <>
            <div className={MenuBarCss.menu}>
                <div className={MenuBarCss.title}> MAIN </div>
                <div className={MenuBarCss.title}> 내역작성 </div>

                <Login />
            </div>
        </>
    )

}

export default MenuBar;
