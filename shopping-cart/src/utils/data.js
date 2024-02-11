export default async function Data() {
  try {
    const res = await fetch(
      "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const {
      data: {
        products: { edges },
      },
    } = await res.json();
    return edges;
  } catch (err) {
    console.log(err);
  }
}
