var userInput=document.getElementById('userInput');
var items=[];
var homeContent=document.getElementById('homeContent');

function addItem()
{
    items.push(userInput.value);
    displayItem();
}

function displayItem()
{
    var container='';
    for(var i =0 ; i<items.length ; i++)
    {
        container += ` <div class="home-item mb-2 px-3  text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
        <p id="x">${items[i]}</p>
        <i class=" fa-sharp fa-solid fa-trash" onclick="deleteItem(${i})"></i>
    </div>`
    }
    homeContent.innerHTML=container;
}

function deleteItem(index)
{
   items.splice(index,1);
   displayItem();
}

