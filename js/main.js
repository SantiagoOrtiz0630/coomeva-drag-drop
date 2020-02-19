let listContainer = document.getElementsByClassName("App-List");

let mainListContainer = document.getElementsByClassName("App-MainList")[0];

let sortContainer = [];
let mainSortContainer = null;

mainSortContainer = Sortable.create(mainListContainer, {
    animation: 150,
    ghostClass: 'gray-item-class',
    group: 'main',
});

sortContainer[0] = Sortable.create(listContainer[0], {
    animation: 150,
    ghostClass: 'blue-item-class',
    group: 'main',
});

sortContainer[1] = Sortable.create(listContainer[1], {
    animation: 150,
    ghostClass: 'green-item-class',
    group: 'main',
});

sortContainer[2] = Sortable.create(listContainer[2], {
    animation: 150,
    ghostClass: 'red-item-class',
    group: 'main',
});

sortContainer[3] = Sortable.create(listContainer[3], {
    animation: 150,
    ghostClass: 'yellow-item-class',
    group: 'main',
});

