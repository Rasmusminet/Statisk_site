/*https://kea-alt-del.dk/t7/api/products/1163*/
fetch("https://kea-alt-del.dk/t7/api/products/1163")
  .then((response) => response.json())
  .then((data) => showproduct(data));

function showproduct(product) {
  console.log(product);

  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;

  document.querySelector(".purchaseBox .brand").textContent = product.brandname;

  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
