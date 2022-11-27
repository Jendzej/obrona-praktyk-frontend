import {ItemsSelect} from "../api_related/ItemsSelect";
import {Header} from "../Header";
import {useState} from "react";
import {Button} from "../Button";
import {Form} from "../Form";
import {handlePostData} from "../../functions/handlePostData";
import {handleDelData} from "../../functions/handleDelData";

export const DelItem = () => {
    const [itemToDel, setItemToDel] = useState('')
    return <>
        <Header size="3">Delete items</Header>
        <Form method="DELETE" onSubmit={async (e) => {
            e.preventDefault()
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            await handleDelData(`http://${backend_host}:${backend_port}/item/${itemToDel}`, localStorage.getItem('jwt-token'))

        }}>
            <ItemsSelect onChange={(e) => {
                setItemToDel(e.target.value)
            }}/>
            <Button>Submit</Button>
        </Form>
    </>
}