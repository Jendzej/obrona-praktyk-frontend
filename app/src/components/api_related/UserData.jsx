import {useContext, useEffect, useState} from "react";
import {handleFetchJWT} from "../../functions/handleFetchJWT";
import {Container} from "../Container";
import {UserContext} from "../UserProvider";
import {parseJWT} from "../../utilities/parseJWT";
import {Button} from "../Button";

export const UserData = () => {
    const [userData, setUserData] = useState([])
    const {token, role, setRole} = useContext(UserContext)
    useEffect(() => {
        async function fetchUserData() {
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            const data = await handleFetchJWT(`http://${backend_host}:${backend_port}/user/`, localStorage.getItem('jwt-token'))
            setUserData(data)
        }

        fetchUserData()
    }, [])
    setRole(userData.role)
    const rounded_date = Math.round(Date.now() / 1000)
    if (parseJWT(localStorage.getItem('jwt-token')).exp > rounded_date) {
        return <>
            <Container className="user-data center-grid">
                {userData.username}<br/>
                {userData.first_name}<br/>
                {userData.last_name}<br/>
                {userData.email}<br/>
                <Button id="logout" onClick={(e) => {
                    localStorage.setItem('jwt-token', null)
                    localStorage.setItem('logged', false)
                    window.location.reload(false)
                }}>
                    Logout
                </Button>
            </Container>
        </>
    } else {
        localStorage.removeItem('jwt-token')
        localStorage.setItem('logged', false)
    }

}
