import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import Network from '../../network/Network.js'

export default function ProjectForm({buttonText}) {
    const categories = Network("http://localhost:5000/categories", "GET")
    return(
        <form className={styles.form}>
            <Input type="text" text="Nome do projeto:" name="name" placeholder="insira o nome do projeto"/>
            <Input type="number" text="Orçamento do projeto:" name="budget" placeholder="insira o orçamento total"/>
            <Select name="category_id" text="Selecione a categoria: " options={categories}/>
            <SubmitButton text={buttonText}/>
        </form>
    )
}