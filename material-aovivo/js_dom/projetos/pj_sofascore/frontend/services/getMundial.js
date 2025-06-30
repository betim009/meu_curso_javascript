export async function getMundial() {
    // URL
    const url = "https://6852eb990594059b23cf9d25.mockapi.io/mundialDeClubes"
    // FETCH
    const req = await fetch(url)
    // JSON
    const res = await req.json()

    console.log(res)
    return res
}