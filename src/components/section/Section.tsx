import styles from './section.module.css'

interface ISection {
    children: string;
    title: string
}

export default function Section({children, title='undefined'}: ISection) {
    return (
        <section className={styles.section}>
            <h5>Section ! {title}</h5>
            {children}
            <p>Вот и все</p>
        </section>
    )
}