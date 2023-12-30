export async function getTicketsData(id = '') {
    return await fetch("https://run.mocky.io/v3/0472d492-fc7f-4c5e-af3d-17c131d24a5a")
        .then(res => res.json())
        .then(json => {
            console.log(json)
            return json
        });
    // return await fetch(`https://fakestoreapi.com/products/${id}`)
    //     .then(res => res.json())
    //     .then(json => console.log(json));
}