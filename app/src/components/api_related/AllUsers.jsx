import {useEffect, useState} from "react";
import {handleFetchJWT} from "../../functions/handleFetchJWT";
import {Container} from "../Container";

export const AllUsers = ({className, onChange, id, required, toShow = false}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function fetchUsers() {
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            const data = await handleFetchJWT(`http://${backend_host}:${backend_port}/user/all/`, localStorage.getItem('jwt-token'))
            console.log(data)
            setUsers(data)
        }

        fetchUsers()
    }, [])
    if (toShow) {
        return <>
            <Container className={className} id={id}>
                <table className="all-users-table">
                    <thead>
                    <td>ID</td>
                    <td>Nazwa użytkownika</td>
                    <td>Email</td>
                    <td>Imię</td>
                    <td>Nazwisko</td>
                    <td>Klasa</td>
                    <td>Uprawnienia</td>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.school_class}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Container>
        </>
    } else {
        return <>
            <select className={className} onChange={onChange} id={id} required={required}>
                {users.map((user, index) => (
                    <option key={index} value={user.id}>{user.username} - {user.role}</option>
                ))}
            </select>
        </>
    }
}