import { Link, Outlet, useLocation } from 'react-router-dom'
import styles from './layout.module.css'

export default function Layout() {

    const location = useLocation()
    console.log('i am', location.pathname);
    

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Link to={'/'}>home</Link>
                <Link to={'/login-form'}>login form</Link>
                <Link to={'/productcard'}>productcard</Link>
                <Link to={'/auth'}>auth</Link>
                <Link to={'/myform'}>myform</Link>
            </header>
            <main className={styles.main}>
                <Outlet/>

            </main>
            <footer className={styles.footer}></footer>
        </div>
    )
}
