import createProject from "./project";

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

  function deleteProject(id) {
    projects = projects.filter((projectItem) => projectItem.getId() !== id);
  }

  return { getProjects, add, deleteProject };
}
