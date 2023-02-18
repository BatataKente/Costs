import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import {useState, useEffect} from 'react'

export default function ProjectForm({handleSubmit, buttonText, projectData}) {
    const[categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})
    useEffect(
        () => {
            fetch(
                "http://localhost:5000/categories",
                {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then((response) => (response.json()))
            .then((data) => (setCategories(data)))
            .catch((error) => (console.log(error)));
        }, []
    )
    const submit = (event) => {
        event.preventDefault()
        console.log(project)
        handleSubmit(project)
    }
    function handleChange(arg) {
        setProject({...project, [arg.target.name]: arg.target.value})
    }
    function handleCategory(arg) {
        setProject(
            {
                ...project, category: {
                    id: arg.target.value,
                    name: arg.target.options[arg.target.selectedIndex].text
                }
            }
        )
    }
    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                text="Nome do projeto:" 
                name="name"
                placeholder="insira o nome do projeto"
                handlerOnChange={handleChange}
                value={project.name ? project.name : ''}/>
            <Input 
                type="number" 
                text="Orçamento do projeto:" 
                name="budget" 
                placeholder="insira o orçamento total"
                handlerOnChange={handleChange}
                value={project.budget ? project.budget : ''}/>
            <Select 
                name="category_id" 
                text="Selecione a categoria: " 
                options={categories}
                handlerOnChange={handleCategory}
                value={project.category ? project.category.id : ''}/>
            <SubmitButton text={buttonText}/>
        </form>
    )
}