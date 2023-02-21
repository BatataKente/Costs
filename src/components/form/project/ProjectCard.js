import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function ProjectCard({project}) {
    const category = project.category ? project.category.name : "Unknown"
    return( 
        <>
            {
                project.name != null && (
                    <div className={styles.project_card}> 
                        <h4>{project.name}</h4>
                        <p><span>Orçamento:</span> R$ {project.budget}</p>
                        <p className={styles.category_text}>
                            <span className={`${styles[category.toLowerCase()]}`}/>
                            {category}
                        </p>
                        <div className={styles.project_card_actions}>
                            <Link to='/'>
                                <BsPencil/> Editar
                            </Link>
                            <button>
                                <BsFillTrashFill/> Excluir
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}