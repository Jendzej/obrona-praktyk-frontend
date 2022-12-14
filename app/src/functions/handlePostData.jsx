export const handlePostData = async (url, transactionData) => {
    try {
        const settings = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt-token')}`
            },
            body: JSON.stringify(transactionData)
        }
        const response = await fetch(url, settings)
        const data = await response.json()
        return data
    } catch (e) {
        return e
    }
}