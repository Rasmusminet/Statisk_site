/*https://kea-alt-del.dk/t7/api/products/1163*/
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showproduct(data));

function showproduct(product) {
  console.log(product);

  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;

  document.querySelector(".purchaseBox .name").textContent = product.brandname;

  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
