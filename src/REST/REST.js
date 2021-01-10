const urls = ' https://kinopoiskapiunofficial.tech';
const type = 'TOP_250_BEST_FILMS';
const token = 'c7f6adfd-b7d5-40ec-b96c-8a66af9aa791';
const page = 4;


const getRate = async() => {
    return await fetch (`${urls}/api/v2.2/films/top?type=${type}&page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset = utf-8',
            'X-API-KEY': token,
        },
    }).then(response=> response.json())
    .catch(error=> console.log('---error', error))
}
    
export default getRate;