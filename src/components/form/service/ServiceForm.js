import styles from '../Form.module.css'
import {useState} from 'react'
import Input from '../../form/Input.js'
import SubmitButton from '../../form/SubmitButton.js'

export default function ServiceForm({handleSubmit, buttonText, projectData}) {
    const [service, setService] = useState({})
    function submit(event) {
        event.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }
    function handleChange(event) {
        setService(
            {...service, [event.target.name]: event.target.value}
        )
    }
    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                text="Nome do serviço:"
                name="name"
                placeholder="Insira o nome do serviço"
                handlerOnChange={handleChange}/>
            <Input 
                type="number" 
                text="Custo do serviço:"
                name="cost"
                placeholder="Insira o valor total"
                handlerOnChange={handleChange}/>
            <Input 
                type="text" 
                text="Descrição do serviço:"
                name="description"
                placeholder="Descreva o serviço"
                handlerOnChange={handleChange}/>
            <SubmitButton text={buttonText}/>
        </form>
    )
}