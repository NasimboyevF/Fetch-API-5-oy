fetch("https://fakestoreapi.com/products")
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    value.forEach((value, index, array) => {
      cards(value);
    });
  });

const cards = (value) => {
  console.log(value);
  
  document.querySelector(".list").innerHTML += `        
    <li class="item">
      <img style="width: 320px; height:  329px; object-fit: contain;" src="${value.image}" alt="">
      <div>
        <h2 style="height:30px; overflow:hidden " >
         ${value.title} 
        </h2>
        <p>
          ${value.price}$
        </p>
        <button style="width: 100%; text-align: center; background-color: aqua;">Buy</button>
      </div>
    </li>`;
};

