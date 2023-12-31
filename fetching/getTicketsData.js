export async function getTicketsData(id = '') {
    return await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => {
            console.log(json)
            return json
        });
}