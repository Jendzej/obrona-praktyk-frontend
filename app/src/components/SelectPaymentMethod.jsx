export const SelectPaymentMethod = ({className}) => {
    return <>
        <label htmlFor="payment-method">Wybierz sposób płatności</label>
        <select className={className} id="payment-method">
            <option>Gotówka, przy odbiorze</option>
            <option>BLIK</option>
            <option>Przelew tradycyjny</option>
        </select>
    </>
}