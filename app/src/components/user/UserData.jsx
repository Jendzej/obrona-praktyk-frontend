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
            <Container className="user-data center-grid">
                {userData.username}<br/>
                {userData.first_name}<br/>
                {userData.last_name}<br/>
                {userData.email}<br/>
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
                    Logout
                </Button>
                <EditUser userId={userData.id}/>
            </Container>
        </>
    } else {
        localStorage.removeItem('jwt-token')
        localStorage.removeItem('logged')
        localStorage.removeItem('shopping-cart')
    }

}
