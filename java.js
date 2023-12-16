// (Chalange BOM) >>>>>>>>
let inputText = document.querySelector("#input");
let create = document.querySelector("#add");
let showTasks = document.querySelector(".tasks");
let dataInArray;

if (localStorage.getItem('tasks')) {
  dataInArray = JSON.parse(localStorage.getItem('tasks'));
  for (i = 0; i < dataInArray.length; i++) {
    let element = document.createElement('div');
    element.textContent = dataInArray[i].title;
    element.style.cssText = 'margin-bottom: 10px ;display: flex; justify-content: space-between; padding: 15px; background-color: white; border-radius: 6px;';
    let button = document.createElement("button");
    button.textContent = 'Delete';
    button.style.cssText = 'background-color: red; border: none; color: white; border-radius: 6px; padding: 3px 10px; cursor: pointer;';
    element.appendChild(button);
    showTasks.appendChild(element);
    //delete element
    button.addEventListener("click", function () {
      element.remove();
      dataInArray.splice(dataInArray[i],1);
      localStorage.tasks = JSON.stringify(dataInArray);
    })
  }
} else {
  dataInArray = [];
}

create.onclick = function () {
  if ( inputText.value != '' ) {
    //Create Element
    let element = document.createElement('div');
    element.textContent = inputText.value;
    element.style.cssText = 'margin-bottom: 10px ;display: flex; justify-content: space-between; padding: 15px; background-color: white; border-radius: 6px;';
    let button = document.createElement("button");
    button.textContent = 'Delete';
    button.style.cssText = 'background-color: red; border: none; color: white; border-radius: 6px; padding: 3px 10px; cursor: pointer;';
    element.appendChild(button);
    showTasks.appendChild(element);
    //delete element
    button.addEventListener("click", function () {
      element.remove();
      dataInArray.splice(dataInArray,1);
      localStorage.tasks = JSON.stringify(dataInArray);
      console.log(dataInArray)
    })
    //Set Data To Local Storage
    let dataInObject = {
      title: inputText.value,
    }
    dataInArray.push(dataInObject);
    localStorage.setItem('tasks', JSON.stringify(dataInArray));
};
};