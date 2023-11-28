let body = document.querySelector("body")

let section1 = document.createElement("section")
section1.classList.add("section1")

section1.style.padding= "40px"
let container = document.createElement("div")
let home = document.createElement("div")
home.classList.add("home")
container.classList.add("container")
home.style.display = "flex"

home.style.justifyContent = "center"

let left = document.createElement("div")
left.classList.add("left")
left.style.marginTop = "100px"
left.style.width = "50%"
let right = document.createElement("div")
right.classList.add("right")
right.style.width = "50%"

let name1 = document.createElement("p")
name1.classList.add("name1")
name1.innerText = "DESIGN · DEVELOPMENT · MARKETING"
let text = document.createElement("p")
text.classList.add("text")
text.innerText = "I can help your business to"
let head = document.createElement("h1")
head.classList.add("head")
head.innerText = "Get online and grow fast"


let buttons = document.createElement("div")
buttons.classList.add("buttons")
let button1 = document.createElement("button")
button1.classList.add("button1")
button1.innerText = "Resume"
let button2 = document.createElement("button")
button2.classList.add("button2")
button2.innerText = "Projects"

let img = document.createElement("img");


let background = document.createElement("div")
background.classList.add("background")
right.append(background)




background.style.borderRadius = "90px"


body.append(section1)
section1.append(container)
container.append(home)
home.append(left, right)
left.append(name1, text, head, buttons)

buttons.append(button1, button2)

let section2 = document.createElement("section")
section2.classList.add("section2")
section2.style.backgroundColor="rgb(249, 247, 249)"
section2.style.padding = "50px"
let container1 = document.createElement("div")
let about = document.createElement("div")
about.classList.add("about")
about.style.width="60%"
about.style.margin="auto"
about.style.textAlign="center"
container1.classList.add("container")
let head1 = document.createElement("h3")
head1.classList.add("head1")

head1.innerText = "About Me"
let name2 = document.createElement("p")
name2.classList.add("name2")
name2.innerText = "My name is Start Bootstrap and I help brands grow."
let text2 = document.createElement("p")
text2.classList.add("text2")
text2.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?"
let icons = document.createElement("div")
icons.classList.add("icons")
icons.innerHTML = '<i class="bi bi-twitter"></i> <i class="bi bi-linkedin"></i> <i class="bi bi-github"></i>';

body.append(section2)
section2.append(container1)
container1.append(about)
about.append(head1,name2,text2,icons)


let footer= document.createElement("div")
footer.classList.add("footer")
let container3 = document.createElement("div")
container3.style.display="flex"
container3.style.justifyContent="space-between"
container3.style.paddingBlock="20px"
container3.classList.add("container")
let text3= document.createElement("p")
text3.classList.add("text3")
text3.innerText="Copyright © Your Website 2023"
let link = document.createElement("p")
link.classList.add("link")
link.style.display="flex"
link.style.gap="20px"
link.innerHTML=' <a href="#">Privicy</a> <a href="#">Terms</a> <a href="#">Contact</a>'
body.append(footer)
footer.append(container3)
container3.append(text3,link)

let menu=document.querySelector(".bi")
let menuList=document.querySelector(".menu-list")
console.log(menu);
menu.addEventListener("click", () => {
    menuList.classList.toggle("show-menu");
});
