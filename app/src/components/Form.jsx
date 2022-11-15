export const Form = ({target="_self", action, method, id, className, children}) => {
    return <>
        <form target={target} action={action} method={method} id={id} className={className}>
            {children}
        </form>
    </>
}