const navBar = document.querySelector(".nav-bar");
const header = document.querySelector("header");
const faders = document.querySelectorAll(".fade-in");
const leftGridContent = document.querySelectorAll(".left-grid-content");
const rightGridContent = document.querySelectorAll(".right-grid-content");


console.log(navBar);
console.log(header)

mainContentObserverOption = {
    rootMargin: "-100px 0px 0px 0px"
};

aboutContentObserverOption = {
    //section fully intersect only apply the opacity class
    threshold: 1,
    rootMargin: "0px 0px -200px 0px"
}

gridContentObserverOption = {
    //section fully intersect only apply the opacity class
    threshold: 1,
    rootMargin: "0px 0px 0px 0px"
}

const mainContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (!entry.isIntersecting) {
            navBar.classList.add("nav-bar-scroll");
        } else {
            navBar.classList.remove("nav-bar-scroll");
        }
    })


}, mainContentObserverOption);

const aboutContentObserver = new IntersectionObserver((entries, aboutContentObserver) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            aboutContentObserver.unobserve(entry.target);
        }
    })
}, aboutContentObserverOption)


const gridContentObserver = new IntersectionObserver((entries, gridContentObserver) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("animation");
            aboutContentObserver.unobserve(entry.target);
        }
    })
}, gridContentObserverOption)


mainContentObserver.observe(header);


leftGridContent.forEach(gridItems => {
    gridContentObserver.observe(gridItems);
})

rightGridContent.forEach(gridItems => {
    gridContentObserver.observe(gridItems);
})

faders.forEach(fader => {
    aboutContentObserver.observe(fader);
})



function toggleNav() {
    var getNavBar = document.querySelectorAll("ul");

    for (let nav of getNavBar) {
        console.log("bla");
        nav.classList.toggle("nav-show");
    }
}