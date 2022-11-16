import {Container} from "./Container";

export const Input = ({className, id, defaultValue, placeholder, label, onChange}) => {
    return <>
        <Container className={id}>
            <label htmlFor={id}>{label}</label>
            <input id={id} className={className} defaultValue={defaultValue} placeholder={placeholder} onChange={onChange}/>
        </Container>
    </>
}