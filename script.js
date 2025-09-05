// let input = document.getElementById("input");
// let button = document.querySelector(".add");
// let ul = document.querySelector(".lists");

// let allList = [];

// button.addEventListener("click", (e) => {
//   e.preventDefault();

//   let text = input.value.trim();

//   //
//   if (text.length > 0) {
//     allList.push(text);

//     let index = allList.length - 1;
//     liId = "list-" + index;
//     allList = allList.filter((_, i) => i !== index);

//     let li = document.createElement("li");
//     li.setAttribute("class", "list");

//     li.innerHTML = `
//     <input type="checkbox" name="" id="${liId}" />
//     <label for="${liId}" class="checkbox">
//     <i class="fa-solid fa-check"></i>
//     </label>
//     <label for="${liId}" class="checkbox-text">${text}</label>
//     <button class="btn">
//     <i class="fa-solid fa-trash"></i>
//     </button>
//     `;

//     ul.appendChild(li);
//     input.value = "";

//
//   }
// });

//

let input = document.getElementById("input");
let button = document.querySelector(".add");
let ul = document.querySelector(".lists");

let allList = [];

button.addEventListener("click", (e) => {
  e.preventDefault();
  toDo();
});

let toDo = () => {
  let text = input.value.trim();
  if (text.length > 0) {
    allList.push(text);
    pushInList();
    input.value = "";
  }
};

let pushInList = () => {
  ul.innerHTML = "";
  allList.forEach((list, i) => {
    todoItem = createElement(list, i);
    ul.append(todoItem);
  });
};

let createElement = (list, listIndex) => {
  let liId = "list-" + listIndex;
  let li = document.createElement("li");
  li.className = "list";

  li.innerHTML = `
    <input type="checkbox" name="" id="${liId}" />
    <label for="${liId}" class="checkbox">
    <i class="fa-solid fa-check"></i>
    </label>
    <label for="${liId}" class="checkbox-text">${list}</label>
    <button class="btn">
    <i class="fa-solid fa-trash"></i>
    </button>
    `;

  let deleteBtn = li.querySelector(".btn");
  deleteBtn.addEventListener("click", () => {
    deleteItem(listIndex);
  });


  return li;
};

let deleteItem = (listIndex) => {
  allList = allList.filter((_, i) => i !== listIndex);
  toDo();
  pushInList();
};
