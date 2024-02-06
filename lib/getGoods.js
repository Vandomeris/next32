export default async function getGoods(limit = 0) {
    let url = new URL("http://localhost:1111/goods");
    if (limit) {
        url.searchParams.append('_limit', limit)
    }
    const resp = await fetch(url)
    return resp.json()
}   