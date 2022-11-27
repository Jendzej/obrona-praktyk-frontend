import {Header} from "../Header";
import {useState} from "react";
import {Button} from "../Button";
import {Form} from "../Form";
import {handleDelData} from "../../functions/handleDelData";
import {UsersSelect} from "../api_related/UsersSelect";

export const DelUser = () => {
    const [userToDel, setUserToDel] = useState('')
    return <>
        <Header size="3">Delete items</Header>
        <Form method="POST" onSubmit={async (e) => {
            e.preventDefault()
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            await handleDelData(`http://${backend_host}:${backend_port}/user/${userToDel}`, localStorage.getItem('jwt-token'))

        }}>
            <UsersSelect onChange={(e) => {
                setUserToDel(e.target.value)
            }}/>
            <Button>Submit</Button>
        </Form>
    </>
}