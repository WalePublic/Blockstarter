import styles from './../styles/Home.module.css';
import Image from 'next/image';

function BSFooter() {

    const getYear = ()=> {
        const year = new Date().getFullYear();
        return year;
    }

    return(
        <footer className="footer">
            <div className="footer-nav__logo-box">
                <img src="/favicon.ico" alt="Full logo" className="footer-nav__logo" />
            </div>
            <div className="footer-nav__nav">
                <ul className="footer-nav__list">
                    <li className="footer-nav__item"><a href="#" className="footer-nav__link">Company</a></li>
                    <li className="footer-nav__item"><a href="#" className="footer-nav__link">Contact Us</a></li>
                    <li className="footer-nav__item"><a href="#" className="footer-nav__link">Careers</a></li>
                    <li className="footer-nav__item"><a href="#" className="footer-nav__link">Terms</a></li>
                </ul>
            </div>
            <div>
                <span>Copyright ©{getYear()}</span>
            </div>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
            </a>
        </footer>
    );
}

export default BSFooter;