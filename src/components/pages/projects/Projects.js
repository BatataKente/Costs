import Message from '../../layout/message/Message.js'
import styles from './Projects.module.css'
import Container from '../../layout/container/Container.js'
import Loading from '../../layout/loading/Loading.js'
import {useLocation} from 'react-router-dom'
import LinkButton from '../../layout/linkButton/LinkButton.js'
import ProjectCard from '../../form/project/ProjectCard.js'
import {useState, useEffect} from 'react'

export default function Projects() {
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const location = useLocation()
    const loadData = () => {
        fetch(
            'http://localhost:5000/projects', 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(response => response.json())
        .then(
            data => {
                setProjects(data)
                setRemoveLoading(true)
            }
        )
        .catch(error => console.log(error))
    }
    const removeProject = id => {
        fetch(
            `http://localhost:5000/projects/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(response => response.json())
        .then(
            data => {
                setProjects(projects.filter(project => project.id !== id))
            }
        )
        .catch(error => console.log(error))
    }
    let message = ''
    if(location.state) {
        message = location.state.message
    }
    useEffect(
        // () => {
        //     setTimeout(
                loadData, 
        //         3000
        //     )
        // }, 
        []
    )
    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto">novo projeto</LinkButton>
            </div>
            {message && <Message message={message} type="success"/>}
            <Container customClass="start">
                {
                    projects.length > 0 && projects.map(
                        (project) => (
                            <ProjectCard 
                                project={project}
                                handleRemove={removeProject}/>
                        )
                    )
                }
                {!removeLoading && <Loading/>}
                {
                    removeLoading && projects.length === 0 && (
                        <p>Não há projetos cadastrados!</p>
                    )
                }
            </Container>
        </div>
    )
}