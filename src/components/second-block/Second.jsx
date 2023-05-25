import styles from './Second.module.css'
import SecondCard from './SecondCard/SecondCard';


const Second = () => {
    return (
        <div className={styles.second}>
            <div className={styles.second__container}>
                <div className={styles.second__body}>
                    <div className={styles.second__title}>
                        <h1>Товары</h1>
                    </div>
                    <div className={styles.second__link}>
                        <ul>
                            <li><a href="#">Лидеры продаж</a></li>
                            <li><a href="#">Новинки</a></li>
                            <li><a href="#">Акции</a></li>
                        </ul>
                    </div>
                    <div className={styles.second__card}>
                        <SecondCard />
                        <SecondCard />
                        <SecondCard />
                        <SecondCard />
                        <SecondCard />
                        <SecondCard />
                        <SecondCard />
                        <SecondCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Second;