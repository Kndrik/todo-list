import './style.css';

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

    return { addTodo, getSize, getTodo };
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
    const projectName = project.getName().replace(/\s/g, '');
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

    return { getTask, getDetails, getDate, getProject, isDone, getIndex, setDone };
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

    function getTodos() {
        return todos;
    }

    function getName() {
        return name;
    }

    return { addTodo, getTodos, getName };
};

window.checkboxClicked = (index) => {
    const todo = todosHolder.getTodo(index);
    todo.setDone(!todo.isDone());
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

const domManager = (() => {
    const content = document.querySelector('.content');
    const allButton = document.querySelector('#all');
    allButton.addEventListener('click', () => {
        showAll();
    })

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
        <span class="material-symbols-outlined edit">edit</span>
        <span class="material-symbols-outlined details" onclick="toggleDetails(${todo.getIndex()})">visibility</span>
        <span class="material-symbols-outlined delete">delete</span>
        </div>`;
        return todoElement;
    }

    const changeTodoStatus = (index) => {
        console.log(todosHolder.getTodo(index).getTask());
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
    };

    const showAll = () => {
        removeContent();
        const projects = projectManager.getProjects();
        projects.forEach(project => {
            showProject(project.getName());
        });
    }

    return { showProject, showAll, removeContent }
})();

const projectOne = project('Default');
const projectTwo = project('Moneygun Run');
const projectThree = project('Empty project');

projectManager.addProject(projectOne);
projectManager.addProject(projectTwo);
projectManager.addProject(projectThree);

const taskOne = todo('Do cool stuff', 'I really need to do more cool stuff. I have not done cool stuff in a very long time.', '1st Dec. 2022', projectOne, false);
todosHolder.addTodo(taskOne);
const taskTwo = todo('Do that', 'That would definitely help', '1st Dec. 2023', projectOne, false);
todosHolder.addTodo(taskTwo);
const taskThree = todo('Clean dishes', 'It is not very fun but it needs to be done. uh...', '25 January 2023', projectOne, true);
todosHolder.addTodo(taskThree);
const taskFour = todo('Change character', 'The current one clashes too much with the recent artistic direction change. We should find something that looks more in tune with the rest. (We could add a stylish cell shading ??)', 'Tomorrow', projectTwo, false);
todosHolder.addTodo(taskFour);

projectOne.addTodo(taskOne);
projectOne.addTodo(taskTwo);
projectOne.addTodo(taskThree);
projectTwo.addTodo(taskFour);

//domManager.showProject(projectOne);
// domManager.showProject(projectTwo);
domManager.removeContent();
domManager.showAll();