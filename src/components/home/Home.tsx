import styles from './home.module.css'
export default function Home() {
  return (
    <div className={styles.containerHome}>
        <h1>Home</h1>
        <img src="/images/reactSpase.jpg" alt="React Space" />
    </div>
  )
}
