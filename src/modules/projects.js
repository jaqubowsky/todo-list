import createProject from "./todoList";

export default function projectsContainer() {
  let projects = [];

  function addProject(title) {
    const project = new createProject(title);
    projects.push(project);
    return project;
  }

  function deleteProject(target) {
    projects = projects.filter(
      (projectItem) => projectItem.getId() !== target.dataset.id
    );
  }

  function getProjects() {
    return projects;
  }

  function getProject(name) {
    return projects.find( (project) => project.title === name)
  }

  function getSelectedProject(id) {
    return projects.find((project) => project.getId() === id);
  }

  return { getProjects, addProject, deleteProject, getSelectedProject, getProject };
}
