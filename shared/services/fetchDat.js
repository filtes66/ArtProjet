export default async function fetchDat(url, setData) {
    try {
        console.log('url : ', url);
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
          }
        const data =  await response.json();
        return(data);
    } catch (err) {
        console.log(err);
    }
}
