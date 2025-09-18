function addTask() {
    const newTask = document.createElement('li');
    const taskList = document.getElementById('taskList'); // Corrected
    newTask.textContent = document.getElementById('inputTask').value; // Corrected
    taskList.appendChild(newTask); // Corrected order and spelling
    document.getElementById('inputTask').value = ""; // Corrected ID
    deleteTask(newTask);
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    newTask.appendChild(deleteBtn); // Corrected spelling
    deleteBtn.onclick = function () {
        newTask.remove();
    }
}