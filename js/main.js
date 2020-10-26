
// Afficher liste des articles
function displayListeArticles (products){
  
    for( let product of products){
      let productBox = document.getElementById('products_list');
      let divImagePrice = document.getElementById('div_image_price');
      //let colonneImgPrice = document.getElementById('colonne_img_price');
      let link = document.createElement('a');
      link.className = 'product_lien';
      link.href = `product.html?id=${product._id}`;
      divImagePrice.appendChild(link);
      let productImage = document.createElement('img');
      productImage.className = 'product_image1'; // col-lg-2 col-md-4 col-sm-12 col-xs-12';
      productImage.src = product.imageUrl;
      let productPrice = document.createElement('p')
      productPrice.className = 'product_price1'; // col-lg-12 col-md-12 col-sm-2 col-xs-2';
      productPrice.textContent = 'Prix : ' +  ' ' + (product.price / 100) + ' ' +  '€';  ///   a suivre
      link.append(productImage);
      link.append(productPrice);

    }
  }
// télécharger les infos articles depuis l' API
async function loadListeArticles(){
  await fetch('http://localhost:3000/api/teddies')
 .then ((response) => response.json() )
 .then((products) => displayListeArticles(products))
  }
loadListeArticles();


