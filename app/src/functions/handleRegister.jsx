

export default async function handleRegister(username, email, first_name, last_name, password, school_class) {
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            ContentType: 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "email": email,
            "first_name": first_name,
            "last_name": last_name,
            "password": password,
            "school_class": school_class
        })
    }
    try {
        const backend_host = process.env.REACT_APP_BACKEND_HOST
        const backend_port = process.env.REACT_APP_BACKEND_PORT
        console.log(backend_host)
        // let fetchResponse = fetch(`http://${backend_host}:${backend_port}/add_user`, settings);
        let fetchResponse = fetch(`http://127.0.0.1:8000/add_user`, settings);
        let data = await fetchResponse;
        console.log(data)
        return data;
    } catch (e) {
        return e;
    }
}