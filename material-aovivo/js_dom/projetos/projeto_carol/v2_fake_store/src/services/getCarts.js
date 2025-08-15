export async function getCarts() {
    try {
        const req = await fetch("https://fakestoreapi.com/carts");
        const res = await req.json();
        console.log(res)
        return res;
    } catch (error) {
        console.log(error)
    }
}