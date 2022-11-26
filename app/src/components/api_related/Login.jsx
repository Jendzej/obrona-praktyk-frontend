import {useContext, useState} from "react";
import {Form} from "../Form";
import {Input} from "../Input";
import {Button} from "../Button";
import {handleLogin} from "../../functions/handleLogin";
import {UserContext} from "../UserProvider";

export const Login = () => {
    const {username, setUsername, setToken, setLogged} = useContext(UserContext)
    const [password, setPassword] = useState("")
    return <>
        <Form method="POST" onSubmit={async (e) => {
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
            if (results) {
                localStorage.setItem('jwt-token', results['access_token'])
                localStorage.setItem('logged', 'true')
                setToken(results['access_token'])
                setUsername(username)
                setLogged(true)
            }
            window.location.reload(false)
        }}>
            <Input id="username" label="Type username:" onChange={(e) => {
                setUsername(e.target.value)
            }}/>
            <Input id="password" label="Type password:" type="password" onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <Button> Send </Button>
        </Form>
    </>
}