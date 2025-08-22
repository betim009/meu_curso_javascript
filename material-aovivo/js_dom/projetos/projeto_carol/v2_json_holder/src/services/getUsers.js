export async function getUsers(params) {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const req = await fetch(url);
    const res = await req.json();
    return res;
  } catch (error) {
    return error
  }
}
