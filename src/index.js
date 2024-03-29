import './style.css';

const storageManager = (() => { 
    let todoArray = localStorage.getItem('todos') === null ?
        [{task : 'Make a website',
        details : 'It needs to be interactive and pretty. Who cares if it runs fast or not anyway.',
        date : '2023-02-23',
        project : 'Default',
        done : false},
        {task : 'Call grandma',
        details : "That'll make the both of us happy.",
        date : '2023-02-18',
        project : 'Default',
        done : true}] : 
        JSON.parse(localStorage.getItem('todos'));
    let projectsArray = localStorage.getItem('projects') === null ? ['Default'] : JSON.parse(localStorage.getItem('projects'));

    const addTodo = (todo) => {
        const newObj = {
            task : todo.getTask(),
            details : todo.getDetails(),
            date : todo.getDate(),
            project : todo.getProject().getName(),
            done : todo.isDone()
        }
        todoArray.push(newObj);

        localStorage.setItem('todos', JSON.stringify(todoArray));
    }

    const addProject = (name) => {
        projectsArray.push(name);

        localStorage.setItem('projects', JSON.stringify(projectsArray));
    }

    const generateObjects = () => {
        createProjects();
        createTodos();
    }

    const createProjects = () => {
        for (let i = 0; i < projectsArray.length; i++) {
            const newProject = project(projectsArray[i]);
            projectManager.addProject(newProject);
        }
    }

    const createTodos = () => {
        for (let i = 0; i < todoArray.length; i++) {
            const arrayElem = todoArray[i];
            const projectObj = projectManager.getProject(arrayElem.project);
            const newTodo = todo(arrayElem.task, arrayElem.details, arrayElem.date, projectObj, arrayElem.done);

            todosHolder.addTodo(newTodo);
            projectObj.addTodo(newTodo);
            
            domManager.refreshDom();
        }
    }

    const updateTodo = (task, project, newTask, newDetails, newDate, newProject, newDone) => {
        for (let i = 0; i < todoArray.length; i++) {
            if (todoArray[i].task === task && todoArray[i].project === project) {
                todoArray[i].task = newTask;
                todoArray[i].details = newDetails;
                todoArray[i].date = newDate;
                todoArray[i].project = newProject;
                todoArray[i].done = newDone;
            }
        }
        localStorage.setItem('todos', JSON.stringify(todoArray));
    }

    const removeTodo = (task, project) => {
        for (let i = 0; i < todoArray.length; i++) {
            if (todoArray[i].task === task && todoArray[i].project === project) {
                todoArray.splice(i, 1);
            }
        }
        localStorage.setItem('todos', JSON.stringify(todoArray));
    }

    return { addTodo, addProject, generateObjects, updateTodo, removeTodo }
})();

const todosHolder = (() => {
    const todos = new Array();
    const addTodo = (todo) => {
        todos.push(todo);
    }

    const getSize = () => {
        return todos.length;
    }

    const getTodo = (index) => {
        return todos[index];
    }

    const removeTodo = (index) => {
        todos.splice(index, 1);
    }

    return { addTodo, getSize, getTodo, removeTodo };
})();

const projectManager = (() => {
    const projects = new Array();
    
    const addProject = (project) => {
        projects.push(project);
    }

    const removeProject = (project) => {
        const index = projects.findIndex(project);
        if (index === -1) return;
        projects.splice(index, 1);
    }

    const getProjects = () => {
        const copy = [...projects];
        return copy;
    }
    
    const getProject = (name) => {
        return projects.find(project => project.getName() === name);
    }

    return { addProject, removeProject, getProjects, getProject };
})();

const todo = (task, details, date, project, done) => {
    const index = todosHolder.getSize();

    function getTask() {
        return task;
    }

    function getDetails() {
        return details;
    }

    function getDate() {
        return date;
    }

    function getProject() {
        return project;
    }

    function isDone() {
        return done;
    }
    
    function getIndex() {
        return index;
    }

    function setDone(nowDone) {
        done = nowDone;
    } 

    function edit(newTask, newDetails, newDate, newProject) {
        storageManager.updateTodo(task, project.getName(), newTask, newDetails, newDate, newProject.getName(), isDone());
        task = newTask;
        details = newDetails;
        date = newDate;
        project = newProject;
    }

    return { getTask, getDetails, getDate, getProject, isDone, getIndex, setDone, edit };
};

