document.addEventListener('DOMContentLoaded', () => {
    const addTaskbtn = document.querySelector('#addTaskButton');
    const list = document.querySelector('#todolist');

    addTaskbtn.addEventListener('click', (e) => {
        const inputBox = document.querySelector('#todoinput');
        if (inputBox.value === '') {
            return
        }

        const task = document.createElement('li');
        task.textContent = inputBox.value;

        inputBox.value = '';
        list.appendChild(task);
    })

    list.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.remove();
        }
    });
})