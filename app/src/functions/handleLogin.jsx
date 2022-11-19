export const handleLogin = async (username, password) => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(
            `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
        ),
        // redirect: 'follow'
    }
    try {
        const backendHost = process.env.REACT_APP_BACKEND_HOST
        const backendPort = process.env.REACT_APP_BACKEND_PORT
        const login = fetch(`http://${backendHost}:${backendPort}/auth`, settings)
        return await login
    } catch (e) {
        return e;
    }

}