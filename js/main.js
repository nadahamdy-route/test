var userInput = document.getElementById('userInput');
var items = [];
var homeContent = document.getElementById('homeContent');
var submitBtn=document.getElementById('submitBtn');
var updateBtn=document.getElementById('updateBtn');
var updatedIndex=0;
var searchInput=document.getElementById('searchInput');
var searchItmes=[];

if (localStorage.getItem('userItems') != null) {
    items = JSON.parse(localStorage.getItem('userItems'));
    displayItems(items);
}
function addItem() {
    items.push(userInput.value);
    localStorage.setItem('userItems', JSON.stringify(items));
    displayItems(items);
    clr();
}

function displayItems(arr) {
    var container = '';
    for (var i = 0; i < arr.length; i++) {
        container += ` <div class="home-item mb-2 px-3  text-dark mx-auto w-50 bg-white d-flex justify-content-between align-items-center">
        <p id="x">${arr[i]}</p>
        <div class='home-icons'>
        <i class=" fa-sharp fa-solid fa-trash px-2" onclick="deleteItem(${i})"></i>
        <i class="fa-solid fa-pen-to-square" onclick="setItemToUpdate(${i})"></i>
        </div>
    </div>`
    }
    homeContent.innerHTML = container;
}

function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem('userItems',JSON.stringify(items));
    displayItems(items);
}
function clr() {
    userInput.value = '';
}

function setItemToUpdate(index)
{
    userInput.value=items[index];
    submitBtn.classList.replace('d-block','d-none');
    updateBtn.classList.replace('d-none','d-block');
    updatedIndex=index;

}
function updateItem()
{
    items[updatedIndex]=userInput.value;
    localStorage.setItem('userItems',JSON.stringify(items));
    displayItems(items);
    clr();
    updateBtn.classList.replace('d-block','d-none');
    submitBtn.classList.replace('d-none','d-block');
}
updateBtn.addEventListener('click',updateItem)
function searchItem()
{
    searchItmes=[];
    for(var i=0 ;i<items.length ; i++)
    {
        if(items[i].includes(searchInput.value) == true)
        {
            searchItmes.push(items[i]);
        }
    }
    displayItems(searchItmes);
    
}

searchInput.addEventListener('input',searchItem);
