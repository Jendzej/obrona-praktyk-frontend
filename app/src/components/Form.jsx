export const Form = ({target = "_self", action, method, id, className, children, onSubmit}) => {
    return <>
        <form target={target} action={action} method={method} id={id} className={className} onSubmit={onSubmit}>
            {children}
        </form>
    </>
}