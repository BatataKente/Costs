import {Link} from 'react-router-dom'
import Container from '../container/Container.js'
import styles from './NavigationBar.module.css'
import logo from '../../../img/costs_logo.png'

export default function NavigationBar() {
    return(
        <nav className={styles.bar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt="Costs"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/'>Home</Link></li>
                    <li className={styles.item}><Link to='/projects'>Projetos</Link></li>
                    <li className={styles.item}><Link to='/company'>Empresa</Link></li>
                    <li className={styles.item}><Link to='/contact'>Contato</Link></li>
                </ul>
            </Container>
        </nav>
    )
}