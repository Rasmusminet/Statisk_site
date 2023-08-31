/* https://kea-alt-del.dk/t7/api/products */
const urlParams = new URLSearchParams(window.location.search);
const kategori = urlParams.get("kategori");
if (kategori) {
  fetch("https://kea-alt-del.dk/t7/api/products?category=" + kategori)
    .then((res) => res.json())
    .then(showProducts);
} else {
  fetch("https://kea-alt-del.dk/t7/api/products")
    .then((res) => res.json())
    .then(showProducts);
}

function showProducts(products) {
  //loppe og kalder showproduct
  console.log(products);
  products.forEach(showProduct);
}

function showProduct(product) {
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indholdet
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".subtle").textContent = product.articletype + " | " + product.brandname;
  copy.querySelector(".price").textContent = "Before " + product.price + ",-";
  copy.querySelector(".discounted p").textContent = "Now " + (product.price - (product.discount * product.price) / 100) + ",-";
  copy.querySelector(".discounted p+p").textContent = product.discount + "%";
  copy.querySelector(".soldOut").src = product.soldout;

  if (product.discount == null) {
    copy.querySelector(".discounted p").classList.add("hidden");
    copy.querySelector(".discounted p+p").classList.add("hidden");
  }
  if (product.soldout == 0) {
    copy.querySelector("article").classList.remove("soldOut");
  }
  copy.querySelector(".read-more").setAttribute("href", `product.html?id=${product.id}`);

  //append
  document.querySelector("main").appendChild(copy);
}
/*  <article class="smallProduct">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
                alt="Sahara Team India Fanwear Round Neck Jersey">
            <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
            <p class="subtle">Tshirts | Nike</p>
            <p class="price"><span>Prev.</span> DKK 1595,-</p>
            <div class="discounted">
                <p>Now DKK 1560,-</p>
                <p>-34%</p>
            </div>
            <a href="product.html">Read More</a>
        </article> */
/*
articletype: "Tshirts"
​​
brandname: "Nike"
​​
category: "Apparel"
​​
discount: null
​​
gender: "Men"
​​
id: 1163
​​
price: 895
​​
productdisplayname: "Sahara Team India Fanwear Round Neck Jersey"
​​
productionyear: 2011
​​
season: "Summer"
​​
soldout: 0
​​
subcategory: "Topwear"
​
usagetype: "Sports"*/
