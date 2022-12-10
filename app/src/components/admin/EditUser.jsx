import {Form} from "../Form";
import {handleEditData} from "../../functions/handleEditData";
import {Header} from "../Header";
import {Button} from "../Button";
import {useState} from "react";
import {Container} from "../Container";
import {AllUsers} from "../api_related/AllUsers";
import {Input} from "../Input";
import {SchoolClasses} from "../api_related/SchoolClasses";

export const EditUser = () => {
    const [userId, setUserId] = useState(null)
    const [email, setEmail] = useState(null)
    const [schoolClass, setSchoolClass] = useState(null)
    const [role, setRole] = useState(null)

    return <>
        <Container id="admin-edit-user">
            <Form method="POST" className="edit-user-form" onSubmit={async (e) => {
                e.preventDefault()
                const updatedUser = {
                    email: email,
                    school_class: schoolClass,
                    role: role
                }
                e.target.reset()

                const notNullUpdated = Object.fromEntries(Object.entries(updatedUser).filter(([_, v]) => v != null && v != ""))
                await handleEditData(userId, {updated_user: notNullUpdated}, 'user')
            }}>
                <Header size="3">Edycja użytkowników</Header>
                <AllUsers onChange={(e) => {
                    setUserId(e.target.value)
                }}/>
                <Input label="Nowy email:" onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
                <SchoolClasses onChange={(e) => {
                    setSchoolClass(e.target.value)
                }}/>
                <Input label="Zmiana uprawnień: " onChange={(e) => {
                    setRole(e.target.value)
                }}/>
                <Button className="admin-button">Zapisz</Button>
            </Form>
        </Container>
    </>
}