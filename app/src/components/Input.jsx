export const Input = ({className, id, defaultValue, placeholder, label, onChange}) => {
    return <>
        <label for={id}>{label}</label>
        <input id={id} className={className} defaultValue={defaultValue} placeholder={placeholder} onChange={onChange}/>
    </>
}