export default async function handleRegister(username, email, first_name, last_name, password, school_class) {
    const settings = {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email: email,
            first_name: first_name,
            last_name: last_name,
            password: password,
            school_class: school_class
        })
    }
    try {
        const backend_host = process.env.REACT_APP_BACKEND_HOST
        const backend_port = process.env.REACT_APP_BACKEND_PORT

        let fetchResponse = fetch(`http://${backend_host}:${backend_port}/add_user`, settings);
        return await fetchResponse;
    } catch (e) {
        return e;
    }
}