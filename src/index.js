import './style.css';

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

    return { getTask, getDetails, getDate, getProject, isDone };
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

const domManager = (() => {
    const content = document.querySelector('.content');
    const allButton = document.querySelector('#all');
    allButton.addEventListener('click', () => {
        showAll();
    })

    const getTodoHtml = (todo) => {
        return `
        <div class="todo">
            <input type="checkbox" name="taskDone" id="taskDone" class="" ${todo.isDone() ? 'checked' : ''}>
            <div class="task">${todo.getTask()}</div>
            <div class="project">${todo.getProject().getName()}</div>
            <div class="date">${todo.getDate()}</div>
        </div>`;
    };

    const removeContent = () => {
        content.innerHTML = '';
    }

    const showProject = (projectName) => {
        const project = projectManager.getProject(projectName);
        const todos = project.getTodos();
        for (let i = 0; i < todos.length; i++) {
            if (todos[i] === null) continue;
            const todoHTML = getTodoHtml(todos[i]);
            content.innerHTML += todoHTML;
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

const taskOne = todo('Do cool stuff', 'y', '1st Dec. 2022', projectOne, false);
const taskTwo = todo('Do that', 'y', '1st Dec. 2023', projectOne, false);
const taskThree = todo('Wash toilets', '', '25 January 2023', projectOne, true);

projectOne.addTodo(taskOne);
projectOne.addTodo(taskTwo);
projectOne.addTodo(taskThree);
projectTwo.addTodo(todo('Change character', '', 'Tomorrow', projectTwo, false));

//domManager.showProject(projectOne);
// domManager.showProject(projectTwo);
domManager.removeContent();
domManager.showAll();