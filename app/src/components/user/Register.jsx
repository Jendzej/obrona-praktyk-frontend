import handleRegister from "../../functions/handleRegister";
import {Input} from "../Input";
import {Form} from "../Form";
import {useState} from "react";
import {Button} from "../Button";
import {SchoolClasses} from "../api_related/SchoolClasses";
import {Header} from "../Header";

export const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [password, setPassword] = useState("")
    const [schoolClass, setSchoolClass] = useState("")

    return <>
        <Header size="2">Rejestracja</Header>
        <Form method="POST" onSubmit={(e) => {
            handleRegister(username, email, first, last, password, schoolClass)
            e.preventDefault()
            e.target.reset()
        }}>
            <Input id="username" label="Nazwa użytkownika:" onChange={(e) => {
                setUsername(e.target.value)
            }}/>
            <Input id="email" label="Email:" onChange={(e) => {
                setEmail(e.target.value)
            }}/>
            <Input id="first" label="Imię:" onChange={(e) => {
                setFirst(e.target.value)
            }}/>
            <Input id="last" label="Nazwisko:" onChange={(e) => {
                setLast(e.target.value)
            }}/>
            <Input id="password" label="Hasło:" type="password" onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <SchoolClasses className="school_classes" id="school_classes" onChange={(e) => {
                setSchoolClass(e.target.value)
            }}/>
            <Button type="submit"> Send </Button>
        </Form>
    </>
}