const project = (name) => {
    const todos = new Array();

    const domElement = document.createElement('li');
    domElement.classList.add('clickable');
    domElement.textContent = name;
    domElement.addEventListener('click', () => {
        domManager.removeContent();
        domManager.showProject(name);
    });
    const projectList = document.querySelector('.projectList');
    projectList.appendChild(domElement);
    
    function addTodo(todo) {
        todos.push(todo);
    }

    function removeTodo(todo) {
        todos.splice(todos.findIndex((element) => element === todo), 1);
    }

    function getTodos() {
        return todos;
    }

    function getName() {
        return name;
    }

    return { addTodo, getTodos, getName, removeTodo };
};

const formManager = (() => {
    const confirmNewTodo = (event) => {
        event.preventDefault();
        const task = document.querySelector('.form-task').value;
        const details = document.querySelector('.form-details').value;
        const date = document.querySelector('.form-date').value;
        const project = document.querySelector('.form-project').value;

        creationManager.createTodo(task, details, date, project, false);
        toggleNewTodo();
    }

    const confirmEditTodo = (event, index) => {
        event.preventDefault();
        const newTask = document.querySelector('.edit-task').value;
        const newDetails = document.querySelector('.edit-details').value;
        const newDate = document.querySelector('.edit-date').value;
        const newProject = projectManager.getProject(document.querySelector('.edit-project').value);

        toggleEdit();
        const todoToEdit = todosHolder.getTodo(index);
        projectManager.getProject(todoToEdit.getProject().getName()).removeTodo(todoToEdit);
        todoToEdit.edit(newTask, newDetails, newDate, newProject);
        newProject.addTodo(todoToEdit);
        domManager.refreshDom();
    }

    const confirmNewProject = (event) => {
        event.preventDefault();
        const projectName = document.querySelector('.project-name').value;

        if (projectManager.getProject(projectName) !== undefined) {
            toggleNewProject();
            alert(`There is already a project called ${projectName}`);
            return;
        }

        if (projectName === '') {
            toggleNewProject();
            alert(`Project name cannot be empty`);
            return;
        }

        creationManager.createProject(projectName);
        toggleNewProject();
    }

    return { confirmNewTodo, confirmEditTodo, confirmNewProject }
})();

const domManager = (() => {
    let lastShown = 'all';
    const content = document.querySelector('.content');
    const allButton = document.querySelector('#all');
    allButton.addEventListener('click', () => {
        showAll();
    })

    const removeTodo = (index) => {
        const toRemove = document.querySelector(`.todo[index="${index}"]`);
        toRemove.remove();
    }

    const getTodoElement = (todo) => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo');
        if (todo.isDone()) todoElement.classList.add('done');
        todoElement.setAttribute('index', `${todo.getIndex()}`);
        todoElement.innerHTML = `            
        <input class="${todo.getIndex()}" onclick="checkboxClicked(${todo.getIndex()})" type="checkbox" name="taskDone" id="taskDone" class="" ${todo.isDone() ? 'checked' : ''}>
        <div class="task">${todo.getTask()}</div>
        <div class="project">${todo.getProject().getName()}</div>
        <div class="date">${todo.getDate()}</div>
        <div class="buttons">
        <span class="material-symbols-outlined edit" onclick="toggleEdit(${todo.getIndex()})">edit</span>
        <span class="material-symbols-outlined details" onclick="toggleDetails(${todo.getIndex()})">visibility</span>
        <span class="material-symbols-outlined delete" onclick="deleteTodo(${todo.getIndex()})">delete</span>
        </div>`;
        return todoElement;
    }

    const removeContent = () => {
        content.innerHTML = '';
    }

    const showProject = (projectName) => {
        const project = projectManager.getProject(projectName);
        const todos = project.getTodos();
        for (let i = 0; i < todos.length; i++) {
            if (todos[i] === null) continue;
            const todoElement = getTodoElement(todos[i]);
            content.appendChild(todoElement);
            todoElement.todoObj = todos[i];
        }
        lastShown = projectName;
    };

    const showAll = () => {
        removeContent();
        const projects = projectManager.getProjects();
        projects.forEach(project => {
            showProject(project.getName());
        });
        lastShown = 'all';
    }

    const refreshDom = () => {
        removeContent();
        if (lastShown === 'all') {
            showAll();
        } else {
            showProject(lastShown);
        }
    }

    return { showProject, showAll, removeContent, removeTodo, refreshDom }
})();

const creationManager = (() => {
    const createTodo = (task, details, date, project) => {
        const projectObj = projectManager.getProject(project);
        const newTodo = todo(task, details, date, projectObj, false);
        todosHolder.addTodo(newTodo);
        projectObj.addTodo(newTodo);
        domManager.refreshDom();
        storageManager.addTodo(newTodo);
    }

    const createProject = (name) => {
        const newProject = project(name);
        projectManager.addProject(newProject);
        storageManager.addProject(name);
    }

    return { createTodo, createProject };
})();

