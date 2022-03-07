/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

// build the nav
const sections = document.querySelectorAll("section")
const uList = document.querySelector("ul")
var fragment = new DocumentFragment()

sections.forEach(           //Loop in like-array for sections elements.
    function (sec) {        //Creat and append elements equired for the nav bar, Also Add classes needed.
        const anch = document.createElement("a");
        const listItem = document.createElement("li");
        anch.textContent = sec.dataset.nav;
        listItem.appendChild(anch);
        fragment.append(listItem)
        anch.classList.add("menu__link")
        sec.getAttribute("id")
        anch.setAttribute("href", "#" + sec.getAttribute("id"))
    })
uList.appendChild(fragment) //Append  documen fragment to the <ul>.


// *** Add class 'active' to section when near top of viewport
const secTitle = document.querySelectorAll("h2");
const activeMenuItems = document.querySelectorAll("a");


window.onscroll = function () {
    for (let sec of sections) {     //Loop in sections.

        if (sec.getBoundingClientRect().top < 306) {
            sec.classList.add("your-active-class")      //Set active class to section in the view.
            activeMenuItems.forEach(function (activeItem) {     //Loop in anchor elements text to match with header section text.
                if (activeItem.innerText === sec.querySelector("h2").innerText) {
                    activeItem.classList.add("active_nav_menu")     //After match class added to anchor to highlight.
                }
            })
        }
        if (sec.getBoundingClientRect().bottom < 306 || sec.getBoundingClientRect().top > 306) {
            sec.classList.remove("your-active-class")   //Remove active class to section in the view.
            activeMenuItems.forEach(function (activeItem) {
                if (activeItem.innerText === sec.querySelector("h2").innerText) {
                    activeItem.classList.remove("active_nav_menu")      //Match again the determine when to remove the highlight.
                }
            })
        }

    }
}

// Scroll to anchor ID using scrollTO event
activeMenuItems.forEach(function (sItem) {     //Loop throgh anchors.
    sItem.addEventListener("click", function (event) {      //Catch the event(Click).
        event.preventDefault()              //Stop the normal behevior.

        document.getElementById(sItem.innerText.toLowerCase().replace(/ /g, "")).scrollIntoView({
            behavior: "smooth",             //Set the smooth behevior for the the clcik on any anchor.
            block: "center"

        })
    })
})