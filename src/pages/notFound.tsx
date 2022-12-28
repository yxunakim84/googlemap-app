import styles from '../styles/NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contents}>
        잘못된 경로입니다!
      </div>
    </div>
  )
}

export default NotFound