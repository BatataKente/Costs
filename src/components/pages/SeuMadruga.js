import DonRamon from '../../img/SeuMadruga.jpg'
import styles from './SeuMadruga.module.css'

export default function SeuMadruga() {
    const phrases = [
        "A vingança nunca é plena; mata a alma e a envenena",
        "Não existe trabalho ruim, o ruim é ter que trabalhar",
        "Prefiro morrer do que perder a vida"
    ]
    const index = Math.floor(Math.random() * phrases.length)
    return(
        <section className={styles.seu_madruga}>
            <img src={DonRamon} alt="DonRamon"/>
            <section>
                <h1>Senhor Madruga</h1>
                <p>{phrases[index]}</p>
            </section>
        </section>
    )
}