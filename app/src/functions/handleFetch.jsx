export async function handleFetch(url) {
    const settings = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
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
