let listContainer = document.getElementsByClassName("App-list");

var mySortableContainer = Sortable.create(listContainer[0], {
    animation: 150,
    ghostClass: 'blue-item-class',
    group: 'main',
});

var mySortableContainer = Sortable.create(listContainer[1], {
    animation: 150,
    ghostClass: 'green-item-class',
    group: 'main',
});

var mySortableContainer = Sortable.create(listContainer[2], {
    animation: 150,
    ghostClass: 'red-item-class',
    group: 'main',
});

