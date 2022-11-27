import {Container} from "./Container";

export const Input = ({className, id, defaultValue, placeholder, label, onChange, type, max, min, value}) => {
    return <>
        <Container className={id}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} className={className} defaultValue={defaultValue} placeholder={placeholder}
                   min={min} max={max} value={value}
                   onChange={onChange}/>
        </Container>
    </>
}