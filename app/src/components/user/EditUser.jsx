import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Form} from "../Form";
import {handleEditData} from "../../functions/handleEditData";
import {Header} from "../Header";
import {Input} from "../Input";
import {SchoolClasses} from "../api_related/SchoolClasses";
import {Button} from "../Button";
import {Container} from "../Container";
import {UserContext} from "./UserProvider";

export const EditUser = ({userId}) => {
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [schoolClass, setSchoolClass] = useState(null)
    const {setRole, setUserId, setUsernameCxt, setLogged} = useContext(UserContext)
    const navigate = useNavigate()
    return <>
        <Container id="edit-user">
            <Form method="POST" className="edit-user-form" onSubmit={async (e) => {
                e.preventDefault()
                const updatedUser = {
                    username: username,
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                    password: password,
                    school_class: schoolClass
                }
                e.target.reset()

                const notNullUpdated = Object.fromEntries(Object.entries(updatedUser).filter(([_, v]) => v != null && v != ""))
                await handleEditData(userId, {updated_user: notNullUpdated}, 'user')
                if (username === null || password === null) {
                    localStorage.removeItem('jwt-token')
                    localStorage.removeItem('logged')
                    localStorage.removeItem('username')
                    localStorage.removeItem('shopping-cart')
                    alert("Hasło i/lub nazwa użytkownika zostały zmienione, przez co należy się ponownie zalogować.")
                    window.location.reload(false)
                    setUsernameCxt(null)
                    setRole(null)
                    setLogged(null)
                    setUserId(null)
                }
            }}>
                <Header size="3">Edit user data</Header>
                <Input label="Nowa nazwa użytkownika:" onChange={(e) => {
                    setUsername(e.target.value)
                }}/>
                <Input label="Nowy email:" onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
                <Input label="Nowe hasło:" onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
                <Input label="Nowe imię:" onChange={(e) => {
                    setFirstName(e.target.value)
                }}/>
                <Input label="Nowe nazwisko:" onChange={(e) => {
                    setLastName(e.target.value)
                }}/>
                <SchoolClasses onChange={(e) => {
                    setSchoolClass(e.target.value)
                }
                }/>
                <Button>Edytuj użytkownika</Button>

            </Form>
        </Container>
    </>
}