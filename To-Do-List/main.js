document.getElementById('addTaskButton').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput').value;
    if (taskInput === '') {
        alert('Please enter a task.');
        return;
    }

    var taskList = document.getElementById('taskList');

    var li = document.createElement('li');
    li.textContent = taskInput;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
    document.getElementById('taskInput').value = '';
});