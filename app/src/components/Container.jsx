export const Container = ({className=undefined, id = undefined, children}) => {
    return <>
        <div className={className} id={id}>
            {children}
        </div>
    </>
}