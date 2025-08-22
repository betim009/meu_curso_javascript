export async function getPosts(params) {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const req = await fetch(url);
    const res = await req.json();
    return res;
  } catch (error) {
    return error;
  }
}
