export const SelectDeliveryTime = ({className, onChange}) => {
    return <>
        <select className={className} onChange={onChange}>
            <option>Przerwa 1. - 8:45</option>
            <option>Przerwa 2. - 9:35</option>
            <option>Przerwa 3. - 10:30</option>
            <option>Przerwa 4. - 11:30</option>
            <option>Przerwa 5. - 12:20</option>
            <option>Przerwa 6. - 13:10</option>
        </select>
    </>
}