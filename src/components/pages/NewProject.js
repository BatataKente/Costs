import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import {useNavigate} from 'react-router-dom'      

export default function NewProject() {

    const history = useNavigate()

    function createPost(project) {
        // initialize cost ans services
        project.cost = 0
        project.services = []
        fetch(
            "http://localhost:5000/projects", {
                method: "POST",
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify(project)
            }
        )
        .then(response => response.json())
        .then(data => history('/projects', {message: 'Projeto criado com sucesso!'}))// rediret
        .catch(error => console.log(error))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} buttonText="Criar Projeto"/>
        </div>
    )
}