window.checkboxClicked = (index) => {
    const todo = todosHolder.getTodo(index);
    todo.setDone(!todo.isDone());
    storageManager.updateTodo(todo.getTask(), todo.getProject().getName(), todo.getTask(), todo.getDetails(), todo.getDate(), todo.getProject().getName(), todo.isDone());
    const element = document.querySelector(`.todo[index="${index.toString()}"]`);
    element.classList.toggle('done');
}

window.toggleDetails = (index) => {
    const element = document.querySelector('.details-popup');
    element.classList.toggle('show');
    if (!element.classList.contains('show')) return;
    const todo = todosHolder.getTodo(index);

    document.querySelector('.details-task').textContent = todo.getTask();
    document.querySelector('.details-text').textContent = todo.getDetails();
    document.querySelector('.details-project').textContent = todo.getProject().getName();
    document.querySelector('.details-date').textContent = todo.getDate();
}

window.deleteTodo = (index) => {
    domManager.removeTodo(index);
    const todo = todosHolder.getTodo(index);
    const project = todo.getProject();
    project.removeTodo(todo);
    todosHolder.removeTodo(index);
    storageManager.removeTodo(todo.getTask(), todo.getProject().getName());
}

window.toggleNewTodo = () => {
    const element = document.querySelector('.create-popup');
    element.classList.toggle('show');
    if (!element.classList.contains('show')) return;

    const form = document.querySelector('form.create-form');
    form.onsubmit = formManager.confirmNewTodo;

    const selectElem = document.querySelector('.form-project');
    selectElem.innerHTML = '';
    const projects = projectManager.getProjects();
    for (let i = 0; i < projects.length; i++) {
        selectElem.innerHTML += `<option value="${projects[i].getName()}">${projects[i].getName()}</option>`
    }

    document.querySelector('.form-task').value = '';
    document.querySelector('.form-details').value = '';
    document.querySelector('.form-date').value = null;
}

window.toggleEdit = (index) => {
    const element = document.querySelector('.edit-popup');
    element.classList.toggle('show');

    if (!element.classList.contains('show')) return;
    if (index === undefined) return;

    const form = document.querySelector('form.edit-form');
    form.onsubmit = (event) => {
        formManager.confirmEditTodo(event, index);
    }

    const task = document.querySelector('.edit-task');
    const details = document.querySelector('.edit-details');
    const date = document.querySelector('.edit-date');
    const project = document.querySelector('.edit-project');

    const todo = todosHolder.getTodo(index);

    const selectElem = document.querySelector('.edit-project');
    selectElem.innerHTML = '';
    const projects = projectManager.getProjects();
    for (let i = 0; i < projects.length; i++) {
        selectElem.innerHTML += `<option value="${projects[i].getName()}">${projects[i].getName()}</option>`
    }

    task.value = todo.getTask();
    details.value = todo.getDetails();
    date.value = todo.getDate();
    project.value = todo.getProject().getName();
}

window.toggleNewProject = () => {
    const element = document.querySelector('form.form-project');
    element.classList.toggle('show');

    if (!element.classList.contains('show')) return;

    const field = document.querySelector('input.project-name');
    field.value = '';
    field.focus();
    element.onsubmit = formManager.confirmNewProject;
}

// const projectOne = project('Default');
// const projectTwo = project('Moneygun Run');

// projectManager.addProject(projectOne);
// projectManager.addProject(projectTwo);

// const taskOne = todo('Do cool stuff', 'I really need to do more cool stuff. I have not done cool stuff in a very long time.', '1st Dec. 2022', projectOne, false);
// todosHolder.addTodo(taskOne);
// const taskTwo = todo('Do that', 'That would definitely help', '1st Dec. 2023', projectOne, false);
// todosHolder.addTodo(taskTwo);
// const taskThree = todo('Clean dishes', 'It is not very fun but it needs to be done. uh...', '25 January 2023', projectOne, true);
// todosHolder.addTodo(taskThree);
// const taskFour = todo('Change character', 'The current one clashes too much with the recent artistic direction change. We should find something that looks more in tune with the rest. (We could add a stylish cell shading ??)', 'Tomorrow', projectTwo, false);
// todosHolder.addTodo(taskFour);

// projectOne.addTodo(taskOne);
// projectOne.addTodo(taskTwo);
// projectOne.addTodo(taskThree);
// projectTwo.addTodo(taskFour);

// domManager.showProject(projectOne);
// domManager.showProject(projectTwo);
domManager.removeContent();
domManager.showAll();


storageManager.generateObjects();