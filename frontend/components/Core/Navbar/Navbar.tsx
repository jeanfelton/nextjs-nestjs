import Link from 'next/link';
import styles from  './Navbar.module.scss'


const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/signup">SignUp</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
