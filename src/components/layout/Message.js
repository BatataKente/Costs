import styles from './Message.module.css'

export default function Message({type, message}) {
    return(
        <div className={`${styles.message} ${styles[type]}`}>{message}</div>
    )
}