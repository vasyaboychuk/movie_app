import css from './Footer.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer(props) {
    return (
        <div className={css.container}>

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