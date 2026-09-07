// slå dig løs her... 


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




//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))
