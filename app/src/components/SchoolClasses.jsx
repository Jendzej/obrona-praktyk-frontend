import {useEffect, useState} from "react";
import {handleFetch} from "../functions/handleFetch";
import {Container} from "./Container";

export const SchoolClasses = ({className, onChange, id}) => {
    const [schoolClasses, setSchoolClasses] = useState([])
    const backend_host = process.env.REACT_APP_BACKEND_HOST
    const backend_port = process.env.REACT_APP_BACKEND_PORT
    useEffect(() => {
        async function fetchData() {
            const data = await handleFetch(`http://${backend_host}:${backend_port}/school_class`)
            setSchoolClasses(data)
        }
        fetchData()
    }, [])
    return <>
        <Container className={className}>
            <select className={className} onChange={onChange} id={id}>
                {schoolClasses.map(school_class => (
                    <option key={school_class.school_class}>{school_class.school_class}</option>
                ))}
            </select>
        </Container>
    </>
}