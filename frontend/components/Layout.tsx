import Nav from './Nav'
import styles from '../styles/Layout.module.scss'


const Layout = (props) => {
    return (
        <>
        <Nav/>
        <div className={styles.container}>
            <main className={styles.main}>
                {props.children}
            </main>
        </div>
        </>
    )
}

export default Layout;