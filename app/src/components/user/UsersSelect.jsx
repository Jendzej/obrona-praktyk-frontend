import {useEffect, useState} from "react";
import {handleFetchJWT} from "../../functions/handleFetchJWT";

export const UsersSelect = ({className, onChange, id}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function fetchItems() {
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            const data = await handleFetchJWT(`http://${backend_host}:${backend_port}/user/all/`, localStorage.getItem('jwt-token'))
            setUsers(data)
        }

        fetchItems()
    }, [])
    return <>
        <select className={className} onChange={onChange} id={id} required>
            {users.map(user => (
                <option key={user.id} value={user.id}>{user.id} - {user.username}</option>
            ))}
        </select>
    </>
}