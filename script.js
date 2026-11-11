
document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const icon = menuToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});


document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    const icon = menuToggle.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  });
});


window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


function triggerToast(text) {
  const toast = document.getElementById("toast");
  toast.textContent = text || "Tudo certo por aqui! 🪼⭐";
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// Manipulação do Formulário
function handleForm(e) {
  e.preventDefault();
  const name = document.getElementById("c-name").value;
  if(name) {
    triggerToast(`Obrigada pela mensagem, ${name}! 🪼`);
    document.getElementById("contact-form").reset();
  }
}