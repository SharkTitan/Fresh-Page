const task_list = document.querySelector("#task_list");
const task_input = document.querySelector("#get_task");

function task_add(){
    let child_text = task_input.value;
    if(child_text==""){return;}
    
    // Создаем контейнер задачи
    let task_container = document.createElement("div");
    task_container.classList.add("task_container");

    // Создаем текстовый элемент с введенным пользователем текстом
    let task_text = document.createElement("p");
    task_text.classList.add("task_text");
    task_text.textContent = child_text;

    // Создаем кнопку "Удалить" и добавляем обработчик событий для удаления задачи
    let delete_button = document.createElement("button");
    delete_button.classList.add("button_del");
    delete_button.textContent = "Удалить";
delete_button.onclick = function() {task_container.remove(); /* Удаляем контейнер задачи при нажатии на кнопку "Удалить"*/};

    // Добавляем текст и кнопку "Удалить" в контейнер задачи
    task_container.appendChild(delete_button);
    task_container.appendChild(task_text);
   

    // Добавляем контейнер задачи в список задач
    task_list.appendChild(task_container);

    // Очищаем содержимое поля ввода
    task_input.value = "";
}
