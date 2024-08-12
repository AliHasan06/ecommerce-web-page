const title = document.querySelector('#title');
const description = document.querySelector('#description');
const price = document.querySelector('#Price');
const div = document.querySelector('#div');
const btn = document.querySelector('#button');

let arr = JSON.parse(localStorage.getItem('arr')) || [];

function AddObject() {
    let obj = {
        title: title.value,
        description: description.value,
        price: price.value
    };

    arr.push(obj);

    localStorage.setItem('arr', JSON.stringify(arr));

    title.value = '';
    description.value = '';
    price.value = '';

    renderCards();
}

function renderCards() {
    div.innerHTML = '';
    arr.forEach(item => {
        div.innerHTML += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Title : ${item.title}</h5>
                  <p class="card-text">Description : ${item.description}</p>
                  <p class="card-text">Price : ${item.price}</p>
                  <button class="btn btn-primary">Add to cart</button>
                </div>
            </div>
        `;
    });
}

renderCards();

btn.addEventListener('click', AddObject);
