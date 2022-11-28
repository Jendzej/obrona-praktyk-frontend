import {ItemsSelect} from "../api_related/ItemsSelect";
import {Header} from "../Header";
import {useState} from "react";
import {Button} from "../Button";
import {Form} from "../Form";
import {handleDelData} from "../../functions/handleDelData";
import {useNavigate} from "react-router-dom";

export const DelItem = () => {
    const [itemToDel, setItemToDel] = useState('')
    const navigate = useNavigate()
    return <>
        <Header size="3">Delete items</Header>
        <Form method="DELETE" onSubmit={async (e) => {
            e.preventDefault()
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            await handleDelData(`http://${backend_host}:${backend_port}/item/${itemToDel}`, localStorage.getItem('jwt-token'))
            navigate('/')
        }}>
            <ItemsSelect onChange={(e) => {
                setItemToDel(e.target.value)
            }}/>
            <Button>Submit</Button>
        </Form>
    </>
}