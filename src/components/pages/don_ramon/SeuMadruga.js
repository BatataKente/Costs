import DonRamon from '../../../img/SeuMadruga.jpg'
import styles from './SeuMadruga.module.css'
import {useState} from 'react'

export default function SeuMadruga() {
    const phrases = [
        "A vingança nunca é plena, mata a alma e envenena.",
        "Posso não ter um centavo no bolso, mas tenho um sorriso no rosto e isso vale mais que todo dinheiro do mundo.",
        "Eu sabia que você era idiota, mas não a nível executivo!",
        "Somente um idiota responde uma pergunta com outra pergunta.",
        "As pessoas boas devem amar seu inimigos.",
        "A virtude do bem viver está nos princípios morais, minha filha.",
        "Sou pobre, porém honrado!",
        "Sou um homem de muita barriga senhor sorte.",
        "As dívidas são sagradas!",
        "O trabalho não é ruim. Ruim é ter de trabalhar!"
    ]
    const choseAPhrase = () => {
        return phrases[Math.floor(Math.random() * phrases.length)]
    }
    const [phrase, setPhrase] = useState(choseAPhrase())
    const buttonHandler = () => {
        setPhrase(choseAPhrase())
    }
    return(
        <section className={styles.seu_madruga}>
            <img src={DonRamon} alt="DonRamon"/>
            <section>
                <h1>Senhor Madruga</h1>
                <p>{phrase}</p>
                <button onClick={buttonHandler}>generate phrase</button>
            </section>
        </section>
    )
}