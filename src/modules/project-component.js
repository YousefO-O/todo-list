import { loadProject, setEditProjectFormValues } from "./DOMController.js"
import { editProjectTitle, deleteProject } from "./dataController.js"
import { setSelectedProject, setProjectBeingEdited } from "./DOMController.js"

export function createProjectComponent(project) {
    const container = document.createElement('div')
    container.classList.add('project-component')
    container.dataset.id = project.id

    const title = document.createElement('button')
    title.textContent = project.title
    title.classList.add('view-project-button')
    title.addEventListener('click', ()=>{
        setSelectedProject(project)
        loadProject(project)
    })
    
    const buttonsContainer = document.createElement('div')
    
    const editButton = document.createElement('button')
    editButton.classList.add('edit-project-button')
    editButton.textContent = 'Edit'
    editButton.addEventListener('click', () => {
        setProjectBeingEdited(project)
        document.querySelector('#edited-project-title').value = project.title; 
        document.querySelector('#edit-project-dialog').showModal()
    })

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add('delete-project-button')
    deleteButton.addEventListener('click', ()=>{
        deleteProject(project.id)
    })

    buttonsContainer.appendChild(editButton)
    buttonsContainer.appendChild(deleteButton)

    container.appendChild(title)
    container.appendChild(buttonsContainer)

    return container
}