export const SelectPaymentMethod = ({className}) => {
    return <>
        <select className={className}>
            <option>Gotówka, przy odbiorze</option>
            <option>BLIK</option>
            <option>Przelew tradycyjny</option>
        </select>
    </>
}