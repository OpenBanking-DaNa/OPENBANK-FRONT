import MainLayOutCss from "./MainLayOut.module.css";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import { Outlet } from "react-router";

function MainLayOut() {

    return (
        <>
            <MenuBar />
            <main className={MainLayOutCss.main}>
                <div style={{ display: 'flex', alignItems: 'end', borderBottom: '1px solid lightgray' }}>
                </div>
                <Outlet />
            </main>

            <Footer />
        </>
    );


}

export default MainLayOut;
