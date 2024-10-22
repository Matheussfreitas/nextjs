import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/ig.news.svg" alt="" />
                <nav>
                    <a href="" className={styles.active}>Home</a>
                    <a href="" className={styles.active}>Posts</a>
                </nav>
                
                <SignInButton />
            </div>
        </header>
    )
}