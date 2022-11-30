import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Form} from "../Form";
import {handleEditData} from "../../functions/handleEditData";
import {Header} from "../Header";
import {Input} from "../Input";
import {SchoolClasses} from "../api_related/SchoolClasses";
import {Button} from "../Button";

export const EditUser = ({userId}) => {
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [schoolClass, setSchoolClass] = useState(null)
    const navigate = useNavigate()
    return <>
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
        }}>
            <Header size="3">Edit user data</Header>
            <Input label="New username" onChange={(e) => {
                setUsername(e.target.value)
            }}/>
            <Input label="New email" onChange={(e) => {
                setEmail(e.target.value)
            }}/>
            <Input label="New password" onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <Input label="New first name" onChange={(e) => {
                setFirstName(e.target.value)
            }}/>
            <Input label="New last name" onChange={(e) => {
                setLastName(e.target.value)
            }}/>
            <SchoolClasses onChange={(e) => {
                setSchoolClass(e.target.value)
            }
            }/>
            <Button>Submit</Button>

        </Form>
    </>
}