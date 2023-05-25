import styles from './SecondCard.module.css'
import Image from 'next/image';

const SecondCard = () => {
    return (
        <div className={styles.second__item}>
            <div className={styles.second__card_container}>
                <div className={styles.second__card_body}>
                    <div className={styles.second__card_title}>
                        <h1>Хит</h1>
                        <div className={styles.card__icon}>
                            <Image src='/Image/FirstBlock/Union.png' alt='Union' width={14} height={17} />
                            <div className={styles.second__card__favorites}></div>
                        </div>
                    </div>
                    <div className={styles.second__card_img}>
                        <Image src='/Image/FirstBlock/apple-watch.png' alt="Apple-Watch" width={110} height={125} />
                    </div>
                    <div className={styles.second__card_info}>
                        <p>Планшет Apple iPad Air (2022) 10.9" <br /> Wi-Fi 64Gb серый космос (MM9C3)</p>
                        <Image src='/Image/FirstBlock/reviews.png' alt="Reviews" width={73} height={12} />
                        <div className={styles.second__card_subtitle}>
                            <div>
                                <p>62 990 ₽</p>
                                <h2>31 990 ₽</h2>
                            </div>
                            <div>
                                <button>Купить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondCard;