// function deleteItem(event){
//   // nos devuelve el id del event que se le pasa
//   console.log(event.currentTarget.id);
//   var clickedButton = event.currentTarget;
//   var itemId = clickedButton.id.split("-")[1];

//   console.log(itemId); //Si apretas el boton te dice el id del que apretas.product-wrapper);

//   var productToDelete = document.querySelector(`#item-${itemId}`);

//   productToDelete.remove();

//   getTotalPrice();

//   console.log(productToDelete);

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// var products = document.querySelectorAll('.product-wrapper');
// var totalOfAllElements = document.querySelectorAll("#total-of-all");
// var totalOfAllPrices = 0;

// products.forEach(function(oneProduct){

//   var unitCostElement = oneProduct.querySelector('span.unit-cost');
//   var quantityElement = oneProduct.querySelector('form input');//to select the value inside the input tag

//   var totalPriceElement = oneProduct.querySelector('.total-price');

//   var unitCost = unitCostElement.innerHTML;
//   var quantity = quantityElement.value;

//   var totalPrice = parseFloat(unitCost) * quantity;
//   totalOfAllPrices += totalPrice;

//   totalPriceElement.innerHTML = `$${totalPrice.toFixed(2)}`;

// });

// console.log(totalOfAllPrices);

// totalOfAllElements.innerHTML = `$${totalOfAllPrices}`;

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   // createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };


function deleteItem(event) {
  var clickedButton = event.currentTarget;
  var itemId = clickedButton.id.split("-")[1];
  var productToDelete = document.querySelector(`#item-${itemId}`);
  productToDelete.remove();
  getTotalPrice();
}
function getPriceByProduct(itemNode) {}
function updatePriceByProduct(productPrice, index) {}
function getTotalPrice() {
  var products = document.querySelectorAll(".product-wrapper");
  var totalOfAllEle = document.querySelector("#total-of-all");
  var totalOfAllPrices = 0;
  products.forEach(function(oneProduct) {
    var unitCostEle = oneProduct.querySelector("span.unit-cost");
    var quantityEle = oneProduct.querySelector("form input");
    var totalPriceEle = oneProduct.querySelector(".total-price");
    var unitCost = unitCostEle.innerHTML;
    var quantity = quantityEle.value;
    var totalPrice = parseFloat(unitCost) * quantity;
    totalOfAllPrices += totalPrice;
    totalPriceEle.innerHTML = `$${totalPrice.toFixed(2)}`;
  });
  totalOfAllEle.innerHTML = `$${totalOfAllPrices}`;
}
function createQuantityInput() {}
function createDeleteButton() {}
function createQuantityNode() {}
function createItemNode(dataType, itemData) {}
function createNewItemRow(itemName, itemUnitPrice) {

  var main = document.querySelector('main');

  var nextItemIndex = main.children.length +1 ; //no se porque
  var divNode = document.createElement('div');
  divNode.setAttribute('class', "product-wrapper");

  divNode.setAttribute('id', `item-${nextItemIndex}`);



  var productElement = `
      <span class="product-name">${itemName}</span>
      <p>
        <span>$</span>
        <span class="unit-cost">${itemUnitPrice.toFixed(2)}</span>
      </p>
      <div class="quantity quantity-wrapper">
        <form>
          <label for="quantity">QTY</label>
          <input type="number">
        </form>
      </div>
      <div class="price-wrapper">
        <span class="total-price">0</span>
      </div>
      <div class="btn-wrapper">
        <button class="btn-delete" id="delete-${4}">Delete</button>
      </div>`;

      divNode.innerHTML = productElement;
      main.appendChild(divNode);
}

function createNewItem(event) {
  // el event lo pasa by default, y preve hace que al clickar el boton se no se reestablazcan los valores
  event.preventDefault();

  var newItemName = document.querySelector("#new-item-name").value;
  var newItemPrice = parseFloat(document.querySelector('#new-item-price').value); //porque nos devolvia un string
  createNewItemRow(newItemName, newItemPrice);
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};

