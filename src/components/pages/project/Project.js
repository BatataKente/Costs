import styles from './Project.module.css'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loading from '../../layout/loading/Loading.js'
import Container from '../../layout/container/Container'
import Message from '../../layout/message/Message.js'
import ProjectForm from '../../form/project/ProjectForm.js'
import ServiceForm from '../../form/service/ServiceForm.js'
import ServiceCard from '../../form/service/ServiceCard.js'
import {v4 as uuidv4} from 'uuid'

export default function Project() {
    const {id} = useParams()
    const [services, setServices] = useState([])
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()
    useEffect(
        // () => {
            // setTimeout(
                () => {
                    fetch(
                        `http://localhost:5000/projects/${id}`,
                        {
                            method: "GET",
                            header: {
                                'Content-Type': 'application/json'
                            }
                        }
                    )
                    .then(response => response.json())
                    .then(
                        data => {
                            setProject(data)
                            setServices(data.services)
                        }
                    )
                    .catch(error => setMessage(error))
                }, 
            //     5000
            // )
        // },
        [id]
    )
    function editPost(project) {
        setMessage('')
        if(project.budget < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return
        }
        fetch(
            `http://localhost:5000/projects/${project.id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(project)
            }
        )
        .then(response => response.json())
        .then(
            (data) => {
                setProject(data)
                setShowProjectForm(false)
                setMessage('Projeto atualizado!')
                setType('success')
            }
        )
        .catch(error => setMessage(error))
}
function removeService(serviceToRemove) {
    setMessage('')
    const servicesUpdated = project.services.filter(service => service.id !== serviceToRemove.id)
    const projectUpdated = project
    projectUpdated.services = servicesUpdated
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(serviceToRemove.cost)
    fetch(
        `http://localhost:5000/projects/${projectUpdated.id}`,
        {
            method: 'PATCH',
            headers: {
                'COntent-Type': 'application/json'
            },
            body: JSON.stringify(projectUpdated)
        }
    )
    .then(
        () => {
            setProject(projectUpdated)
            setServices(servicesUpdated)
            setMessage('Serviço removido com sucesso!')
            setType('success')
        }
    )
    .catch(error => setMessage(error))
}
function createService(project) {
    setMessage('')
    // last service
    const lastService = project.services[project.services.length - 1]
    lastService.id = uuidv4()
    const lastServiceCost = lastService.cost
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)
    // maximum value validation
    if(newCost > parseFloat(project.budget)) {
        setMessage('Orça,mento ultrapassado, verifique o valor do serviço')
        setType('error')
        project.services.pop()
        return
    }
    // add service cost to project total cost
    project.cost = newCost
    // Update project
    fetch(
        `http://localhost:5000/projects/${project.id}`,
        {
            method: "PATCH", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }
    )
    .then(
        () => {
            setShowServiceForm(false)
        }
    )
    .catch(error => setMessage(error))
}
function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
}
function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
}
    return(
        <>
            {
                project.name 
                ? 
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} message={message}/>}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                        <button className={styles.button} onClick={toggleProjectForm}>
                            {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                        </button>
                        {
                            !showProjectForm 
                            ? 
                            <div className={styles.project_info}>
                                <p><span>Categoria: </span>{project.category.name}</p>
                                <p><span>Orçamento: R$ </span>{project.budget}</p>
                                <p><span>Total utilizado: R$ </span>{project.cost}</p>
                            </div>
                            : 
                            <div className={styles.project_info}>
                                <ProjectForm 
                                    handleSubmit={editPost}
                                    buttonText="Concluir Edição"
                                    projectData={project}/>
                            </div>
                        }
                        </div>
                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço:</h2>
                            <button className={styles.button} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                            </button>
                            <div className={styles.project_info}>
                                {
                                    showServiceForm && (
                                        <ServiceForm
                                            handleSubmit={createService}
                                            buttonText="Adicionar Serviço"
                                            projectData={project}/>
                                    )
                                }
                            </div>
                        </div>
                        <h2>Serviços:</h2>
                        <Container customClass="start">
                            {
                                services.length > 0 && services.map(
                                    service => (
                                        <ServiceCard
                                            service={service}
                                            handleRemove={removeService}/>
                                    )
                                )
                            }
                            {services.length === 0 && <p>Não há serviços cadastrados</p>}
                        </Container>
                    </Container>
                </div> 
                : 
                (<Loading/>)
            }
        </>
    )
}
