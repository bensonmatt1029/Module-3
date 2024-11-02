document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    // Add task
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.textContent = taskText;

            // Add complete button
            const completeButton = document.createElement('button');
            completeButton.textContent = '✔️';
            completeButton.className = 'complete-button';
            completeButton.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            // Add remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = '❌';
            removeButton.className = 'remove-button';
            removeButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.appendChild(completeButton);
            li.appendChild(removeButton);
            taskList.appendChild(li);

            // Clear input field
            taskInput.value = '';
        }
    });

    // Allow adding tasks with the Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
});