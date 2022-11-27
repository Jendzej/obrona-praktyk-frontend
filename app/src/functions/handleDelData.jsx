export async function handleDelData(url, token) {
    const settings = {
        method: 'DELETE',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    try {
        const response = await fetch(url, settings)
        return await response.json()
    } catch (er) {
        return er
    }
}