// Seleciona os elementos do DOM
const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

// Adiciona um evento de submissão ao formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Obtém o valor do input
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    // Cria um novo elemento de tarefa (li)
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    // Botão de Remover
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remover';
    deleteBtn.addEventListener('click', function () {
        todoList.removeChild(newTask);
    });

    // Adiciona a tarefa e o botão ao elemento li
    newTask.appendChild(deleteBtn);

    // Marca a tarefa como concluída
    newTask.addEventListener('click', function () {
        newTask.classList.toggle('completed');
    });

    // Adiciona o li à lista ul
    todoList.appendChild(newTask);

    // Limpa o input
    taskInput.value = '';
});
