export const getApi = async () => {
    const endpoint = "https://68e7bbac10e3f82fbf407d91.mockapi.io/games";
    const req = await fetch(endpoint);
    const res = await req.json();

    return res;
};