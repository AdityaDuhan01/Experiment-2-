const products = [
  { name: "Wireless Headphones", price: 129.99, category: "electronics" },
  { name: "Bluetooth Speaker", price: 89.99, category: "electronics" },
  { name: "Cotton T-Shirt", price: 24.99, category: "clothing" },
  { name: "Denim Jeans", price: 59.99, category: "clothing" }
];

function display(list) {
  const div = document.getElementById("products");
  div.innerHTML = "";

  list.forEach(p => {
    div.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <small>[${p.category}]</small>
      </div>
    `;
  });
}

function filterProducts() {
  const cat = document.getElementById("category").value;
  if (cat === "all") display(products);
  else display(products.filter(p => p.category === cat));
}

display(products);
