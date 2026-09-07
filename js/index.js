// slå dig løs her... 

//hero

let heroElem = document.querySelector(".hero")
let heroImg = document.createElement("img")
heroImg.src = hero.image
heroImg.classList.add("hero__img")

heroElem.append(heroImg)

let heroDiv = document.createElement("div")
heroDiv.classList.add("hero__div")

let heroHeadline = document.createElement("h1")
heroHeadline.textContent = hero.headline
heroDiv.append(heroHeadline)

let heroPara = document.createElement("p")
heroPara.textContent = hero.copy
heroDiv.append(heroPara)

let heroLink = document.createElement("a")
heroLink.innerHTML = `<img src="${hero.icon}" />Explore`
heroLink.setAttribute("href", "#")
heroDiv.append(heroLink)

heroElem.append(heroDiv)

//services

let servicesElem = document.querySelector(".services")
let servicesUl = document.createElement("ul")
// let servicesLi = document.createElement("li")
// let servicesLi = document.createElement.forEach(services => {


// });
// servicesUl.append(servicesLi)
services.forEach(services => {

    let servicesLi = document.createElement("li")

    let servicesImg = document.createElement("img")
    servicesImg.src = services.illustration
    let servicesHeadline = document.createElement("h2")
    servicesHeadline.textContent = services.headline
    let servicesPara = document.createElement("p")
    servicesPara.textContent = services.text
    let servicesLink = document.createElement("a")
    servicesLink.textContent = services.linktext
    servicesLink.setAttribute("href", "#")

    servicesLi.append(servicesImg)
    servicesLi.append(servicesHeadline)
    servicesLi.append(servicesPara)
    servicesLi.append(servicesLink)

    servicesUl.append(servicesLi)
});
servicesElem.append(servicesUl)

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))
