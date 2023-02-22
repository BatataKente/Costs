import styles from '../Card.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function ProjectCard({project, handleRemove}) {
    const category = project.category ? project.category.name : "Unknown"
    const remove = event => {
        event.preventDefault()
        handleRemove(project.id)
    }
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
                            <Link to={`/project/${project.id}`}>
                                <BsPencil/> Editar
                            </Link>
                            <button onClick={remove}>
                                <BsFillTrashFill/> Excluir
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}