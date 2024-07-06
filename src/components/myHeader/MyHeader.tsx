import { useState } from "react";

import styles from "./myHeader.module.css";
import { Link, useLocation } from "react-router-dom";

const MyHeader = () => {
    const [headerHor] = useState<boolean>(true);
    const [headerVer, setHeaderVer] = useState<boolean>(false);
    const location = useLocation()


    const changeToggleVer = () => {
        setHeaderVer((prev) => !prev);
    };

    return (
        <div className={styles.divHaeder}>
            <p>my location - {location.pathname}</p>
            {headerHor && (
                <header className={styles.header}>
                    <div>
                    <Link to={'/'} className={styles.linkH}>home</Link>
                    <Link to={'/dishes'} className={styles.linkH}>dishes</Link>
                    <Link to={'/brotherhood'} className={styles.linkH}>brotherhood</Link>
                    <Link to={'/login-form'} className={styles.linkH}>login form</Link>
                    <Link to={'/productcard'} className={styles.linkH}>productcard</Link>
                    <Link to={'/auth'} className={styles.linkH}>auth</Link>
                    <Link to={'/myform'} className={styles.linkH}>myform</Link>
                        <span onClick={changeToggleVer}>≡</span>
                    </div>
                </header>
            )}
            {headerVer && (
            <header className={styles.headerVert}>
                <div>
                <Link to={'/'} className={styles.linkV}>home</Link>
                <Link to={'/dishes'} className={styles.linkV}>dishes</Link>
                <Link to={'/login-form'} className={styles.linkV}>login form</Link>
                <Link to={'/productcard'} className={styles.linkV}>productcard</Link>
                <Link to={'/auth'} className={styles.linkV}>auth</Link>
                <Link to={'/myform'} className={styles.linkV}>myform</Link>
                    </div>
                </header>
            )}
        </div>
    );
};

export default MyHeader;
