const body=document.body;
const themeToggle=document.getElementById("themeToggle");
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
const navItems=[...document.querySelectorAll(".nav-link")];
const sections=[...document.querySelectorAll("main section[id]")];

const savedTheme=localStorage.getItem("portfolio-theme");
if(savedTheme==="light"){body.classList.add("light");}
function updateThemeIcon(){themeToggle.textContent=body.classList.contains("light")?"☾":"☼";}
updateThemeIcon();

themeToggle.addEventListener("click",()=>{
  body.classList.toggle("light");
  localStorage.setItem("portfolio-theme",body.classList.contains("light")?"light":"dark");
  updateThemeIcon();
});

function closeMenu(){
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded","false");
  menuToggle.setAttribute("aria-label","Open navigation menu");
}
menuToggle.addEventListener("click",()=>{
  const open=navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
  menuToggle.setAttribute("aria-label",open?"Close navigation menu":"Open navigation menu");
});
navItems.forEach(link=>link.addEventListener("click",closeMenu));

document.addEventListener("keydown",(event)=>{
  if(event.key==="Escape" && navLinks.classList.contains("open")){
    closeMenu();
  }
});

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const activeObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navItems.forEach(item=>item.classList.toggle("active",item.getAttribute("href")===`#${entry.target.id}`));
    }
  });
},{rootMargin:"-30% 0px -60% 0px",threshold:0});
sections.forEach(section=>activeObserver.observe(section));

const form=document.getElementById("contactForm");
const formMessage=document.getElementById("formMessage");
form.addEventListener("submit",(event)=>{
  event.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const subject=document.getElementById("subject").value.trim();
  const message=document.getElementById("message").value.trim();
  const errors=[];

if(name.length<2) errors.push("Please enter your name.");
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Please enter a valid email address.");
if(subject.length<2) errors.push("Please enter a subject.");
if(message.length<10) errors.push("Message should be at least 10 characters.");

const fields=[
  ["name",name.length<2],
  ["email",!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)],
  ["subject",subject.length<2],
  ["message",message.length<10]
];

fields.forEach(([id,invalid])=>{
  document.getElementById(id).setAttribute("aria-invalid",String(invalid));
});

formMessage.className="form-message";

if(errors.length){
  formMessage.innerHTML=errors.map(error=>`<div>${error}</div>`).join("");
  formMessage.classList.add("error");
  return;
}
  formMessage.textContent="Thanks! Your message passed validation. Connect the form to a backend/email service when you are ready.";
  formMessage.classList.add("success");
  form.reset();
});

document.getElementById("year").textContent=new Date().getFullYear();
