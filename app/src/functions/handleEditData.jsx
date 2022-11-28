export const handleEditData = async (item_id, updated_item, endpoint) => {
    const token = localStorage.getItem('jwt-token')
    const settings = {
        method: 'PUT',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updated_item)
    }
    try {
        const backend_host = process.env.REACT_APP_BACKEND_HOST
        const backend_port = process.env.REACT_APP_BACKEND_PORT

        const response = fetch(`http://${backend_host}:${backend_port}/${endpoint}/${item_id}`, settings)
        return await response.json()
    } catch (er) {
        return er
    }
}