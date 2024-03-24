const url = 'http://154.38.171.54:3002/priceF';
const myHeaders = new Headers({
    'Content-Type': 'application/json'
})


export async function postData(endpoint, obj){
    fetch(`${url}/${endpoint}`, {
        method: 'POST',
        headers : myHeaders,
        body : JSON.stringify(obj)
    })
    .then(res => {
        console.log(res);
        res.json()})
    .then(res => console.log(res))

}