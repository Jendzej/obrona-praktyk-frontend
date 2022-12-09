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

        let response = fetch(`http://${backend_host}:${backend_port}/user/`, settings);
        const data = await response;
        if (data.ok) {
            alert(`Successfully added new user with username '${username}'.`)
        } else {
            alert(`Invalid data, ${data.statusText}`)
        }
        return data
    } catch (e) {

        return e;
    }
}