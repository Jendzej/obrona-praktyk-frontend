export const Header = ({size, className, id, children}) => {
    size = parseInt(size)
    let header_to_return
    size === 6 ? header_to_return = <h6 className={className} id={id}>{children}</h6>
        : size === 5 ? header_to_return = <h5 className={className} id={id}>{children}</h5>
        : size === 4 ? header_to_return = <h4 className={className} id={id}>{children}</h4>
        : size === 3 ? header_to_return = <h3 className={className} id={id}>{children}</h3>
        : size === 2 ? header_to_return = <h2 className={className} id={id}>{children}</h2>
        : header_to_return = <h1 className={className} id={id}>{children}</h1>
    return <>
        {header_to_return}
    </>
}