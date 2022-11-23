export async function handleFetchJWT(url) {
    const settings = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt-token')}`
        }
    }
    try {
        let fetchResponse = fetch(url, settings)
            .then(response => response.json())
        return await fetchResponse
    } catch (e) {
        return e
    }
}
