export const Button = ({type = "submit", form=undefined, className=undefined, id=undefined, onClick=undefined, children}) => {
    return <>
        <button type={type} className={className} form={form} id={id} onClick={onClick}>{children}</button>
    </>
}