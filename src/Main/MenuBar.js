import MenuBarCss from "./MenuBar.module.css"

function MenuBar() {

    return (
        <>
            <div className={MenuBarCss.menu}>
                <div className={MenuBarCss.title}> MAIN </div>
                <div className={MenuBarCss.title}> 내역작성 </div>

                <div className={MenuBarCss.input} input></div>
                <div className={MenuBarCss.login}> 로그인 </div>
            </div>
        </>
    )

}

export default MenuBar;
