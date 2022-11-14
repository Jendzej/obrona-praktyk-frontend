export const Container = ({className, id = undefined, children}) => {
    return <>
        <div className={className} id={id}>
            {children}
        </div>
    </>
}