import s from "./Header.module.css";
import Image from 'next/image';

const Header = () => {
    return (
        <>
            <header className={s.aboveHeader}>
                <div className={s.aboveHeader__container}>
                    <div className={s.aboveHeader_body}>
                        <div className={s.aboveHeader__location}>
                            <img className={s.location_img} src="./location.svg" alt="location" />
                            <p>ТЦ Горбушка, г. Москва, ул. Барклая, 8</p>
                        </div>
                        <nav className={s.aboveHeader_title}>
                            <ul className={s.aboveHeader_title_li}>
                                <li>
                                    <a className={s.aboveHeader_description} href="#">О компании</a>
                                </li>
                                <li>
                                    <a className={s.aboveHeader_description} href="#">Доставка и оплата</a>
                                </li>
                                <li>
                                    <a className={s.aboveHeader_description} href="#">Обмен и возврат</a>
                                </li>
                                <li>
                                    <a className={s.aboveHeader_description} href="#">Гарантия и сервис</a>
                                </li>
                                <li>
                                    <a className={s.aboveHeader_description} href="#">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <header className={s.header}>
                <div className={s.header__container}>
                    <div className={s.header__body}>
                        <div className={s.header_logo}>
                            <Image src='/Image/FooterImg/FooterLogo.png' alt='logotip-GorbushkaMoscow' width={118} height={58} />
                        </div>
                        <div className={s.header__content}>
                            <div className={s.header_all}>
                                <div className={s.header_input}>
                                    <input type="text" placeholder="Поиск" />
                                    <button>Найти</button>
                                </div>
                                <div className={s.social}>
                                    <Image src='/Image/FooterImg/Telegram.svg' alt='logotip-FooterWhatsApp' width={28} height={28} />
                                    <Image src='/Image/FooterImg/WhatsApp.svg' alt='logotip-FooterTelegram' width={28} height={28} />
                                </div>
                                <div className={s.header_connection}>
                                    {/* <Image className={s.header__phoneLogo} src='/Image/FirstBlock/phoneLogo.svg' alt='logotip-Phone' width={16} height={16} /> */}
                                    <svg className={s.header__phoneLogo}  width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.85714C0 2.23199 0.248341 1.63244 0.690391 1.19039C1.13244 0.748341 1.73199 0.5 2.35714 0.5H3.43514C4.11086 0.5 4.70014 0.960429 4.86436 1.61571L5.73257 5.09093C5.80293 5.37221 5.78872 5.668 5.69172 5.94125C5.59472 6.21449 5.41925 6.45304 5.18729 6.627L4.17136 7.38914C4.06529 7.4685 4.0425 7.58479 4.07236 7.66571C4.5158 8.87167 5.21604 9.96684 6.1246 10.8754C7.03316 11.784 8.12833 12.4842 9.33429 12.9276C9.41521 12.9575 9.53071 12.9347 9.61086 12.8286L10.373 11.8127C10.547 11.5808 10.7855 11.4053 11.0588 11.3083C11.332 11.2113 11.6278 11.1971 11.9091 11.2674L15.3843 12.1356C16.0396 12.2999 16.5 12.8891 16.5 13.5656V14.6429C16.5 15.268 16.2517 15.8676 15.8096 16.3096C15.3676 16.7517 14.768 17 14.1429 17H12.375C5.54086 17 0 11.4591 0 4.625V2.85714Z" fill="#3E4D31" />
                                    </svg>
                                    <h4>+7 (916) 842-34-30</h4>
                                </div>
                                <div className={s.header_active}>
                                    <Image src='/Image/FirstBlock/Union.png' alt='Union' width={14} height={17} />
                                    <Image src='/Image/FirstBlock/like-active.png' alt='Union' width={19} height={18} />
                                </div>
                            </div>
                            <div className={s.header_down}>
                                <button className={s.catalog} >Каталог</button>
                                <button className={s.iphone}>iPhone 14 Pro Макс 256</button>
                                <button className={s.appletv}>Apple TV 4K 2022</button>
                                <button className={s.watch}> Apple Watch Series Ultra</button>
                                <button className={s.macbook}>MacBook Pro 14 M2</button>
                                <button className={s.ipad}>iPad Pro M2</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;