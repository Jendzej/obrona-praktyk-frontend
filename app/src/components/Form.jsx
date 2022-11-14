export const Form = ({target, action, method, id, className, children}) => {
    return <>
        <form target={target} action={action} method={method} id={id} className={className}>
            {children}
        </form>
    </>
}