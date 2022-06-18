export async function getData(url) {
  let response;
  try {
    response = await fetch(url);
    response = await response.json();
  } catch (err) {
    alert(err);
  }
  return response;
}
