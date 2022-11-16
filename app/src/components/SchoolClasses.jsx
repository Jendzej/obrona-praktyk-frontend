import {useEffect, useState} from "react";
import {handleSchoolClasses} from "../functions/handleSchoolClasses";
import {Container} from "./Container";

export const SchoolClasses = ({className, onChange, id}) => {
    const [schoolClasses, setSchoolClasses] = useState([])
    useEffect(() => {
        async function fetchData() {
            const data = await handleSchoolClasses()
            setSchoolClasses(data)
        }
        fetchData()
    }, [])
    return <>
        <Container className={id}>
            <select className={className} onChange={onChange} id={id}>
                {schoolClasses.map(school_class => (
                    <option key={school_class.school_class}>{school_class.school_class}</option>
                ))}
            </select>
        </Container>
    </>
}