import {useState} from "react";
import {Form} from "./Form";
import {Input} from "./Input";
import {Button} from "./Button";
import {handleLogin} from "../functions/handleLogin";

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    return <>
        <Form method="POST">
            <Input id="username" label="Type username:" onChange={(e) => {setUsername(e.target.value)}}/>
            <Input id="password" label="Type password:" onChange={(e) => {setPassword(e.target.value)}}/>

            <Button type="submit" onClick={async (e) => {
                e.preventDefault()
                const response = handleLogin(username, password)
                    .then(value => {
                        if (value.status === 200) {
                            return value.json()
                        } else {
                            return false
                        }
                    })
                let results = await response
                !results ? setToken("")
                    : setToken(results['access_token'])
                console.log(token)
            }}> Send </Button>
        </Form>
    </>
}