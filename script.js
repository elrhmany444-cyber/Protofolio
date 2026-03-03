const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "123456";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === ADMIN_USERNAME && pass === ADMIN_PASSWORD) {
    document.querySelector(".login-container").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  } else {
    alert("Wrong credentials");
  }
}

function addProject() {
  const title = document.getElementById("projectTitle").value;
  const desc = document.getElementById("projectDesc").value;

  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  projects.push({ title, desc });
  localStorage.setItem("projects", JSON.stringify(projects));

  alert("Project Added");
}

function loadProjects() {
  const container = document.getElementById("projects");
  if (!container) return;

  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  projects.forEach(project => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${project.title}</h3><p>${project.desc}</p>`;
    container.appendChild(div);
  });
}

loadProjects();
