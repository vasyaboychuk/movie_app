import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useContext} from "react";

import {ThemeContext} from "../../App";
import css from './Footer.module.css';

function Footer(props) {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={css.container} data-theme={theme}>
            <div className={css.info}>
                <h3 >Contact me</h3>
            </div>
            <div className={css.icons}>
                <InstagramIcon fontSize={"large"}/>
                <FacebookIcon fontSize={"large"}/>
                <TelegramIcon fontSize={"large"}/>
                <YouTubeIcon fontSize={"large"}/>
                <TwitterIcon fontSize={"large"}/>

            </div>
        </div>

    );
}

export {Footer};