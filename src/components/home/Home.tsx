import { useContext } from 'react'
import styles from './home.module.css'
import { UserContext } from '../userContext/UserContext'
import { useAppSelector } from '../../app/hooks'



export default function Home() {
  const {products, isLoading, error} = useAppSelector(store => store.reduxProducts)

  const { user } = useContext(UserContext)

  return (
    <>
            <h1>Home</h1>
            <div className={styles.containerHome}>
        <div className={styles.containerHome01}>
          <p>my data</p>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.email}</p>
          <p>{user.age}</p>
        </div>
        <div className={styles.containerHome02}>
          <img src="/images/reactSpase.jpg" alt="React Space" />
        </div>
        <div className={styles.containerHome03}>
          2
        </div>
        {products && <div>{products[0]?.title}</div>
        }
    </div>
    </>

  )
}
