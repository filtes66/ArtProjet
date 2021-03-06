export default async function fetchData(url, setData) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  } catch (err) {
    console.log(err);
  }
}
