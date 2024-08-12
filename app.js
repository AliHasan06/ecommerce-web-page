const title = document.querySelector('#title')
const description = document.querySelector('#description')
const price = document.querySelector('#Price')
const div = document.querySelector('#div')
const btn = document.querySelector('#button')

let arr = [];

function AddObject(){
    // console.log('adjbj');
let obj ={
    title :title.value,
    description: description.value,
    price:price.value

}
arr.push(obj);

arr.map((item)=>{

div.innerHTML +=`


<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Title :${item.title}</h5>
      <p class="card-text">Description :${item.description}</p>
      <p class="card-text">Price :${item.price}</p>
      <button class="btn btn-primary">Add to cart</button>
    </div>
  </div>




`

title.value =''
description.value =''
price.value =''

console.log(item);


let arrstring = JSON.stringify(arr)

localStorage.setItem('arr',cartItems)
})
    
}