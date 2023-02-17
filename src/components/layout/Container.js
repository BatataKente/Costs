import styles from './Container.module.css'

export default function Container(args) {
    return(
        <div className={`${styles.container} ${styles[args.customClass]}`}>
            {args.children}
        </div>
    )
}