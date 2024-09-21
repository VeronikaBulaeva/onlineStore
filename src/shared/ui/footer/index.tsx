import { FC } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { CART_ROUTE, CATALOG_ROUTE } from "../../constans/routes/routes";
import Languages from "../../constans/icons/Languages.svg";
import VK from "../../constans/icons/VK.svg";
import TG from "../../constans/icons/Telegram.svg";
import Whats from "../../constans/icons/Whatsapp.svg";

const Footer: FC = () => {
  return (
    <section className="containerFooter">
      <div className="footerContent">
        <Link to={CATALOG_ROUTE}>
          <p className="siteName">QPICK</p>
        </Link>
        <nav className="footerNav">
          <Link to={""} className="footerLink">
            Избранное
          </Link>
          <Link to={CART_ROUTE} className="footerLink">
            Корзина
          </Link>
          <Link to={""} className="footerLink">
            Контакты
          </Link>
        </nav>
        <div className="conditionAndLanguages">
          <Link to={""} className="condition">
            Условия сервиса
          </Link>
          <div className={"languages"}>
            <img src={Languages} className="languageIcon" alt="Язык" />
            <button className="languagesButton">Рус</button>
            <button className="languagesButton">Eng</button>
          </div>
        </div>
        <div className="footerSocial">
          <Link
            to="https://vk.com/veronika_bylaeva"
            className="footerSocialIconVK"
          >
            <img src={VK} alt={"Вконтакте"} />
          </Link>
          <Link to="https://t.me/vabulaeva" className="footerSocialIcon">
            <img src={TG} alt="Телеграмм" />
          </Link>
          <Link to="https://t.me/vabulaeva" className="footerSocialIcon">
            <img src={Whats} alt="Вотсап" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Footer;
