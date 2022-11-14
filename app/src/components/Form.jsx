export const Form = ({target, action, method, className, id, children}) => {
    return <>
        <form target={target} action={action} method={method} className={className} id={id}>
            {children}
        </form>
    </>
}