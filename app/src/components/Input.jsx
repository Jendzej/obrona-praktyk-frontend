export const Input = ({className, id, defaultValue, placeholder, children}) => {
    return <>
        <input id={id} className={className} defaultValue={defaultValue} placeholder={placeholder} />
    </>
}