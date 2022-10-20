import {Outlet} from "react-router-dom";

import {Footer, Header} from "../../components";
import css from './MainLayout.module.css'




function MainLayout() {
    return (
        <div className={css.MainLayout}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export {MainLayout};