import {useEffect, useState} from "react";
import {handleFetchJWT} from "../functions/handleFetchJWT";
import {Container} from "./Container";

export const UserData = () => {
    const [userData, setUserData] = useState([])
    useEffect(() =>{
        async function fetchUserData() {
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            const data = await handleFetchJWT(`http://${backend_host}:${backend_port}/user/`)
            setUserData(data)
        }
        fetchUserData()
    }, [])
    return <>
        <Container className="user-data center-grid">
            {userData.username}<br/>
            {userData.first_name}<br/>
            {userData.last_name}<br/>
            {userData.email}
        </Container>
    </>
}