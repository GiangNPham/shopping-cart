export default async function Data() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}
