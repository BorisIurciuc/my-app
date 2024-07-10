import { useContext, useState } from "react";

import styles from "./myHeader.module.css";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../userContext/UserContext";

const MyHeader = () => {

    const { user } = useContext(UserContext)
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
                    <span>{user.firstName}</span>
                    <span>{user.lastName}</span>
                    <span>{user.email}</span>

                    <div>
                        <Link to={'/'} className={styles.linkH}>home</Link>
                        <Link to={'/dishes'} className={styles.linkH}>dishes</Link>
                        <Link to={'/brotherhood'} className={styles.linkH}>brotherhood</Link>
                        <Link to={'/catfact'} className={styles.linkH}>catfact</Link>
                        <Link to={'/productcard'} className={styles.linkH}>productcard</Link>
                        <Link to={'/auth'} className={styles.linkH}>auth</Link>
                        <Link to={'/myform'} className={styles.linkH}>myform</Link>
                        <Link to={'/fakeStore'} className={styles.linkH}>fakeStore</Link>
                        <Link to={'/dummyProduct'} className={styles.linkH}>dummyProduct</Link>
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
                    <Link to={'/example'} className={styles.linkV}>example</Link>
                    <Link to={'/fakeStore'} className={styles.linkV}>fakeStore</Link>
                    <Link to={'/dummyProduct'} className={styles.linkV}>dummyProduct</Link>

                </div>
                </header>
            )}
        </div>
    );
};

export default MyHeader;
