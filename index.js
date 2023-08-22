//what is traversing: Selecting an element from another element
/*
3 direction for traversing

1. Downwards
    a. querySelector()
    b. children
2. Upwards
    a. parentElement

3. Sideways
    1. nextElementSibling
    2. previousElementSibling
    3. parentElement  + children + index
*/

//Downward
const studentsList = document.querySelector(".students-list");
// studentsList.innerHTML = "changed";

const studentA= studentsList.children[2];
// studentA.innerHTML = "changed";

//upward

const stuA = document.querySelectorAll("li")[0];
// stuA.innerHTML = "changed";

const stuAll = stuA.parentElement;
// stuAll.innerHTML = "changed";


//sideward
const stuB = stuA.nextElementSibling;
// stuB.innerHTML = "changed";



