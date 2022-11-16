export async function handleSchoolClasses() {
    const settings = {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    try {
        const backend_host = process.env.REACT_APP_BACKEND_HOST
        const backend_port = process.env.REACT_APP_BACKEND_PORT

        let fetchResponse = fetch(`http://${backend_host}:${backend_port}/get_classes`, settings)
            .then(response => response.json())
        return await fetchResponse

    } catch (e) {
        return e
    }
}