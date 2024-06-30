import { useEffect, useState } from "react";

import styles from "./myHeader.module.css";

const MyHeader = () => {
    const [headerHor] = useState<boolean>(true);
    const [headerVer, setHeaderVer] = useState<boolean>(false);

    const changeToggleVer = () => {
        setHeaderVer((prev) => !prev);
    };

    return (
        <div>
            {headerHor && (
                <header className={styles.header}>
                {/* <h3>Lesson10</h3> */}
                <div>
                    <a href="/">Home</a>
                    <a href="/">Info</a>
                    <a href="/">Profile</a>
                    <span onClick={changeToggleVer}>≡</span>
                </div>
                </header>
            )}
            {headerVer && (
            <header className={styles.headerVert}>
                <div>
                    <a href="/">Home</a>
                    <a href="/">Info</a>
                    <a href="/">Profile</a>
                    </div>
                </header>
            )}
        </div>
    );
};

export default MyHeader;
