export async function getProdcts() {
    try {
        const req = await fetch("https://fakestoreapi.com/products");
        const res = await req.json();
        
        return res;
    } catch (error) {
        console.log(error)
    }
}