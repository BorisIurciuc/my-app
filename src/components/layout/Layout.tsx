import { Outlet, useLocation } from 'react-router-dom'
import styles from './layout.module.css'
import MyHeader from '../myHeader/MyHeader';

export default function Layout() {
    const location = useLocation()
    console.log('i am', location.pathname);
    return (
        <div className={styles.page}>
            <MyHeader />
            <main className={styles.main}>
                <Outlet/>
            </main>
            <footer className={styles.footer}></footer>
        </div>
    )
}
