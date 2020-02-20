///// AAA /////

let listContainer = document.getElementsByClassName("App-List");
let mainListContainer = document.getElementsByClassName("App-MainList")[0];

/////SORTABLEE JS/////

let sortContainer = [];
let mainSortContainer = null;

let dataRead = null;
let itemRead = null;

let groupList = "main";

let classColorArray = [
    "blue-item-class",
    "green-item-class",
    "red-item-class",
    "yellow-item-class",
    "purple-item-class"
];

function SetSortableList() {
    mainSortContainer = Sortable.create(mainListContainer, {
        animation: 150,
        ghostClass: 'gray-item-class',
        group: groupList,
    });

    for (let index = 0; index < dataRead.categories.length; index++) {
        sortContainer[index] = Sortable.create(listContainer[index], {
            animation: 150,
            ghostClass: classColorArray[index],
            group: groupList,
            // Element is dropped into the list from another list
            onAdd: function (evt) {
                console.log("Added " + dataRead.categories[index].title,evt.item);
            },
            // Element is removed from the list into another list
            onRemove: function (evt) {
                console.log("Removed " + dataRead.categories[index].title,evt.item);
            },
        });

        document.getElementsByClassName("App-ListTitle")[index].innerHTML = dataRead.categories[index].title;
    }

    for (let index = 0; index < dataRead.options.length; index++) {
        const e = dataRead.options[index];
        AddItemOption(e);
    }
}

$.getJSON("../data.json", (data) => {
    dataRead = data;

    SetSortableList();
});

function AddItemOption(data) {
    let item = document.createElement("div");
    item.setAttribute("class", "App-item");

    //item.classList.add('animated', 'fadeIn');

    let title = document.createElement("h3");
    let id = document.createElement("p");

    title.innerHTML = data.title;
    id.innerHTML = data.id;

    item.appendChild(title);
    item.appendChild(id);

    mainListContainer.appendChild(item);
}

///// /////