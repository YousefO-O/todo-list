import { loadProject } from "./DOMController.js"
import { editProjectTitle, deleteProject } from "./dataController.js"
import { setSelectedProject } from "./DOMController.js"

export function createProjectComponent(project) {
    const container = document.createElement('div')
    container.classList.add('project-component')
    let isEditingProject = false

    const title = document.createElement('button')
    title.textContent = project.title
    title.classList.add('view-project-button')
    title.addEventListener('click', ()=>{
        setSelectedProject(project)
        loadProject(project)
    })
    
    const titleInput = document.createElement('input')
    titleInput.maxLength = '20'

    function editProject() {
        if(!isEditingProject) return
        isEditingProject = false
        editProjectTitle(project.id, titleInput.value)
        title.textContent = project.title
        titleInput.replaceWith(title)
        editButton.textContent = 'Edit'
    }

    titleInput.addEventListener('keydown', event => {
        console.log(event.key)
        if(event.key === 'Enter') {
            editProject()
        }
    })
    
    const buttonsContainer = document.createElement('div')
    
    const editButton = document.createElement('button')
    editButton.classList.add('edit-project-button')
    editButton.textContent = 'Edit'
    editButton.addEventListener('click', () => {
        if(!isEditingProject) {
            isEditingProject = true
            titleInput.value = title.textContent
            title.replaceWith(titleInput)
            titleInput.focus()
            editButton.textContent = 'Save'
        }
        else {
            editProject()
        }
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