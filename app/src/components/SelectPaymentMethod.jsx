export const SelectPaymentMethod = ({className, onChange}) => {
    return <>
        <label htmlFor="payment-method">Wybierz sposób płatności</label>
        <select className={className} id="payment-method" onChange={onChange}>
            <option value="cash">Gotówka, przy odbiorze</option>
            <option value="blik">BLIK</option>
            <option value="transfer">Przelew tradycyjny</option>
        </select>
    </>
}