export async function getBrasileirao() {
    // URL
    const url = "https://6852eb990594059b23cf9d25.mockapi.io/Brasileirao"
    // FETCH
    const req = await fetch(url)
    // JSON
    const res = await req.json()

    return res
}