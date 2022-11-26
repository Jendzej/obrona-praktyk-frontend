export function parseJWT(jwt) {
    try {
        return JSON.parse(atob(jwt.split(".")[1]))
    } catch (er) {
        return 0
    }
}