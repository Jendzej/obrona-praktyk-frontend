import {Header} from "../Header";
import {useState} from "react";
import {Button} from "../Button";
import {Form} from "../Form";
import {handleDelData} from "../../functions/handleDelData";
import {UsersSelect} from "../api_related/UsersSelect";
import {useNavigate} from "react-router-dom";

export const DelUser = () => {
    const [userToDel, setUserToDel] = useState('')
    const navigate = useNavigate()
    return <>
        <Header size="3">Delete items</Header>
        <Form method="POST" onSubmit={async (e) => {
            e.preventDefault()
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            await handleDelData(`http://${backend_host}:${backend_port}/user/${userToDel}`, localStorage.getItem('jwt-token'))
            navigate('/')
        }}>
            <UsersSelect onChange={(e) => {
                setUserToDel(e.target.value)
            }}/>
            <Button>Submit</Button>
        </Form>
    </>
}