import handleRegister from "../functions/handleRegister";
import {Input} from "./Input";
import {Form} from "./Form";
import {useState} from "react";
import {Button} from "./Button";

export const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [password, setPassword] = useState("")
    const [schoolClass, setSchoolClass] = useState("")

    return <>
        <Form method="POST">
            <Input id="username" label="Type username:" onChange={(e) => {setUsername(e.target.value)}}/>
            <Input id="email" label="Type register:" onChange={(e) => {setEmail(e.target.value)}}/>
            <Input id="first" label="Type first:" onChange={(e) => {setFirst(e.target.value)}}/>
            <Input id="last" label="Type last:" onChange={(e) => {setLast(e.target.value)}}/>
            <Input id="password" label="Type password:" onChange={(e) => {setPassword(e.target.value)}}/>
            <Input id="school-class" label="Type school class:" onChange={(e) => {setSchoolClass(e.target.value)}}/>

            <Button type="submit" onClick={() => {
                let res = handleRegister(username, email, first, last, password, schoolClass)
            }}>
                Send
            </Button>
        </Form>
    </>
}