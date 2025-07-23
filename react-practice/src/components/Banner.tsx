import styles from './Banner.module.css';

interface BannerProps {
    children: React.ReactNode;
}
const Banner: React.FC<BannerProps> = ({ children }) => {
    return (
        <header className="row mb-4 bg-primary text-white align-items-center">
            <div className={`col-2 ${styles.logo}`}>
                MTG Card Organizer
            </div>
            <div className="col-10">
                {children}
            </div>
        </header>
    );
}

export default Banner;