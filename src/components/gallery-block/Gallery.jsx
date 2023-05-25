import styles from './Gallery.module.css'


const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <div className={styles.gallery__container}>
                <div className={styles.gallery__body}>
                    <div className={styles.gallery__up}>
                        <div className={styles.dyson__picture}>
                            <p>Dyson Supersonic HD07 EU</p>
                        </div>
                        <div className={styles.iphone__picture}>
                            <p>iPhone 14 Pro</p>
                        </div>
                    </div>
                    <div className={styles.gallery__down}>
                        <p>Samsung Galaxy S23</p>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default Gallery;