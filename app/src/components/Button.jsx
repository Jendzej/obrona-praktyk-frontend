export const Button = ({type = "submit", form=undefined, className=undefined, id=undefined, onClick=undefined, disabled, title, children}) => {
    return <>
        <button type={type} className={className} form={form} id={id} onClick={onClick} disabled={disabled} title={title}>{children}</button>
    </>
}