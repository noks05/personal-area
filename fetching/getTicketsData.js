export async function getTicketsData(id = '') {
    return await $fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(json => {
            console.log(json)
            return json
        });
}