import createProject from "./todoList";

export default function projectsContainer() {
  const homeTab = new createProject("Home");
  const todayTab = new createProject("Today");
  const weekTab = new createProject("Week");

  const gymTab = new createProject("Gym");
  const bookTab = new createProject("Book");

  let projects = [homeTab, todayTab, weekTab, gymTab, bookTab];

  function add(project) {
    projects.push(project);
  }

  function getProjects() {
    return projects;
  }

  function deleteProject(target) {
    projects = projects.filter(
      (projectItem) => projectItem.getId() !== target.dataset.id
    );
  }

  function getSelectedProject(id) {
    return projects.filter((project) => project.getId() === id)[0];
  }

  return { getProjects, add, deleteProject, getSelectedProject };
}
