import {useContext, useEffect, useState} from "react";
import {handleFetchJWT} from "../../functions/handleFetchJWT";
import {Container} from "../Container";
import {UserContext} from "./UserProvider";
import {parseJWT} from "../../utilities/parseJWT";
import {Button} from "../Button";
import {EditUser} from "./EditUser";

export const UserData = () => {
    const [userData, setUserData] = useState([])
    const {setRole, setUserId, setUsername, setLogged} = useContext(UserContext)
    const [editState, setEditState] = useState(true)
    useEffect(() => {
        async function fetchUserData() {
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            const data = await handleFetchJWT(`http://${backend_host}:${backend_port}/user/`, localStorage.getItem('jwt-token'))
            setUserData(data)
        }

        fetchUserData()
    }, [])

    const rounded_date = Math.round(Date.now() / 1000)
    if (parseJWT(localStorage.getItem('jwt-token')).exp > rounded_date) {
        setRole(userData.role)
        return <>
            <Container id="user-data">
                <p>Nazwa użytkownika: {userData.username}</p>
                <p>Imię: {userData.first_name}</p>
                <p>Nazwisko: {userData.last_name}</p>
                <p>Klasa: {userData.school_class}</p>
                <p>Email: {userData.email}</p>
                <Button id="logout" onClick={(e) => {
                    localStorage.removeItem('jwt-token')
                    localStorage.removeItem('logged')
                    localStorage.removeItem('username')
                    localStorage.removeItem('shopping-cart')
                    setUsername(null)
                    setRole(null)
                    setLogged(null)
                    setUserId(null)
                    window.location.reload(false)
                }}>
                    Wyloguj się
                </Button>
                <Button onClick={() => {
                    setEditState(!editState)
                }}>Edycja użytkownika</Button>
                {editState === false ? <EditUser userId={userData.id}/>
                    : <Container></Container>}
            </Container>
        </>
    } else {
        localStorage.removeItem('jwt-token')
        localStorage.removeItem('logged')
        localStorage.removeItem('shopping-cart')
    }

}
