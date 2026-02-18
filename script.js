// STEP 1: get elements from HTML
const inputBox = document.querySelector('.data_to_be_enter');
const addBtn = document.querySelector('.add_btn');
const taskList = document.querySelector('.task_list');


// STEP 2: when button clicked
addBtn.addEventListener('click', function () {

    // STEP 3: read input text
    const taskText = inputBox.value.trim();

    // STEP 4: stop empty tasks
    if (taskText === "") return;

    // STEP 5: create <li>
    const li = document.createElement('li');

    // STEP 6: put text inside li
    const span = document.createElement('span')
    span.textContent= taskText

    const delbtn = document.createElement('button')
    delbtn.textContent="Delete"


    delbtn.addEventListener('click',function(){
        li.remove()
    })

    li.append(span)
    li.append(delbtn)

    taskList.append(li)

    // STEP 8: clear input
    inputBox.value = "";
});
